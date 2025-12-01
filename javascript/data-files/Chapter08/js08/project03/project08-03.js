"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Elizabeth Ahart
      Date:  11-30-25 

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/
let cart={
    items:[],
   addItem:this.addItem.push(foodItem)
};
function Pizza(){
   this.size;
   this.crust;
   this.toppings=[];

}
function Toppings(){
    this.name;
    this.side;
}
Pizza.prototype.addToCart(
    cart.items.push(this)
)
Pizza.prototype.summarize(
    this.summary= "Pizza:"+ (this.size.value, this.crust.value)
)
for(let i=0;i<this.toppings.length,i++;){
 this.summary+"(side)";
}








/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}



// Function to build the pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked"); 

let myPizza= new Pizza()
myPizza.size= pizzaSizeBox.value;
myPizza.crust= pizzaCrustBox.value;
for(let i=0;i<checkedToppings.length,i++;){
   myTopping= new Toppings();
   myTopping.name= checkedToppings[i].name;
   myTopping.side= checkedToppings[i],value;
  myPizza.addTopping(myTopping);
}
return myPizza.value;

}    

// Function to add the built pizza to the shopping cart
function updateCart() {
myPizza+= buildPizza();
addItem(myPizza);
}  
console.log(cart);
summarize.myPizza=document.createElement("p");
cartBox.appendChild(summarize.myPizza);
clearPizzaImage();
clearToppings();