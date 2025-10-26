/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Elizabeth Ahart
      Date:   10-23-25

      Filename: project02-02.js
 */


function verifyForm() {
    let name = document.getElementById("name").value != "";
    let email = document.getElementById("email").value != "";
    let phone = document.getElementById("phone").value != "";

    let truthy =(name =="" || email =="" || phone =="" )? window.alert("all fields required"):window.alert("ThankYou") 

    return truthy; 
 
}
    document.getElementById("submit").onclick = verifyForm;