
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let reset=document.getElementById("reset")
//let h1=document.querySelector("h1")
let p1Display=document.querySelector("#p1Display")
let p2Display=document.querySelector("#p2Display")
let number=document.querySelector("input");
//let p=document.querySelector("p");
let winningScoreDisplay=document.querySelector("p span")
 
let p1Score=0;
let p2Score=0;
//now take a boolean gsmeOver=false initially and update 
let gameOver=false;
let winningScore=5;
console.log(p1Display)
btn1.addEventListener("click",function(){
    //console.log("btn1 scored")
    if(!gameOver){

        p1Score++;
        if(p1Score === winningScore){

            //console.log(p1score);
            p1Display.classList.add("winner");
           gameOver=true;
        }
        p1Display.textContent=p1Score;
    }
}); 
btn2.addEventListener("click",function(){
    //console.log("btn2 scored")
    if(!gameOver){

        p2Score++;
        if(p2Score === winningScore){

            //console.log(p1score);
            p2Display.classList.add("winner");
           gameOver=true;
        }
        p2Display.textContent=p2Score;
    }
}); 
reset.addEventListener("cick",function(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;
})
number.addEventListener("change",function(){
    //p.textContent="value changed";
    winningScoreDisplay.textContent=number.value;
    winningScoreDisplay=Number(number.value);
})