/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Elizabeth Ahart
      Date:   10-23-25

      Filename: project02-04.js
 */
const CHICKEN_PRICE= 10.95 , HALIBUT_PRICE= 13.95 , BURGER_PRICE= 9.95 , SALMON_PRICE= 18.95 , SALAD_PRICE= 7.95 ,SALES_TAX=0.07;
document.getElementById("chicken").onclick =calcTotal;
document.addEventListener("click", calcTotal);
document.getElementById("halibut").onclick =calcTotal;
document.getElementById("burger").onclick =calcTotal;
document.getElementById("salmon").onclick =calcTotal;
document.getElementById("salad").onclick =calcTotal;
/*document.addEventListener("click", calcTotal)
document.getElementById("chicken").onchange =calcTotal;





function calcTotal() {
    let cost =0;
    let buyChicken=document.getElementById("chicken").checked=false;
    let buyHalibut=document.getElementById("halibut").checked=false;
    let buyBurger=document.getElementById("burger").checked=false;
    let buySalmon=document.getElementById("salmon").checked=false;
    let buySalad=document.getElementById("salad").checked=false;
    let totalCost=0;
    totalCost += document.getElementById("chicken").onchange ? CHICKEN_PRICE + totalCost : cost
    totalCost += document.getElementById("halibut").onchange  ? HALIBUT_PRICE  : cost;
    totalCost += document.getElementById("burger").onchange  ? BURGER_PRICE : cost;
    totalCost += document.getElementById("salmon").onchange  ? SALMON_PRICE : cost;
    totalCost += document.getElementById("salad").onchange ? SALAD_PRICE : cost;
    let totalCost1 = totalCost*SALES_TAX;


    document.getElementById("foodTax").innerHTML=formatCurrency(SALES_TAX*totalCost);
    document.getElementById("totalBill").innerHTML=formatCurrency(totalCost1+totalCost);
    document.getElementById("foodTotal").innerHTML=formatCurrency(totalCost)
    return totalCost;

}*/
function calcTotal() {
    let cost =0;
    let buyChicken=document.getElementById("chicken").checked;
    let buyHalibut=document.getElementById("halibut").checked;
    let buyBurger=document.getElementById("burger").checked;
    let buySalmon=document.getElementById("salmon").checked;
    let buySalad=document.getElementById("salad").checked;
    cost += buyChicken ? CHICKEN_PRICE:0 ;
    cost += buyHalibut ?  HALIBUT_PRICE:0 ;
    cost += buyBurger ?  BURGER_PRICE:0 ;
    cost += buySalmon ? SALMON_PRICE:0 ;
    cost += buySalad ?  SALAD_PRICE:0 ;
    let totalCost = cost*SALES_TAX;
    let bill= cost+totalCost;
    document.getElementById("foodTax").innerHTML=formatCurrency(totalCost);
    document.getElementById("totalBill").innerHTML=formatCurrency(bill);
    document.getElementById("foodTotal").innerHTML=formatCurrency(cost)



}


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
