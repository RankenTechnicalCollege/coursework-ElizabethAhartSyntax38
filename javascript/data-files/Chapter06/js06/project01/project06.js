"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Elizabeth Ahart
      Date:   11-14-25

      Filename: project06-01.js
*/
let submitButton=document.getElementById("submitButton");
let pwd =document.getElementById("pwd");
let pwd2=document.getElementById("pw2");

submitButton.addEventListener("click",function(){
    if(pwd.validity.patternMismatch){
        pwd.setCustomValidity("Your password must be at least 8characters with one letter and one number");
    }else if(pwd !== pwd2){
        pwd.setCustomValidity("your  passwords must match")
    }else{
        pwd.setCustomValidity("");
    }
        
    
})





