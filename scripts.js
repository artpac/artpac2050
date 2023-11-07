//Contact Page 
// function removePlaceholder(){
//     var photoshoot = document.getElementById("photoshoot");
//     var placeholderOption = photoshoot.querySelector('option[disabled]');
//     placeholderOption.remove();
// }

// document.addEventListener("DOMContentLoaded", function(){
//     var dropdown = document.getElementById("photoshoot");
//         dropdown.value = "";
// });



//Gallery Page



function scatter() {

        // Get the elements with class="column"
    var elements = document.getElementsByClassName("column");

    // Declare a "loop" variable
    var i;

    for (i = 0; i < elements.length; i++) {
      elements[i].style.msFlex = "50%";  // IE10
      elements[i].style.flex = "50%";
    }
  }




function test() {
    alert("js loaded");
}