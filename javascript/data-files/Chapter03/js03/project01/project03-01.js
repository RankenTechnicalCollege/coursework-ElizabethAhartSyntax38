/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Elizabeth Ahart
      Date:   10-29-25

      Filename: project03-01.js
*/

 let menuItems = document.getElementsByClassName("menuItem").value=value;

for ( let i=0;i<menuItems.length;i++) {
    menuItems[i].addEventListener("click",calcTotal);
}


function calcTotal() {
    let orderTotal= 0;
    for( let i =0 ; i  <menuItems.length;i++) {
        if(document.getElementsByClassName("menuItem")[0].checked===true) {
            orderTotal += Number(menuItems[i].value);
            if(document.getElementsByClassName("menuItem")[1].checked===true) {
                orderTotal += Number(menuItems[i].value);
            
            }
            if (document.getElementsByClassName("menuItem")[2].checked===true){
                orderTotal += Number(menuItems[i].value);

            }
            if(document.getElementsByClassName("menuItem")[3].checked===true){
                orderTotal += Number(menuItems[i].value);

            }
            if(document.getElementsByClassName("menuItem")[4].checked===true){
                orderTotal += Number(menuItems[i].value);
            }
            if(document.getElementsByClassName("menuItem")[5].checked===true){
                orderTotal += Number(menuItems[i].value);
            }

        }
                   
            document.getElementById("billTotal").innerHTML=formatCurrency(orderTotal); 
    }

}






 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }