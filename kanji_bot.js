let d=[]; //問題文と答えを格納する配列
let d2=[]
let d3=[]
let d4=[]
let m=0; //現在の位置
let m2=0; //そのセットの初期スタート位置
let m_2=0;
let m2_2=0;
let volume=100;
let point=0;
let fin_f=0; //ゲーム中かどうか
let re_flag=0; //1セット目かどうか
let turn=1; //何周目か
let black=1; //すべて黒文字で表示
let fl=0;

//読み込むcsvファイルをプルダウンから取得
function select(n){
    n=parseInt(n,10);
    switch(n){
        case 1:
            csv_read("csv/漢字（平易）.csv");
            break;
        case 2:
            csv_read("csv/漢字（難）csv");
            break;
        case 3:
            csv_read("csv/四字熟語.csv");
            break;
        case 4:
            csv_read("csv/kotowaza.csv");
            break;
    }
}
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
                vol=document.getElementById("volume");
                vol.value=d.length
            }
    })
    .catch((error) => {
        console.log('エラーが発生しました。');
    })
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



document.addEventListener("keydown", (event) => {
    let keyname=event.key;
    if(keyname=="Shift"){
        if(black==0){
            alert("変更しました。1")
            black=1;
        }
        else if(black==1){
            alert("変更しました。2")
            black=2;
        }
        else{
            alert("変更しました。0")
            black=0;
        }
        
    }
});

//配列をシャッフルする
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


//新しいリストの生成
function re_list(){
    d2=[]
    for(n=m2;n<m+1;n++){
        d2[n]=d[n]
        d3.push(d[n])
    }
    d2=d2.filter(Boolean)
    d2=shuffle(d2)
    return d2
}

//リストを生成する
function create_bot(thiss){
    ima=document.getElementById("ima");
    if(turn==1){
        m_2=m
        m2_2=m2
        ima.innerHTML=m+1+"問目"
    }

    if(turn==2){
        var a=document.getElementById(thiss.id);
        var parent=a.parentNode;
        parent.remove();
        re_list()
        alert("1周目終了")
        m=m_2;
        m2=m2_2;
        turn=3;
        ima.innerHTML=m-m2+1+"問目"
    }
    volu=document.getElementById("volume");
    volume=volu.value
    if(volume<m){
        console.log("バグ")
        volume=m
    }
    console.log("リストを生成");
    bot=document.createElement("div");
    bot.id="bot";
    bot.className="list-group"
    

    var di=document.createElement("div")
    di.className="box8"
    var prid="q"+m
    di.id=prid;

    var p=document.createElement("p");
        //回答ボタン
    var b=document.createElement("button");
    b.setAttribute("type","button")
    b.setAttribute("onclick","show(this)")
    b.className="btn btn-outline-dark btn1"
    b.innerHTML="答えを見る"
    var buid="a"+m
    b.id=buid

    

    bot.appendChild(di);
        
    if(turn==1){
        if(black==0){
            p.innerHTML="<font size='5px'> "+d[m][0].slice(0,d[m][0].indexOf("「")+1)+"<font color='red'>"+d[m][0].slice(d[m][0].indexOf("「")+1,d[m][0].indexOf("」"))+"</font>"+d[m][0].slice(d[m][0].indexOf("」"))
        }
        else{
            p.innerHTML="<font size='5px'> "+d[m][0].slice(0,d[m][0].indexOf("「")+1)+d[m][0].slice(d[m][0].indexOf("「")+1,d[m][0].indexOf("」"))+d[m][0].slice(d[m][0].indexOf("」"))

        }
    }
    else{
        if(black==0){
            p.innerHTML="<font size='5px'> "+d2[m-m2][0].slice(0,d2[m-m2][0].indexOf("「")+1)+"<font color='red'>"+d2[m-m2][0].slice(d2[m-m2][0].indexOf("「")+1,d2[m-m2][0].indexOf("」"))+"</font>"+d2[m-m2][0].slice(d2[m-m2][0].indexOf("」"));
        }
        else if(black==2){
            p.innerHTML="<font size='5px'> "+d2[m-m2][1]
        }
        else{
            p.innerHTML="<font size='5px'> "+d2[m-m2][0].slice(0,d2[m-m2][0].indexOf("「")+1)+d2[m-m2][0].slice(d2[m-m2][0].indexOf("「")+1,d2[m-m2][0].indexOf("」"))+d2[m-m2][0].slice(d2[m-m2][0].indexOf("」"));
        }
    }
    
    di.append(p,b);
        
    var last=document.getElementById("last");
    last.after(bot);
}



//リストを追加する
function add_bot(th){
    ima=document.getElementById("ima");
    m+=1;
    console.log("add_bot")
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
    b.setAttribute("onclick","show(this)")
    b.className="btn btn-outline-dark btn1"
    b.innerHTML="答えを見る"
    var buid="a"+m
    b.id=buid

    

    bot.appendChild(di);
    if(turn==1){
        ima.innerHTML=m+1+"問目"
        if(black==0){
            p.innerHTML="<font size='5px'>"+d[m][0].slice(0,d[m][0].indexOf("「")+1)+"<font color='red'>"+d[m][0].slice(d[m][0].indexOf("「")+1,d[m][0].indexOf("」"))+"</font>"+d[m][0].slice(d[m][0].indexOf("」"))
        }
        else{
            p.innerHTML="<font size='5px'>"+d[m][0].slice(0,d[m][0].indexOf("「")+1)+d[m][0].slice(d[m][0].indexOf("「")+1,d[m][0].indexOf("」"))+d[m][0].slice(d[m][0].indexOf("」"))
        }
    }
    else{
        ima.innerHTML=m-m2+1+"問目"
        if(black==0){
            p.innerHTML="<font size='5px'> "+d2[m-m2][0].slice(0,d2[m-m2][0].indexOf("「")+1)+"<font color='red'>"+d2[m-m2][0].slice(d2[m-m2][0].indexOf("「")+1,d2[m-m2][0].indexOf("」"))+"</font>"+d2[m-m2][0].slice(d2[m-m2][0].indexOf("」"));
        }
        else if(black==2){
            p.innerHTML="<font size='5px'> "+d2[m-m2][1]
        }
        else{
            p.innerHTML="<font size='5px'> "+d2[m-m2][0].slice(0,d2[m-m2][0].indexOf("「")+1)+d2[m-m2][0].slice(d2[m-m2][0].indexOf("「")+1,d2[m-m2][0].indexOf("」"))+d2[m-m2][0].slice(d2[m-m2][0].indexOf("」"));
        }
    }
    di.append(p,b);
    
    
}

//答えを見る
function show(thi){
    volu=document.getElementById("volume");
    volume=volu.value
    if(volume<(m-m2)){
        console.log("バグ２")
        volume=m
    }
    var a=document.getElementById(thi.id);
    var parent=a.parentNode;
    if(turn==1){
        parent.innerHTML="<font size='5px'>"+d[m][1]+"</font><br><br>（意味）<br>"+d[m][2]
    }
    else {
        if(black==2){
            parent.innerHTML="<font size='5px'> "+d2[m-m2][0]
        }
        else{
            parent.innerHTML="<font size='5px'>"+d2[m-m2][1]+"</font><br><br>（意味）<br>"+d2[m-m2][2]
        }
    }


    next=document.createElement("button");
    next.setAttribute("type","button");
    next.className="btn btn-outline-dark btn1"
    if((m-m2)==volume-1){
        next.innerHTML="問題セット終了"
        if(turn==1){
            turn=2;
            next.setAttribute("onclick","create_bot(this)")
        }
        else{
            m2=m+1;
            next.setAttribute("onclick","fin(this)")
            m=1;
        }
    }
    else{
        next.setAttribute("onclick","next_bot(this)")
        next.innerHTML="次の問題へ"
    }
    next_id="m"+m
    next.id=next_id

    if(turn<=2){
        parent.append(next)
    }
    else{
        c=document.createElement("button");
        c.setAttribute("type","button")
        c.setAttribute("onclick","non(this)")
        c.className="btn btn-outline-dark btn2"
        c.innerHTML="苦手"
        var cuid="c"+m
        c.id=cuid

        parent.append(next,c)
    }
    
}

function next_bot(th){
    var a=document.getElementById(th.id);
    var parent=a.parentNode;
    parent.remove();
    if(non_flag==0){
        add_bot(th);
    }
    else{
        add_bot2(th);
    }
}


//ゲーム終了
function fin(thisss){
    ima=document.getElementById("ima");
    ima.innerHTML=""
    m=m2
    alert("ゲーム終了")
        //削除
    div=document.getElementById(thisss.id);
    parent=div.parentNode;
    parent.remove();

    turn=1;
    re_flag=1;

}

//再スタート
function reset(){
    if(fl==0){
        create_bot()
        fl=1;
    }
    else if(re_flag==1 && non_flag==0){
        turn=1;
        re_flag=0;
        create_bot()
        
    }
}

//苦手問題の登録
function non(ths){
    t=ths.id
    tt=t.slice(1)
    d4.push(tt)
    alert("苦手問題として登録しました。")
    a=document.getElementById(ths.id);
    a.remove();
}

m3=0;
let non_flag=0;

//苦手問題の復習
function re_study(){
    d4=shuffle(d4)
    ima=document.getElementById("ima");
    if(re_flag==1){
        alert("復習モード（全"+d4.length+"問）")
        non_flag=1;
        console.log("苦手リストを生成");
        bot=document.createElement("div");
        bot.id="bot";
        bot.className="list-group"
        
    
        var di=document.createElement("div")
        di.className="box8"
        var prid="q"+m
        di.id=prid;
    
        var p=document.createElement("p");
            //回答ボタン
        var b=document.createElement("button");
        b.setAttribute("type","button")
        b.setAttribute("onclick","show2(this)")
        b.className="btn btn-outline-dark btn1"
        b.innerHTML="答えを見る"
        var buid="a"+m
        b.id=buid
    
        bot.appendChild(di);
        ima.innerHTML=m3+1+"問目"

        if(black==0){
            p.innerHTML="<font size='5px'>"+d[d4[m3]][0].slice(0,d[d4[m3]][0].indexOf("「")+1)+"<font color='red'>"+d[d4[m3]][0].slice(d[d4[m3]][0].indexOf("「")+1,d[d4[m3]][0].indexOf("」"))+"</font>"+d[d4[m3]][0].slice(d[d4[m3]][0].indexOf("」"))
        }
        else if(black==2){
            p.innerHTML="<font size='5px'> "+d[d4[m3]][1]
        }
        else{
            p.innerHTML="<font size='5px'>"+d[d4[m3]][0].slice(0,d[d4[m3]][0].indexOf("「")+1)+d[d4[m3]][0].slice(d[d4[m3]][0].indexOf("「")+1,d[d4[m3]][0].indexOf("」"))+d[d4[m3]][0].slice(d[d4[m3]][0].indexOf("」"))       
        }
            
        
        di.append(p,b);
            
        var last=document.getElementById("last");
        last.after(bot);

    }

}

function show2(this2){

    var a=document.getElementById(this2.id);
    var parent=a.parentNode;
    if(black==2){
        parent.innerHTML="<font size='5px'> "+d[d4[m3]][0]
    }
    else{
        parent.innerHTML="<font size='5px'>"+d[d4[m3]][1]+"</b></font><br><br>（意味）<br>"+d[d4[m3]][2]
    }


    next=document.createElement("button");
    next.setAttribute("type","button");
    next.className="btn btn-outline-dark btn1"
    if(m3==d4.length-1){
        next.innerHTML="苦手問題セット終了"
        next.setAttribute("onclick","fin2(this)")
    }
    else{
        next.setAttribute("onclick","next_bot(this)")
        next.innerHTML="次の問題へ"
    }
    next_id="m3"+m3
    next.id=next_id
    parent.append(next)
    

}

function fin2(this22){
    ima=document.getElementById("ima");
    ima.innerHTML=""
    m3=0;
    alert("ゲーム終了")
        //削除
    div=document.getElementById(this22.id);
    parent=div.parentNode;
    parent.remove();

    non_flag=0;
}

function add_bot2(th2){
    ima=document.getElementById("ima");
    m3+=1;
    var bot=document.getElementById("bot");
    var di=document.createElement("div")
    di.className="box8"
    var prid="q3"+m3
    di.id=prid;
    var p=document.createElement("p");
    //回答ボタン
    var b=document.createElement("button");
    b.setAttribute("type","button")
    b.setAttribute("onclick","show2(this)")
    b.className="btn btn-outline-dark btn1"
    b.innerHTML="答えを見る"
    var buid="a3"+m3
    b.id=buid

    

    bot.appendChild(di);
    ima.innerHTML=m3+1+"問目"
    if(black==0){
        p.innerHTML="<font size='5px'>"+d[d4[m3]][0].slice(0,d[d4[m3]][0].indexOf("「")+1)+"<font color='red'>"+d[d4[m3]][0].slice(d[d4[m3]][0].indexOf("「")+1,d[d4[m3]][0].indexOf("」"))+"</font>"+d[d4[m3]][0].slice(d[d4[m3]][0].indexOf("」"))
    }
    else if(black==2){
        p.innerHTML="<font size='5px'> "+d[d4[m3]][1]
    }
    else{
        p.innerHTML="<font size='5px'>"+d[d4[m3]][0].slice(0,d[d4[m3]][0].indexOf("「")+1)+d[d4[m3]][0].slice(d[d4[m3]][0].indexOf("「")+1,d[d4[m3]][0].indexOf("」"))+d[d4[m3]][0].slice(d[d4[m3]][0].indexOf("」"))
    }
    di.append(p,b);
}
