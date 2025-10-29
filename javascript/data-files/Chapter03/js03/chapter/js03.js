/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Elizabeth Ahart
     Date: 10-28-25  

     Filename: js03.js
 */
//days of the week 

let weekDays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];





window.addEventListener("load",addWeekdays);
//function to write weekday names into the calender
function addWeekdays() {

    let i=0; //initial counter value

    //reference the collection of heading cells
    let headingCells=document.getElementsByTagName("th");

    //write each of the seven days into the heading cell
    while (i < 7) {
        headingCells[i].innerHTML=weekDays[i];
        //increase by one 
        i++;
    }

}

window.addEventListener("load",showGames);
//function to write game information into the calender
function showGames(){
for (let i = 0; i<gameDates.length; i++) {
    let gameInfo ="";

    //open the paragraph
    switch (gameResults[i]) {
        case "w": gameInfo+="<p class='Win'>";break;
        case "L": gameInfo+="<p class='lose'>"; break;
        case "S": gameInfo+="<p class ='suspended'>"; break;
        case "P": gameInfo+="<p class = 'postponed'>"; break;
    }
    //display game location
    if(gameLocations[i]==="h"){
        gameInfo+= "vs.";
    }else if(gameLocations[i]==="a") {
        gameInfo +="@";

    } 
    //include the opponent
    gameInfo += gameOpponents[i]+"<br>";
    
    //include the results and score
    gameInfo += gameResults[i]+":("+runsScored[i]+"-" + runsAllowed[i]+")";

    //display innings played for suspended, shortened, or extra inning games
    if(gameInnings[i]<5) {
        gameInfo+= "["+ gameInnings[i] +"]***";
    }else if (gameInnings[i]<9) {
        gameInfo+="["+gameInnings[i]+"]*"
    }else if (gameInnings[i]>9){
        gameInfo+="["+gameInnings[i]+"]";
    }
    //close paragraph
    gameInfo += "</p>";
    //write information in a table cell
    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeend",gameInfo)

}
}


