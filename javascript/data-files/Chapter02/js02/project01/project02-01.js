/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Fahrenheit Converter
      Author: Elizabeth Ahart
      Date:   10-21-25

      Filename: project02-01.js
 */
document.getElementById("cvalue").addEventListener("change",cDegree);
document.getElementById("fvalue").addEventListener("change",fDegree);


function fahrenheitToCelsius(degree) {
  //  let degree =document.getElementById("fvalue").value;
    let degree=0;
    let celsius = (degree - 32)/1.8;
    return celsius;
}


function celsiusToFahrenheit(degree) {
    //let degree=document.getElementById("cvalue").value;
    let degree=0;
    let fahrenheit = (degree * 1.8) - 32;
    return fahrenheit;

}
document.getElementById("cValue").onchange = function(){
    let cDegree = document.getElementById("cValue").value;
    document.getElementById("cValue").value = fahrenheitToCelsius(cDegree)

};

document.getElementById("fValue").onchange = function(){
    let fDegree = document.getElementById("fValue").value;
    document.getElementById("cValue").value = celsiusToFahrenheit(fDegree)

};
/*
    let cDegree = document.getElementById("fValue").value=value;
    document.getElementById("fValue") = celsiusToFahrenheit(celsius);
}
document.getElementById("cvalue").onchange=function() {
    let fDegree =document.getElementById("cValue").value=value;
    document.getElementById("fValue") = fahrenheitToCelsius(fahrenheit);
}
*/