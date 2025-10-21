/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Elizabeth Ahart
      Date:   10-20-25

      Filename: js02.js

 */
//declare global constants

const EMP_Cost = 100; // cost of photographers
const Book_Cost = 300;
const Repro_Cost = 1250;
const TRAVEL_cost = 2;

      //set up the form for whenthe webpage loads
      window.addEventListener("load",setupForm);
// set the forms default values
function setupForm() {
    document.getElementById("photoNum").value=1;
    document.getElementById("photoHrs").value=2;
    document.getElementById("makeBook").checked = false;
    document.getElementById("photoRights").checked = false;
    document.getElementById("photoDist").value=0;
    getEstimate();
    //add event handler for each input control
    document.getElementById("photoNum").onchange = getEstimate;
    document.getElementById("photoHrs").onchange = getEstimate;
    document.getElementById("makeBook").onchange = getEstimate;
    document.getElementById("photoRights").onchange = getEstimate;
    document.getElementById("photoDist").onchange = getEstimate;

}

// estimate total cost of the service

function getEstimate() {
    let totalCost = 0;
    let photographers = document.getElementById("photoNum").value;
    let hours = document.getElementById("photoHrs").value;
    let distance = document.getElementById("photoDist").value;
    let buyBook = document.getElementById("makeBook").checked;
    let buyRights = document.getElementById("photoRights").checked;

    //add the total cost of photographers for the hours covered
    totalCost += photographers * hours * EMP_Cost;

    // add the cost of distance per photographer per mile
    totalCost += photographers* distance * TRAVEL_cost;

    //add the cost of the book if purchased
    totalCost += buyBook ? Book_Cost : 0;

    //add the cost photo rights if purchased 
    totalCost += buyRights ? Repro_Cost : 0;

    // display the total cost estimate
    document.getElementById("estimate").innerHTML = "$" + totalCost;



}