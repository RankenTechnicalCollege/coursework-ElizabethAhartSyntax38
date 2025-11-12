"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Elizabeth Ahart
      Date:  11-10-25 

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
startQuiz.onclick=function(){
     overlay.className="showquiz";
      timeId =window.setInterval(countdown,1000);
}
function countdown(){
    if(timeLeft===0){
        window.clearInterval(timeId);
        //timeId=undefined;
        let totalCorrect=checkAnswers();
        if(totalCorrect===correctAnswers.length){
            window.alert("congratulations on 100%")
        }else {
            window.alert("correct answers ="+ totalCorrect);
            timeLeft=quizTime;
            quizClock.value=timeLeft;
            overlay.className="hidequiz";
        }
    }else {
        timeLeft--;
        quizClock.value=timeLeft;
    }
}
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeId;
// and the node list for questions
let questionList=document.querySelectorAll("div#quiz input");





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

