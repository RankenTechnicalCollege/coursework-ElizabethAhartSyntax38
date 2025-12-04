// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

//import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//
// Place any custom JS here
//

// Create an example popover
/*document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })*/

  function verifyForm() {
   let name = document.getElementById("passWord2").value != "admin@example.com";
    let email = document.getElementById("email").value != "admin@example.com";
    let passWord = document.getElementById("passWord").value != "admin@example.com";

    let truthy =(name==""|| email =="" || passWord =="" )? window.alert("Success 'Welcome Back Admin' "):window.alert("The Email /or password don't seem to be right ?!") 

    return truthy; 
 
}
    document.getElementById("submit").onclick = verifyForm;