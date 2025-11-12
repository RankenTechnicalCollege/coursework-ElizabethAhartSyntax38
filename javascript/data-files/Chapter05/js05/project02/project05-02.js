"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Elizabeth Ahart
      Date:   11-7-25

      Filename: project05-02.js
*/
let images=document.getElementsByTagName("img");
let photoBucket=document.getElementById("photo_bucket");
let photoList=document.getElementById("photo_list");

for(let i=0;i<images,i++;){
    images[i].onclick=function(){
      if(this.parentNode.id("photo_bucket")){
            let newItem = document.createElement("li")
            photoList.appendChild(newItem);
            newItem.appendChild(images);
  
        }else {
            let oldItem=images;
           photoBucket.appendChild(this.images);
           oldItem.removeChild(oldItem.firstElementChild);
        }
    }

}
