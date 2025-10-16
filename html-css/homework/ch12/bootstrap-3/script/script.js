/*
    Student Name: Elizabeth Ahart
    File Name: script.js
    Date: 10-5-25
*/
/*Function for pic1*/





var figElement = document.getElementById("placeholder")
var imgSource = document.getElementById("image")
var figCap = document.querySelector("figcaption");
//Function to display the first picture
function pic1() {
    imgSource.src = "images/baby sitters.jpg"
    imgSource.alt = "babysitters book";
    figElement.style.display = "block"
    figCap.textContent = "book babysitters";
}
//function 2

function pic2() {
    imgSource.src = "images/spy.webp"
    imgSource.alt = "book harriet the spy";
    figElement.style.display = "block"
    figCap.textContent = "My Favorite Book";
}
//function 3

function pic3() {
    imgSource.src ="images/newbooks.jpg"
    imgSource.alt = "stack of books";
    figElement.style.display = "block"
    figCap.textContent = "Books";

}