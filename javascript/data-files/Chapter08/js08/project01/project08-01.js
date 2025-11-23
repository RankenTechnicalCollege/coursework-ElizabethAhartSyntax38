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

}







/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

