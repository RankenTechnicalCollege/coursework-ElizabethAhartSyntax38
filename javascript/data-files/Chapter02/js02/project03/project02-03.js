/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Elizabeth Ahart
      Date:   10-23-25

      Filename: project02-03.js
 */
document.getElementById("square").onmouseover= function() {
    document.getElementById("feedback").innerHTML="You are hovering over the square";
}
document.getElementById("square").onmouseout = function() {
    document.getElementById("feedback").innerHTML="";
}
document.getElementById("triangle").onmouseover= function() {
    document.getElementById("feedback").innerHTML="You are hovering over the triangle";
}
document.getElementById("triangle").onmouseout = function() {
    document.getElementById("feedback").innerHTML="";
}
document.getElementById("circle").onmouseover= function() {
    document.getElementById("feedback").innerHTML="You are hovering over the Circle";
}
document.getElementById("circle").onmouseout = function() {
    document.getElementById("feedback").innerHTML="";
}