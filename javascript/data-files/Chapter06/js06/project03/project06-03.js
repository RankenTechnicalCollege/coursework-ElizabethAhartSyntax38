"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Elizabeth Ahart
      Date:   

      Filename: project06-03.js
*/
let useShip=document.getElementById("useShip");
useShip.addEventListener("click",copyShippingToBilling);

function copyShippingToBilling(){
    if(useShip.checked=== true){
      document.forms.elements.firstnameBill=document.forms.elements.firstnameShip.value;
      document.forms.elements.firstnameShip=document.forms.elements.firstnameBill.value;

      document.forms.elements.lastnameBill=document.forms.elements.lastnameShip.value;
      document.forms.elements.lastnameShip=document.forms.elements.lastnameBill.value;

      document.forms.elements.address1Bill=document.forms.elements.address1Ship.value;
      document.forms.elements.address1Ship=document.forms.elements.address1Bill.value;

      document.forms.elements.address2Bill=document.forms.elements.address2Ship.value;
      document.forms.elements.address2Ship=document.forms.elements.address2Bill.value;
      
      document.forms.elements.cityBill=document.forms.elements.cityShip.value;
      document.forms.elements.cityShip=document.forms.elements.cityBill.value;

      document.forms.elements.countryBill=document.forms.elements.countryShip.value;
      document.forms.elements.countryShip=document.forms.elements.countryBill.value;

      document.forms.elements.codeBill=document.forms.elements.codeShip.value;
      document.forms.elements.codeShip=document.forms.elements.cityBill.value;

      document.forms.elements.stateBill.selectedIndex=document.forms.elements.StateShip.selectedIndex;
    }
}

let formElements=document.querySelectorAll('input[type="text"]');
let fieldCount=formElements.length;
let errorBox=document.getElementById("errorBox");
for(let i =0;i<formElements.length;i++){
    document.addEventListener("invalid",showValidationError);
}
function showValidationError(evt){
    evt.preventdefault();
    errorBox.textContent="complete all highlighted fields";

}
