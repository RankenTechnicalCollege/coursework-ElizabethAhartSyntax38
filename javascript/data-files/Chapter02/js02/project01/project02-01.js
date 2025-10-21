/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Elizabeth Ahart
      Date:   10-21-25

      Filename: project02-01.js
 */

function fahrenheitToCelsius(degree) {
    let fDegree = (degree - 32)/1.8
    return fDegree;
}


function celsiusToFahrenheit(degree) {
    let cDegree = (degree *1.8) + 32;
    return cDegree;

}

document.getElementById("cValue").onchange = {
    function () {
        cDegree = document.getElementById("cValue");
       fahrenheitToCelsius(cDegree) = document.getElementById("fvalue");
    }
  
}
    document.getElementById("fValue").onchange = {
        function () {
            fDegree = document.getElementById("fValue");
            celsiusToFahrenheit(fDegree) = document.getElementById("cvalue");
        }

}