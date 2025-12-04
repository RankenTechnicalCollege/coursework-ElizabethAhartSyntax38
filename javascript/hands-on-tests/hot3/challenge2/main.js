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
 TodoList=new Array[["laundry","Monday"],["Mop","Tuesday"],["billPAY","Thursday"]["Closets,EveryDay"],["Paint","Sunday"]];

  function verifyForm() {
   let name = document.getElementById("name2").value != "";
    let expiration = document.getElementById("expiration").value != "";
    let name2 = document.getElementById("name").value != "";
    let i=0;

    let truthy =(name==""|| expiration =="" || name2 =="" )? /*window.alert("Success 'Welcome Back Admin' ")*/document.write("All fields are required Please Add to the list "):document.write("success Your task is added to "+ TodoList)/*window.alert("The Email /or password don't seem to be right ?!")*/
     for (let i = 0; i < TodoList.Length; i++)
 {
     if (TodoListList[i].Contains(name))
     {
         document.write("success Your task is added to "+ TodoList)

         break;

     } else
     {
         document.write("TRY AGAIN"+ TodoList)

     }
 } 
  
    return truthy; 
 
}

    document.getElementById("submit").onclick = verifyForm;