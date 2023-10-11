let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","purple"];
let started=false;
let level =0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("greenflash");
    setTimeout(function(){
        btn.classList.remove("greenflash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level : ${level}`;
    //random
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    // console.log(randidx);
    // console.log(randcolor);
    gameflash(randbtn);
}
function checkans(idx){
    //console.log(`level : ${level}`);
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML= `GAME OVER ! Your Score was <b> ${level} </b><br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    //console.log("button pressed");
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);

}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}