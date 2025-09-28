/*Elizabeth Ahart
Strike-a-chord
9/27/25
*/


//hamburger menu function
function hamburger() {
    var menu= document.getElementById("menu-links");
    if(menu.style.display === "block") {
        menu.style.display === "none"
    } else {
        menu.style.display = "block"
    }
}