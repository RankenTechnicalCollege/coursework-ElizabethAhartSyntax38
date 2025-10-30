/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Elizabeth Ahart
      Date:   10-29-25

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem").length;
for( let i=0;i<menuItems.length;i++){
    document.getElementById("menuItems[i]").addEventListener("click",calcTotal);
}


function calcTotal(){
    let orderTotal=0;
    for( let i=0;i<menuItems.length;i++){
        if(menuItem[i].checked===true)
        orderTotal+= menuItem[i];
    }

}
document.getElementById("billTotal").innerHTML=formatCurrency(orderTotal);





 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }