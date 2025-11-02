//Elizabeth Ahart
//11-1-25
//Hot1 challenge 3


let one=new Array["one is the loneliest number you will ever do!"]
let two=new Array["two can be as bad as one it's the loneliest number since one "]
let three=new Array["there is no three!"]

window.addEventListener("submit",number)

function number(){

    let userNumber=document.getElementsByName("fName")[0].onsubmit;
    for(i=0;i<one.length;i++){
        if(userNumber===1){
            document.write(one)
        }else if(userNumber===2) {
            document.write(two)

        }else if (userNumber===3) {
            document.write(three);
        }else {
            window.alert("Please enter a valid number");
        }
        
    }
}
