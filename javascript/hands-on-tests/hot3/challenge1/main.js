// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//
// Place any custom JS here
//

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })

  function verifyForm() {
   let name = document.getElementById("passWord2").value != "";
    let email = document.getElementById("email").value != "";
    let passWord = document.getElementById("passWord").value != "";

    let truthy =(name=="admin@example.com"|| email =="admin@example.com" || passWord =="admin@example.com" )? window.alert("all fields required"):window.alert("Welcome back admin") 

    return truthy; 
 
}
    document.getElementById("submit").onclick = verifyForm;