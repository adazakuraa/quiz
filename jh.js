const touchArea1 = document.getElementById("touch-area1")
//タッチに反応する
touchArea1.addEventListener("touchstart", () => {
      if(count==0 && enter==0){
          int();
      }
      else if(count==1 && enter==0){
          stop();
      }
      else if(count==2 && enter==0){
          next();
      }
})

//読み込むcsvファイルをプルダウンから取得
function select(n){
    n=parseInt(n,10);
    switch(n){
        case 1:
            csv_read("csv/日本史.csv");
            break;
    }
}

//プルダウン
window.addEventListener('DOMContentLoaded', function(){
       const spinner = document.getElementById('loading');

	// select要素を取得
	var select_csv = document.querySelector("select[name=csv]");
     spinner.classList.remove('loaded');
     select(select_csv.value);

	select_csv.addEventListener('change',function(){
                spinner.classList.remove('loaded');
		select(select_csv.value);
	});
});

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
            for(let i = 1; i<b.length; i++){
                let c =b[i].split(',');
		c=c.filter(Boolean);
                d.push(c);
                d=shuffle(d);
                spinner.classList.add('loaded');
            }
	    document.getElementById("mondai").innerHTML = "Enterを押すかタッチをすると問題文が表示されます。";
    })
    .catch((error) => {
        console.log('エラーが発生しました。');
    })
}


//問題文と答えを格納する配列
let d=[];

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

//準備
let q=0; //q+1問目の問題　
let q2=0; //表示用
let k=0; //問題文のk+1文字目
let time=100; //文字が表示される間隔（ミリ秒）
let time2=3000; //問題が読み切られてから答えが表示されるまでの時間（ミリ秒）
let time3=1400  //第n問目の表示から問題文が表示されるまでの時間（ミリ秒）
let count=0;
let count2=0;
let text=''; //ヒントの種類
let ge_no=[]; //出題する情報
let k2=0; //k2番目のヒント
var music1 = new Audio('music/question.mp3'); //効果音
var music2 = new Audio('music/button.mp3');
var music3 = new Audio('music/correct.mp3');
var music4 = new Audio('music/wrong.mp3');
var music5 = new Audio('music/win.mp3');
var music6 = new Audio('music/lose.mp3');
var music7 = new Audio('music/through.mp3');
let ans_time=2; //答えたタイミング
let enter=0; //キーが押されているかどうか



//ランダムに出題範囲を決定する
function random_q(length){
    var randoms = [];
    /** 最小値と最大値 */
    var min = 2, max = length-1;
    
    /** 重複チェックしながら乱数作成 */
    for(i = min; i <= 4; i++){
        while(true){
            var tmp = intRandom(min, max);
            if(!randoms.includes(tmp) && d[q][tmp]!="不明"){
            randoms.push(tmp);
            break;
            }
        }
    }
    /** min以上max以下の整数値の乱数を返す */
    function intRandom(min, max){
        return Math.floor( Math.random() * (max - min + 1)) + min;
    }
    randoms=randoms.sort((a,b) => (a < b ? -1 : 1))
    return randoms;
}


let id;
let id2;
let id3;
//指定した間隔でappchar関数を呼び出す
async function int(){
    if(d.length==0){
        alert("使用する問題ファイルを選択してください。");
    }
    else{
        console.log('int')
        question="";
        count=1;
        enter=1;
	k2=0;
        if(q==0){
            document.getElementById("mondai").innerHTML = "";
        }
        music1.play();
        document.getElementById("ima").innerHTML = "第"+(q2+1)+"問";
        await sleep(time3-200);
        document.getElementById("ima").innerHTML = "";
        document.getElementById("ima").innerHTML = "ジャンル："+d[q][1];
        ge_no= random_q(d[q].length);
        console.log(ge_no)
        await sleep(time3);
        enter=0;
        stopb=0;
        document.getElementById("ima").innerHTML = "";
        id=setInterval(appchar,time);
        q2+=1;
    }
}

//２つ目のヒント読み上げ
async function int2(){
    await sleep(time3*1.5);
    k2+=1;
    id2=setInterval(appchar2,time);
}

//３つ目のヒント読み上げ
async function int3(){
    await sleep(time3*1.5);
    k2+=1;
    id3=setInterval(appchar3,time);
}

//ヒントの種類を提示
function hint(k2){
    if(ge_no[k2]==2){
        return text='・';
    }
    else if(ge_no[k2]==3){
        if (d[q][1]=="人物"){
            return text='・出身は';
        }
        else{
            return text='・場所は';
        }
    }
    else{
        return text='・';
    }
}

//問題文を読み上げる & 読み終わったら指定ミリ秒後にans関数を呼び出す
async function appchar(){
    if (stopb==0){
        text=hint(k2);
        question=text+d[q][ge_no[k2]];
        txt = question.charAt(k);
        let x = document.getElementById("mondai").innerHTML;
        if (k <= question.length) {
            x = x + txt;
            document.getElementById("mondai").innerHTML = x;
            k+=1;
        }
        else{
            clearInterval(id);
            k=0;
            int2();
        }
    }
    else{
        clearInterval(id);
    }
}

async function appchar2(){
    if (stopb==0){
        text=hint(k2);
        question=text+d[q][ge_no[k2]];
        txt = question.charAt(k);
        let x = document.getElementById("mondai2").innerHTML;
        if (k <= question.length) {
            x = x + txt;
            document.getElementById("mondai2").innerHTML = x;
            k+=1;
        }
        else{
            clearInterval(id2);
            k=0;
            int3();
        }  
    }
    else{
        clearInterval(id2);
    }
}

async function appchar3(){
    if (stopb==0){
        text=hint(k2);
        question=text+d[q][ge_no[k2]];
        txt = question.charAt(k);
        let x = document.getElementById("mondai3").innerHTML;
        if (k <= question.length) {
            x = x + txt;
            document.getElementById("mondai3").innerHTML = x;
            k+=1;
        }
        else{
            clearInterval(id3);
            k=0;
            start();
        }
    }
    else{
        clearInterval(id3);
    }
}




//キーイベントを受け付けてstop関数を呼び出す
document.addEventListener("keydown", (event) => {
    let keyname=event.key;
    if(keyname=="Enter" || keyname=="Shift"){
        if(count==0 && enter==0){
            int();
        }
        else if (count==1 && enter==0){
            stop();
        }
        else if(count==2 && enter==0){
            next();
        }
    }
    else if(keyname=="Backspace"){
        if(count2==0){
            count2=1;
            alert("一人用モードになりました。得点が表示されなくなります。");
        }
        else{
            count2=0;
            alert("通常モードに戻りました。得点が表示されるようになります。")
        }
    }
});

seikai=0; //正解数
let stopb=0; //stopボタンが押されたか
let best=0; //ベストスコア
let maru=5; //出題数

//問題文を止める
async function stop() {
    stopb=1;
    console.log('stop')
    enter=1;
    clearInterval(id);
    clearInterval(id2);
    clearInterval(id3);
    let result = prompt("答えを入力して「OK」を押してください。");
    ans();
    await sleep(1);
    //何も入力していない
    if (result==""){
        if(count2==0){
            let correct=prompt("不正解。 \n\n"+"現在の獲得ポイント:"+seikai+"\n\n正誤を修正したければ1を、この問題を無かったことにしたければ2を押してください。"); 
            if(zenkaku2Hankaku(correct)=="1"){
                seikai+=3-k2;
		alert("現在のポイント："+seikai);
            } 
        }
        res();
    }
    //正解なら
    else if(d[q][0].indexOf(result)!=-1){
        seikai+=3-k2;
        music3.play();
        let correct=prompt("正解! \n\n"+"現在の獲得ポイント:"+seikai+"\n\n正誤を修正したければ1を、この問題を無かったことにしたければ2を押してください。");
        if(zenkaku2Hankaku(correct)=="1"){
            seikai-=3-k2;
            alert("現在のポイント："+seikai);
        }
        if(zenkaku2Hankaku(correct)=="2"){
            seikai-=3-k2;
        }
        res();
    }
    //誤答なら or キャンセルなら
    else{
        music4.play();
        let correct=prompt("不正解。 \n\n"+"現在の獲得ポイント:"+seikai+"\n\n正誤を修正したければ1を、この問題を無かったことにしたければ2を押してください。"); 
        if(zenkaku2Hankaku(correct)=="1"){
            seikai+=3-k2;
            alert("現在のポイント："+seikai);
        } 
        res();
    }
    

}

//勝利or失格を通知する
function res(){
    enter=0;
    count=2;
    k2=0;
}

//答えを表示する
function ans(){
    text2=hint(0);
    question1=text2+d[q][ge_no[0]];
    text2=hint(1);
    question2=text2+d[q][ge_no[1]];
    text2=hint(2);
    question3=text2+d[q][ge_no[2]];
    var ans=["A. "]+d[q][0];
    document.getElementById("mondai").innerHTML = question1;
    document.getElementById("mondai2").innerHTML = question2;
    document.getElementById("mondai3").innerHTML = question3;
    document.getElementById("ans").innerHTML = ans;
}

//画面をリセットして次の問題を用意する
function next() {
    console.log('next')
    enter=1;
    question="";
    document.getElementById("mondai").innerHTML = "";
    document.getElementById("mondai2").innerHTML = "";
    document.getElementById("mondai3").innerHTML = "";
    document.getElementById("ans").innerHTML = "";
    document.getElementById("myProgress").value = -1;
    q+=1;
    k=0; 
    count=0;
    enter=0;
    if(q2==maru || q2==zenkaku2Hankaku(maru)){
        if (seikai>best){
            best=seikai;
        }
        alert('今回の結果: '+seikai+'ポイント（ベスト: '+best+'ポイント）');
        reset();
    }
}

function zenkaku2Hankaku(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}

//ルール設定
function rule(){
    if(window.confirm(maru+"問のクイズを出題します。出題数を変更しますか？")){
        maru=prompt("何問出題しますか？");        
    }
}

//速度設定
function speed(){
    if(window.confirm("問題文が表示されるスピードは'1文字/"+time+"ミリ秒'です。変更しますか？")){
        time=prompt("'1文字/何ミリ秒'にしますか？");
    }
    if(window.confirm("答えが表示されるまでの時間は'"+time2+"ミリ秒'です。変更しますか？")){
        time2=prompt("'何ミリ秒'にしますか？");
    }
}

//連想配列の消去
function del(li){
    for(var i in li){
        delete li[i];
    }
}

//正解数等のリセット
function reset(){
    seikai=0;
    q2=0;
    alert("ポイントがリセットされました。");
}

//bgmをミュートする
function enableMute() {
    music2.muted = true;
    music3.muted = true;
    music4.muted = true;
    music1.muted = true;
    music5.muted = true;
    music6.muted = true;
    music7.muted = true;
}

//bgmをonにする
function disableMute() {
  music1.muted = false;
  music2.muted = false;
  music3.muted = false;
  music4.muted = false;
  music5.muted = false;
  music6.muted = false;
  music7.muted = false;
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
    music7.play();
    enter=0;
    count=2;
    ans();
  }
  else if(count==2){
    document.getElementById("myProgress").value = -1;
    clearInterval(intervalID);
  }
}
