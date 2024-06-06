// var numberOfDrums= document.querySelectorAll(".drum").length;
// console.log(numberOfDrums);

// for(var i=0;i<numberOfDrums;i++)
//   {
//     document.querySelectorAll(".drum")[i].addEventListener("mouseover",function(){
//       var buttonInnerHTML=this.innerHTML;
//       handleClick(buttonInnerHTML);
//     });
//   }
//   document.addEventListener("keypress",function(aadi){
//     handleClick(aadi.key)
//   });
//   function handleClick(key)
//   {
//       if(out=='w'||key=="w"){
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//       }
//       else if(out=='a'||key=="a"){
//         var audio = new Audio('sounds/tom-2.mp3');
//         audio.play();
//       }
//       else if(out=='s'||key=="s"){
//         var audio = new Audio('sounds/tom-3.mp3');
//         audio.play();
//       }
//       else if(out=='d'||key=="d"){
//         var audio = new Audio('sounds/tom-4.mp3');
//         audio.play();
//       }
//       else if(out=='j'||key=="j"){
//         var audio = new Audio('sounds/snare.mp3');
//         audio.play();
//       }
//       else if(out=='k'||key=="k"){
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play();
//       }
//       else if(out=='l'||key=="l"){
//         var audio = new Audio('sounds/kick-bass.mp3');
//         audio.play();
//       }
//       else {
//         var audio = new Audio('sounds/kick-bass.mp3');
//         audio.play();
//       }
//     }
  // 
  // 
  // 
  // 
  // 
// var numberOfDrums = document.querySelectorAll(".drum").length;
// console.log(numberOfDrums);

// // Store the drum buttons in a variable
// var drumButtons = document.querySelectorAll(".drum");

// for (var i = 0; i < numberOfDrums; i++) {
//   drumButtons[i].addEventListener("mouseover", function() {
//     var buttonInnerHTML = this.innerHTML;
//     handleClick(buttonInnerHTML);
//   });
// }

// document.addEventListener("keypress", function(aadi) {
//   handleClick(aadi.key);
// });

// function handleClick(key) {
//   if (key === 'w') {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//   } else if (key === 'a') {
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
//   } else if (key === 's') {
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
//   } else if (key === 'd') {
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
//   } else if (key === 'j') {
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
//   } else if (key === 'k') {
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
//   } else if (key === 'l') {
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
//   } else {
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
//   }
// }
// 
// 
// 
// 
// 
// 
// 
var numberOfDrums = document.querySelectorAll(".drum").length;
console.log(numberOfDrums);

// Store the drum buttons in a variable
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrums; i++) {
  drumButtons[i].addEventListener("mouseover", function() {
    var buttonInnerHTML = this.innerHTML;
    handleClick(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(aadi) {
  handleClick(aadi.key);
});

function handleClick(key) {
  switch (key.toLowerCase()) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
  
      break;
  }
}
