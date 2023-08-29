//問題文と答えを格納する配列
let d=[];

//答えが漢字
let d_kanji=[];
let d_katakana=[];
let d_jinmei=[];
let d_seibutu=[];
let d_kotoba=[];
let d_alphabet=[];
let d_sonota=[];

//取得した配列をランダムにシャッフル
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//指定ミリ秒の間、処理を止める
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let choice_button=["one","two","three","four"]
//選択肢やボタンを非表示にする
function del(ch){
    for(let n=0; n<ch.length; n++){
        let ele = document.getElementById(ch[n]);
        ele.style.display = 'none';
    }
}

//選択肢やボタンを表示する
function appear(ch){
    switch(d[q][3]){
        case "漢字":
            dq=d_kanji;
            break;
        case "カタカナ":
            dq=d_katakana;
            break;
        case "人名":
            dq=d_jinmei;
            break;
        case "生物":
            dq=d_seibutu;
            break;
        case "言葉":
            dq=d_kotoba;
            break;
        case "アルファベット":
            dq=d_alphabet;
            break;
        case "":
            dq=d_sonota;
    }

    choice(ch,dq);
    for(let n=0; n<ch.length; n++){
        let ele = document.getElementById(ch[n]);
        ele.style.display = '';
    }
}

//選択肢を生成する
function choice(ch,dq){
    n=1
    dq2 = dq.filter(item => item[n] !== d[q][1]);
    dq2=shuffle(dq2);
    console.log(d[q][1])
    d3=[d[q][1],dq2[0][1],dq2[1][1],dq2[2][1]];
    console.log(d3)

    d3=shuffle(d3);
    for(let n=0; n<ch.length; n++){
        document.getElementById(ch[n]).innerHTML=d3[n];
    }
}

//csvファイルの読み込み => データを多次元配列に格納
function init(){
    del(choice_button);
    document.getElementById("mondai").innerHTML = "Spaceを押してゲームを開始。";
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');

    csv_read("csv/hukusyu.csv");
        spinner.classList.remove('loaded');
      
};

//csvファイルを読み込み
function csv_read(csv_path)
{
    const spinner = document.getElementById('loading');
    fetch(csv_path)
    .then((res) => {
        if(!res.ok) {
            console.log('正常にリクエストを処理できませんでした。');
        }
        return res.text();
    })
    .then((csv_data) => {
            let b =csv_data.split('\r\n');
            d=[];
            for(let i = 0; i<b.length; i++){
                let c =b[i].split(',');
                d.push(c);
                d=shuffle(d);
                spinner.classList.add('loaded');
            }
    })
    .catch((error) => {
        console.log('エラーが発生しました。');
    })
}

let q=0; //n+1問目
let q2=0; //表示用
let count=0;

let k=0; //問題文のk+1文字目
let time=80; //文字が表示される間隔（ミリ秒）
let time2=2000; //問題が読み切られてから答えが表示されるまでの時間（ミリ秒）
let time3=1000;  //第n問目の表示から問題文が表示されるまでの時間（ミリ秒）

let ans_flag=0; //答えを表示後は1になる
let goto_flag=0; //誤答したら1になる

let cId;


//キーイベントを受け付けて適切な関数を呼び出す
document.addEventListener("keydown", (event) => {
    let keyname=event.key;
    if( keyname==" "){
        event.preventDefault();
        if(count==0){
            const n = 3; // 配列のインデックス
            d_kanji = d.filter(item => item[n] === "漢字");
            d_katakana = d.filter(item => item[n] === "カタカナ");
            d_jinmei = d.filter(item => item[n] === "人名");
            d_seibutu = d.filter(item => item[n] === "生物");
            d_kotoba = d.filter(item => item[n] === "言葉");
            d_alphabet = d.filter(item => item[n] === "アルファベット");
            d_sonota = d.filter(item => item[n] === "");
            int()
        }
    }
    if(k>0)
    if (event.key === 'v') {
        cId="one";
        ans(cId);
      } else if (event.key === 'b') {
        cId="two";
        ans(cId);
      } else if (event.key === 'n') {
        cId="three";
        ans(cId);
      } else if (event.key === 'm') {
        cId="four";
        ans(cId);
      }
});

let id;
//指定した間隔でappchar関数を呼び出す
async function int(){
    if((q+1)%10==0){
        if(time!=10){
            time-=10;
        }
    }
    count=1;
    const titleElement = document.getElementById('titleElement');
    titleElement.textContent = (q2+1)+"問目";
    question="";
    count=1;
    if(q==0){
        document.getElementById("mondai").innerHTML = "";
    }
    appear(choice_button);
    document.getElementById("ima").innerHTML = "第"+(q2+1)+"問";
    document.getElementById("ima2").innerHTML = "問題形式："+d[q][2];
    await sleep(time3);
    id=setInterval(appchar,time);
    q2+=1;
}

//問題文を読み上げる & 読み終わったら指定ミリ秒後にans関数を呼び出す
async function appchar(){
    document.getElementById("ima").innerHTML = "";
    document.getElementById("ima2").innerHTML = "";
    question=["Q. "]+d[q][0];
    txt = question.charAt(k);
    let x = document.getElementById("mondai").innerHTML;
    if (k <= question.length) {
        x = x + txt;
        document.getElementById("mondai").innerHTML = x;
        k+=1;
    }
    else{
        clearInterval(id);
        goto_flag=1;
        alert("ゲームオーバー！\n\n"+q+"問正解。");
        show_ans();
        look(d[q][1]).style.backgroundColor = "green";

    }
}


//選択肢が押されたときの挙動
function ans(clicked_id){
    if(ans_flag==0 && goto_flag!=1){
        ans_flag=1;
        clearInterval(id);
        check(clicked_id);    
    }
    else if(goto_flag==1){
        let result = prompt("もう一回プレイするには「OK」を押してください。");
        if(result!=null){
            top_return();
        }
    }
    
}

//正誤判定をする
async function check(clicked_id){
    //選ばれた選択肢の情報を取得
    let answer=document.getElementById(clicked_id).innerHTML;
    let answer2=document.getElementById(clicked_id);

    //正解なら
    if(answer==d[q][1]){
        answer2.style.backgroundColor = "green";
        await sleep(300);
        alert("正解!!")
        show_ans();
        start();
        setTimeout(next,time2); 
    }
    //誤答なら
    else{
        goto_flag=1;
        answer2.style.backgroundColor = "red";
        look(d[q][1]).style.backgroundColor = "green";
        await sleep(300);
        alert("ゲームオーバー！\n\n"+q+"問正解。");
        show_ans();
    }
}

//正解の選択肢を探す
function look(an){
    for(let n=0; n<4; n++){
        if(document.getElementById(choice_button[n]).innerHTML==an){
            return document.getElementById(choice_button[n]);
        }
    }
}

//選択肢の色を元に戻す
function re_color(){
    for(let n=0; n<4; n++){
        document.getElementById(choice_button[n]).style.backgroundColor = "#668ad8";
    }
}

//答えを表示する
function show_ans(){
    question=["Q. "]+d[q][0];
    document.getElementById("mondai").innerHTML = question;
}

//トップページに戻す
function top_return(){
    del(choice_button);
    document.getElementById("mondai").innerHTML = "Spaceを押してゲームを開始。";
    d=shuffle(d);
    q=0;
    q2=0;
    count=0;
    k=0;
    ans_flag=0;
    goto_flag=0;
    const titleElement = document.getElementById('titleElement');
    titleElement.textContent ="四択クイズ";
    re_color();
}

//次の問題へ行く
function next(){
    k=0;
    ans_flag=0;
    goto_flag=0;
    re_color();
    q+=1;
    document.getElementById("mondai").innerHTML = "";
    int();
}


var intervalID;
//一定の間隔でupdataProgressを呼び出す
function start() {
  Max = (time2-200)/50;
  document.getElementById("myProgress").max = Max;
  intervalID = setInterval("updateProgress()", 50);
}

// プログレスバーを更新する
function updateProgress() {
  document.getElementById("myProgress").value = Max;
  Max -= 1;
  if (Max == -1) {
    clearInterval(intervalID);
    ans();
  }
  else if(count==2){
    document.getElementById("myProgress").value = -1;
    clearInterval(intervalID);
  }
}
