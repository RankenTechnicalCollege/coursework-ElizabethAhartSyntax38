/*
    Student Name: Elizabeth Ahart
    File Name: script.js
    Date: 9-27-25
*/
var figElement = document.getElementById("placeholder")
var imgSource = document.getElementById("image")
var figCap = document.querySelector("figcaption");
//Function to display the first picture
function pic1() {
    imgSource.src = "images/trunk-bay.jpg"
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block"
    figCap.textContent = "Trunk Bay in St. John";
}
//function 2

function pic2() {
    imgSource.src = "images/sanjuan-thumb.jpg"
    imgSource.alt = "Elevated view of the san Juan coast"
    figElement.style.display = "block"
    figCap.textContent = "Coast of San Juan"
}
//function 3

function pic3() {
    imgSource.src = "images/curacao.jpg"
    imgSource.alt = "The blue waters of Curacao"
    figElement.style.display = "block"
    figCap.textContent = "Curacao"

}

