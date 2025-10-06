/*
    Student Name: Elizabeth Ahart
    File Name: script.js
    Date: 10-5-25
*/
/*Function for pic1*/
$(document), ready; {
var acc = document.getElementsByClassName("accordion");
var i;
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
$(document), ready; {
    const carousel = new bootstrap.Carousel('#myCarousel');
$carousel-control-prev-icon-bg; url("images/new-york-empire.jpg");
$carousel-control-next-icon-bg; url("images/new-york-south.jpg");
}
function spiderman () {
  videoSource.src="media/Untitled video.mp4";
  descriptionSource.src="media/descriptions.vtt";
  video.style.display="block";
  video.load();
}


var figElement = document.getElementById("placeholder")
var imgSource = document.getElementById("image")
var figCap = document.querySelector("figcaption");
//Function to display the first picture
function pic1() {
    imgSource.src = "images/baby sitters.jpg";
    imgSource.alt = "babysitters book";
    figElement.style.display = "block"
    figCap.textContent = "book babysitters";
}
//function 2

function pic2() {
    imgSource.src = "images/spy.webp";
    imgSource.alt = "book harriet the spy"
    figElement.style.display = "block"
    figCap.textContent = "My Favorite Book"
}
//function 3

function pic3() {
    imgSource.src ="images/newbooks.jpg"
    imgSource.alt = "stack of books"
    figElement.style.display = "block"
    figCap.textContent = "Books"

}