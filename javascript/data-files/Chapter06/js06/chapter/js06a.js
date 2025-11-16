"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Elizabeth Ahart
      Date:   11*12-25

      Filename: js06a.js
 */
window.addEventListener("load", function(){
    let orderForm =document.forms.orderForm;
    let model = orderForm.elements.model;

//select Model Selection list when the form opens
model.focus();
//add eventlistener for every form element
for(let i=0;i<orderForm.elements.length;i++){
    orderForm.elements[i].addEventListener("change",calcOrder);
}
//calculate cost of order 
calcOrder();

function calcOrder(){
    //Determine the selected Model
    let mIndex= model.selectedIndex;
    let mValue= model.options[mIndex].value;
    //Determine the selected quantity
    let qIndex = orderForm.elements.qty.selectedIndex;
    let quantity = orderForm.elements.qty[qIndex].value;
    //model cost = model cost times quantity
    let modelCost = mValue*quantity;
    orderForm.elements.modelCost.value=modelCost.toLocaleString("en-us",{style:"currency",currency:"USD"});

    //retrieve the cost of the protection plan
    let planValue= document.querySelector('input[name="plan"]:checked').value;

    //charge the plan to each item ordered
    let planCost=planValue*quantity;
    orderForm.elements.planCost.value=planCost.toLocaleString("en-us",{style:"currency",currency:"USD"})
    //calculate the order subtotal

    let subtotal=modelCost+planCost;
    orderForm.elements.subtotal.value=subtotal.toLocaleString("en-us",{style:"currency",currency:"USD"})

    //calculate the 5% sales tax
    let salesTax= subtotal*0.05;
    orderForm.elements.salesTax.value=salesTax.toLocaleString("en-us",{style:"currency",currency:"USD"})
    
    //calculate the total cost of the order

    let totalCost=subtotal+salesTax;
    orderForm.elements.totalCost.value=totalCost.toLocaleString("en-us",{style:"currency",currency:"USD"})


    let selectedPlan=document.querySelector('input[name="plan"]:checked');
    orderForm.elements.planName.value=selectedPlan.labels[0].textContent;


}

});






