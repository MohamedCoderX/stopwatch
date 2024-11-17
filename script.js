var hours = 0;
var minutes = 0;
var seconds = 0;
var h= document.getElementById("hours")
var m = document.getElementById("minutes")
var s =document.getElementById("seconds")
var stopbutton = document.getElementById("stop")
var resetbutton = document.getElementById("reset")


function start(){
var interval = setInterval(() => {
    seconds++;
s.innerText = seconds;
if(seconds==60){
    seconds = 0;
    minutes++;
    m.innerText=minutes
}
if(minutes==60){
    minutes = 0;
    hours++;
    h.innerText=hours

}
},1000);
stopbutton.addEventListener("click",function(){
    clearInterval(interval)
})
resetbutton.addEventListener("click",function(){
    m.innerText = "00";
    h.innerText = "00";
    s.innerText = "00";
})
}
