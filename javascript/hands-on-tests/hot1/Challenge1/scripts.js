//Elizabeth Ahart
//11-2-25 Hot1


window.addEventListener("submit",firstName);
function firstName(){
    
let firstNames= document.getElementsByName("fName")[0];
try{
    if (!(firstName >"")) throw window.alert(firstName);
}catch (err){
    window.alert("warning");
}
    window.alert("your Name is "+ firstNames);
}
