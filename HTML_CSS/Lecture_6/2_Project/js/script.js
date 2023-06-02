window.onscroll = function() {
  myfunction();
};
// DOM Select
var nav = document.querySelector("nav");
var features = document.querySelector(".features");

function myfunction() {
  var dftop = window.pageYOffset;
  if (dftop > features.offsetTop) {
    nav.classList.add("sticky");
  } else if (dftop < features.offsetTop) {
    nav.classList.remove("sticky");
  }
}
// function write text
// ES6 Class

// function typeWriter(txtElement, words, wait) {
//   // Current index of word
//   let txt = "";
//   let wordIndex = 0;
//   let isDeleting = false;
//   function typer(){
//   const current = wordIndex % words.length;
//   // Get full text of current word
//   const fullTxt = words[current];
//   // Check if deleting
//   if (isDeleting) {
//     // Remove char
//     txt = fullTxt.substring(0, txt.length - 1);
//   } else {
//     // Add char
//     txt = fullTxt.substring(0, txt.length + 1);
//   }
//   // Insert txt into element
//   txtElement.innerHTML = `<span class="txt">${txt}</span>`;
//   // Initial Type Speed
//   let typeSpeed = 20;
//   // If word is complete
//   if (!isDeleting &&txt === fullTxt) {  
//     // Make pause at end
//     typeSpeed = wait;
//     // Set delete to true
//     isDeleting = true;
//   } else if (isDeleting && txt === "") {
//     isDeleting = false;
//     // Move to next word
//     wordIndex++;
//     // Pause before start typing
//     typeSpeed = 500;
//   }
//   setTimeout(function(){
//     typer()  
//   } 
//   , typeSpeed);
// }
// typer();
// }
// // Init On DOM Load
// document.addEventListener("DOMContentLoaded", init);
// // Init App
// const developers = document.querySelector(".developer");

// function init() {
//   const customers = [
//     "DEVELOPERS",
//     "FITNESS FREAKS",
//     "VEGANS",
//     "EVERYONE"
//   ];
//   const wait = 3000;
//   // Init TypeWriter
//   typeWriter(developers, customers, wait);
// }

