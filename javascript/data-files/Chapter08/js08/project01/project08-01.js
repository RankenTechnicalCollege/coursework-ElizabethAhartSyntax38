"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Elizabeth Ahart
      Date:   11-23-25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

function timer(min , sec){
    this.timer.minutes= min;
    this.timer.seconds= sec;
    this.timer.timeId=null;
}
timer.prototype.runPause(timer,minBox,secBox)= function(){
    if (timeId !==null){
        window.clearInterval(timer.timeId)
        timeId=null;
    }else{
        timeId=window.setInterval(countDown,1000);
        
    }
}
function countDown(){
    if (timer.seconds>0){
        timer.seconds--;
    }else if(timer.minutes>0){
        timer.minutes--;
        timer.seconds = 59;
    }else{
        window.clearInterval(timer.timeId)
        timer.timeId= null;
    }
    timer.minutes = minBox.value;
    timer.seconds = secBox.value;
}


let myTimer= new timer(minBox.value,secBox.value);

minBox.addEventListener("change",function(){
    myTimer.minutes=minBox.value;
})
secBox.addEventListener("change",function(){
    myTimer.seconds=secBox.value;
})
runPauseTimer.onclick(function(){
    myTimer.runPause(myTimer,minBox,secBox);
})




/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

