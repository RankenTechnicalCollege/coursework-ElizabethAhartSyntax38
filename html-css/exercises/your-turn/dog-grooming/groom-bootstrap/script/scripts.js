//Elizabeth Ahart
//Dog-grooom
//10-6-25

//Hamburger Function Menu
function hamburger() {
var menu = document.getElementById("menu-links");
var logo = document.getElementById("logo")
if(menu.style.display ==="block" && logo.style.display ==="none"){
logo.style.display="block";
}else {
    menu.style.display="block";
    logo.style.display="none"
}

}