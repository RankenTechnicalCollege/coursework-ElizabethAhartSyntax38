"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Elizabeth Ahart
      Date:   11-30

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function(){ 
    let staff=JSON.parse(Jsontxt);
    makeStaffTable();
   }
   
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");
   let name=document.createElement("tr");
   for(let name in staff.directory[0]){
    let headerCell=document.createElement("th");
    let prop=headerCell.textContent;
    headerRow.appendChild(headerCell);

   }
   staffTable.appendChild(headerRow);
   for(let i=0;i<staff.Directory.length,i++;){
    let tableRow=document.createElement("tr");
    for(let prop in staff.directory[i]){
        let tableCell=document.createElement("td");
        tableCell.textContent=staff.directory[i][prop].value;
        tableRow.appendChild(tableCell);
        staffTable.appendChild(tableRow);
    }
        containerBox.appendChild(staffTable);

   }

}