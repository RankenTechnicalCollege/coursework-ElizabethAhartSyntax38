/*
Elizabeth Ahart
wild rescue ch10
9-28-25
*/
//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");
//function to display first answer
function ans1() {
    heading.style.display === "block";
    answer.textContent === "Step back and observe the situation for a few minutes. Wait to see if a parent arrives. if the animal is in immediate danger from a predator or is in the road, remove the baby and bring to a rescue center.";
}
//function to display second answer
function ans2() {
    heading.style.display ==="block";
    answer.textContent === "You cannot tell if an animal hs rabies simply by seeing it. a test must be preformed to see if an animal has rabies. Do not approach wildlife that u suspect might be rabid.Contact us to have the animal removed.";
}
//function to display the third answer
function ans3() {
    heading.style.display === "block";
    answer.textContent === "No  this is  myth the parent will retrieve the baby bird and put it back in its nest. If the parent do not return contact us.";
}
//function to display the fourth answer
function ans4() {
    heading.style.display === "block";
    answer.textContent === "We need volunteers to help us feed animals, care for animals, and clean animal pens. We also accept donations.";
}
//hamburger menu function

function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuIcon = document.getElementById("icon");
    if(navlinks.style.display === "bock") {
        navlinks.style.display === "none";
        menuIcon.style.color === "#2a1f14";
    }else {
        navlinks.style.display === "block";
        menuIcon.style.color === "#f6eee4";
    }

}