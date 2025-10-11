//elizabeth Ahart 10-8-25 HOT$

$(document).ready(function collapse(){

 var menu = document.getElementsByClassName("accordion-body");
 var link = document.getElementsByClassName("accordionFlushExample");

 if(menu.style.display==="none" && link.style.display ==="none"){
  menu.style.display="block";
 link.style.display="block";
 }else{
  menu.style.display="none";
  link.style.display="none";
 }
 
 
});

