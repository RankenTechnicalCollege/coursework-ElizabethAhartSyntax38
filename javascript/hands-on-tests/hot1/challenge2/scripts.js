//elizabeth Ahart
//11-2-25
//Hot1 challenge 2

window.addEventListener("submit",age)

function age(){
let userAge = document.getElementsByName("fName")[0].onsubmit;
for(i =0,i<userAge.length;i++;){
    if(userAge>=21)
window.alert(userAge +"Your Welcome to come in")
    else if (userAge<=1||userAge>199){
        window.alert("age out of range")
    }else{
        window.alert("your to Young Try Again")
    }
}


}
