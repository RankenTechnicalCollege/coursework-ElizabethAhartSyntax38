"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Elizabeth Ahart
      Date:   11-11-25

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount=1;
const  Heading ="H2";
for(let n=sourceDoc.firstElementChild; n != null; n=n.nextElementSibling){
    if(n.sourceDoc===Heading){
        let anchor=document.createElement("a");
        anchor.name="docLink"+ headingCount;
        anchor.insertBefore(n.firstElementChild);
        let listItems=document.createElement("li");
        let link =document.createElement("a");
       link.appendChild(listItems);
       link.textContent=n.textContent;
       listItems.firstElementChild(listItems).href="#doclink"+headingCount;
       headingCount++;
       
    }
}