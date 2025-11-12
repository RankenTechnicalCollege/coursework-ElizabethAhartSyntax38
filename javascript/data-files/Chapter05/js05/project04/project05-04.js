"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Elizabeth Ahart
      Date:   11-11-25

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");
for(let i =0;i<phrases[i],i++;){
    phrases[i].onclick=function(){
        let phrase=document.createElement("h1");
        phrase.textContent=this.dfn.textContent;
        let footnote=document.createElement("p");
        footnote.textContent=footnote[i];
        footnote.style.fontsize="1.2em";
        footnote.style.fontStyle="italic";
        let closeButton=document.createElement("input");
        closeButton.type="button";
        closeButton.value="Close Footnote";
        closeButton.style="display:block";"margin:10px auto";
        let popup=window.open("","footnote","width=300 height=200 top=100 left=100");
        popup.document.body.style.backgroundColor="Ivory";
        popup.document.body.style.fontsize="16px";
        popup.document.body.style.padding="10px";
        popup.document.body.appendChild(closeButton);
        popup.document.body.appendChild(phrase);
        popup.document.body.appendChild(footnote);
        closeButton.onclick=function(){
            popup.close;
        }
    }

}

