//elizabeth Ahart 10-8-25 HOT$




$(document).ready();


function discount(){
    var promo = document.getElementById("special")
    promo.style.display="block";
}
function close(){
    var pizza = document.getElementsByClassName("modal-text")
   // pizza.style.display="none";
   document.write("thanks for your feedback")
}

var figElement = document.getElementById("placeholder")
var imgSource = document.getElementById("image")
var figCap = document.querySelector("figcaption");
//Function to display the first picture
function pic1() {
    imgSource.src = "images/pizza5.webp"
    imgSource.alt = "Pizza in box";
    figElement.style.display = "block"
    figCap.textContent = "Pizza in box";
}
//function 2

function pic2() {
    imgSource.src = "images/pizza3.webp"
    imgSource.alt = "Pizza pie in box"
    figElement.style.display = "block"
    figCap.textContent = "Pizza in box"
}
//function 3

function pic3() {
    imgSource.src = "images/pizza5.webp"
    imgSource.alt = "in box? A pizza"
    figElement.style.display = "block"
    figCap.textContent = "Pizza in box"

}


