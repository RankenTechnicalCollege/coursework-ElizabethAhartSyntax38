/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Elizabeth Ahart
      Date:   10-21-25

      Filename: project02-01.js
 */
window.addEventListener("load",fahrenheitToCelsius);
window.addEventListener("load",celsiusToFahrenheit);

function fahrenheitToCelsius(degree) {
    let degree = 0;
    let celsius = (degree - 32)/1.8;
    return celsius;
}


function celsiusToFahrenheit(degree) {
    let degree=0;
    let Fahrenheit = (degree * 1.8) - 32;
    return Fahrenheit;

}

document.getElementById("cValue").onchange =function() {
    let cDegree = document.getElementById("cValue").value=value;
    document.getElementById("fValue") = celsiusToFahrenheit(cDegree);
}
document.getElementById("fvalue").onchange=function() {
    let fDegree =document.getElementById("fValue").value=value;
    document.getElementById("cValue") = fahrenheitToCelsius(fDegree);
}
