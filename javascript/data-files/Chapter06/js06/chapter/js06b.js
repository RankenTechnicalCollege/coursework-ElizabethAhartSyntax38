"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Elizabeth Ahart
      Date:   11-14-25

      Filename: js06b.js
 */
//check if the owner's name is entered on the card function
function validateName() {
    let cardName = document.getElementById("cardName");
    if(cardName.validity.valueMissing) {
        cardName.setCustomValidity("Enter  your name as it appears on the card");
    }else {
        cardName.setCustomValidity("");
    }
}
//check if card has been entered correctly
function validateCard(){
    let card=document.forms.payment.elements.credit[0];
    if(card.validity.valueMissing) {
        card.setCustomValidity("select your credit card");
    }else {
        card.setCustomValidity("");
    }
}
//check if the card number is valid
function validateNumber(){
    let cNum =document.getElementById("cardNumber");
    if(cNum.validity.valueMissing) {
        cNum.setCustomValidity("Enter a your card number")
    }else if (cNum.validity.patternMismatch){
        cNum.setCustomValidity("enter a valid card Number")
    }else if (Luhn(cNum.value===false)){
        cNum.setCustomValidity("enter a legitimate card number")
    }else{
     
        cNum.setCustomValidity("");
    }
}
//check that a month is selected for the expiration date
function validateMonth(){
    let month=document.getElementById("expMonth");
    if(month.selectedIndex ===0){
        month.setCustomValidity("select the expiration month");
    }else {
        month.setCustomValidity("");
    }
}
//check that the year is selected for expiration date
function validateYear(){
    let year= document.getElementById("expYear");
    if(year.selectedIndex===0){
        year.setCustomValidity("select the expiration year");
    }else {
        year.setCustomValidity("");
    }

}
function validateCVC(){
    //determine which car was selected
    let card=document.querySelector('input[name="credit"]:checked').value;
    let CVC=document.getElementById("cvc");
    //validate the cvc value
    if (CVC.validity.valueMissing) {
        CVC.setCustomValidity("Enter your cvc number");
    }else if ((card ==="amex") && !(/^\d{4}$/.test(CVC.value))){
        CVC.setCustomValidity("please enter a 4 digit number");

    }else if((card !=="amex") && !(/^\d{3}$/.test(CVC.value))){
        CVC.setCustomValidity("enter a 3 digit number");
    }else {
        CVC.setCustomValidity("");
    }

}


let subButton= document.getElementById("subButton");
//validate payment when the submit button is clicked
subButton.addEventListener("click",validateName);
subButton.addEventListener("click",validateCard);
subButton.addEventListener("click",validateNumber);
subButton.addEventListener("click",validateMonth);
subButton.addEventListener("click",validateYear);
subButton.addEventListener("click",validateCVC);




















/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   

