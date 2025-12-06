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
 TodoList[1]=new Array[["laundry","Monday"],["Mop","Tuesday"],["billPAY","Thursday"],["Closets,EveryDay"],["Paint","Sunday"]];

  function verifyForm() {
   let name = document.getElementById("name2").value != "";
    let expiration = document.getElementById("expiration").value != "";
    let name2 = document.getElementById("name").value != "";
    let i=0;

    let truthy =(name==""|| expiration =="" || name2 =="" )? /*window.alert("Success 'Welcome Back Admin' ")*//*window.alert("The Email /or password don't seem to be right ?!")*/document.write("All fields are required Please Add to the list "):document.write("success Your task is added to search ")
     for (let i = 0; i < TodoList.Length; i++)
 {
     if (TodoList[i].Contains(name))
     {
         document.write("success Your task is added to ")

         break;

     } else
     {
         document.write("TRY AGAIN" );

     }
 } 
  
    return truthy; 
 
}

    document.getElementById("submit").onclick = verifyForm;

      function verifyForm2() {
   let name = document.getElementById("name7-2").value != "";
    let expiration = document.getElementById("expiration7").value != "";
    let name2 = document.getElementById("name7").value != "";
    let i=0;

    let truthy =(name==""|| expiration =="" || name2 =="" )? /*window.alert("Success 'Welcome Back Admin' ")*//*window.alert("The Email /or password don't seem to be right ?!")*/document.write("All fields are required Please add to the list "):document.write("success Your task is added to Task list for ")
     for (let i = 0; i < TodoList.Length; i++)
 {
     if (TodoList[i].Contains(name))
     {
         document.write("success Your task is added to ")

         break;

     } else
     {
         document.write("TRY AGAIN" );

     }
 } 
  
    return truthy; 
 
}

    document.getElementById("delete").onclick = verifyForm2;
          function verifyForm3() {
   let name = document.getElementById("name8-2").value != "";
    let expiration = document.getElementById("expiration8").value != "";
    let name2 = document.getElementById("name8").value != "";
    let i=0;

    let truthy =(name==""|| expiration =="" || name2 =="" )? /*window.alert("Success 'Welcome Back Admin' ")*//*window.alert("The Email /or password don't seem to be right ?!")*/document.write("All fields are required Please add to the list "):document.write("success Your task is deleted from Task list for ")
     for (let i = 0; i < TodoList.Length; i++)
 {
     if (TodoList[i].Contains(name))
     {
         document.write("success Your task is added to ")

         break;

     } else
     {
         document.write("TRY AGAIN" );

     }
 } 
  
    return truthy; 
 
}

    document.getElementById("delete").onclick = verifyForm3;