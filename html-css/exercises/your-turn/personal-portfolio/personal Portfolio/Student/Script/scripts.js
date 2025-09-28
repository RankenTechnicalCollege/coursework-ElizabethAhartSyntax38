/*
Elizabeth Ahart
Consider this your turn ch10
9-28-25
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementsByClassName("logo");
    if(menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display === "none";
        logo.style.display === "block";
    }
}