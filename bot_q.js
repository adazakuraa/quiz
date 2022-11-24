let d=[]; //問題文と答えを格納する配列
let m=5;
let point=0;
let mondai=[] //問題番号を格納する
let fin_f=0; //ゲーム中かどうか


//配列をシャッフルする
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//csvファイルの読み込み => データを多次元配列に格納
function init(){
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    let file = document.querySelector('#getfile');
    file.onchange = function (){
        //画面を消す
        for(var n=0;n<d.length;n++){
            var preid="i"+n
            var a=document.getElementById(preid);
            if(a!=null){
                var parent=a.parentNode;
                parent.remove();
            }
        }
        spinner.classList.remove('loaded');
        let fileList = file.files;
        console.log(fileList)
        let reader = new FileReader(); 
        reader.readAsText(fileList[0]);
        reader.onload=function(){
            let a=reader.result;
            let b = a.split('\r\n');
            d=[];
            for(let i = 0; i<b.length; i++){
                let c =b[i].split(',');
                d.push(c);
            }
            d=shuffle(d)
            spinner.classList.add('loaded');
            create_bot();
        }
    };
};

//リストを生成する
function create_bot(){
    console.log("リストを生成");
    var bot=document.getElementById("bot");
    if(!bot){
        bot=document.createElement("div");
        bot.id="bot";
        bot.className="list-group"
    }

    for (var n=0;n<5;n++){
        //css用
        //枠
        var di=document.createElement("div")
        di.className="box8"
        var prid="q"+n
        di.id=prid;

        var p=document.createElement("p");
        //回答ボタン
        var b=document.createElement("button");
        b.setAttribute("type","button")
        b.setAttribute("onclick","ans(this)")
        b.className="btn btn-outline-dark"
        b.innerHTML="答える"
        var buid="a"+n
        b.id=buid
        bot.appendChild(di);
        
        p.innerHTML=d[n][0];
        di.append(p,b);
        
    }
    console.log(document.body)
    document.body.appendChild(bot);
    mondai=[0,1,2,3,4];
    fin_f=0;
}

//リストを追加する
function add_bot(){
    point+=1;
    var bot=document.getElementById("bot");
    var di=document.createElement("div")
    di.className="box8"
    var prid="q"+m
    di.id=prid;
    var p=document.createElement("p");
    //回答ボタン
    var b=document.createElement("button");
    b.setAttribute("type","button")
    b.setAttribute("onclick","ans(this)")
    b.className="btn btn-outline-dark"
    b.innerHTML="答える"
    var buid="a"+m
    b.id=buid

    bot.appendChild(di);
    p.innerHTML=d[m][0];
    di.append(p,b);
    mondai.push(m)
    m+=1;
}


//回答する
function ans(thi){
    if(fin_f==0){
        var str=thi.id.slice(1)
        var a=document.getElementById(thi.id);
        if(window.confirm("回答しますか？")){
            answer=prompt("答えを入力してください");  
            if(answer=="" || d[str][1].indexOf(answer)==-1){
                alert("不正解");
            }
            else{
                alert("正解！\n答え："+d[str][1]);
                a.innerHTML=d[str][1];
                var parent=a.parentNode;
                parent.remove();
                mondai=mondai.filter(n => n !== Number(str));
                add_bot();
            }
            
        }
        else{
            if(window.confirm("ヒントを見ますか？")){
                hint(thi);
            }
        }
    }
    else{
        alert("リセットボタンを押してゲームをやり直してください。")
    }
}

//ヒントを見る
function hint(thi){
    var str=thi.id.slice(1);
    first=d[str][1].charAt();
    prid="q"+str;
    div=document.getElementById(prid);

    p2=document.createElement("p");  
    p2.innerHTML="ヒント："+first;
    d0=del(str)[0]
    d1=del(str)[1]
    for (n=0;n<d0-1;n++){
        if(n==d1-1){
            p2.innerHTML+="・"
        }
        else{
            p2.innerHTML+="◯"
        }
    }
    div.appendChild(p2)

}

function del(str){
    i=Math.max(d[str][1].indexOf("("),d[str][1].indexOf("（"))
    if(i>=0){
        i2=Math.max(d[str][1].indexOf(")"),d[str][1].indexOf("）"));
        rep=d[str][1].length-(i2-i+1)
    }
    else{
        rep=d[str][1].length
    }
    nagulo=d[str][1].indexOf("・")
    return [rep,nagulo]
}


//問題セットを終了させる
function fin(){
    if(fin_f==0){
        alert("全部で"+point+"問正解しました！");
        console.log(mondai)
        for(i=0;i<5;i++){
            prid="q"+mondai[i]
            div=document.getElementById(prid);
            p2=document.createElement("p");  
            p2.innerHTML="答え："+d[mondai[i]][1];
            div.appendChild(p2)
        }
        fin_f=1;
    }
    else{
        alert("リセットボタンを押してゲームをやり直してください。")
    }
}

//ゲームをやり直す
function reset(){
    if(fin_f==0){
        alert("終了ボタンを押してください")
    }
    else{
        //削除
        prid="q"+mondai[0]
        div=document.getElementById(prid);
        parent=div.parentNode;
        parent.remove();

        //初期化
        fin_f=0;
        m=5;
        point=0;
        d=shuffle(d)
        create_bot()
    } 
}


