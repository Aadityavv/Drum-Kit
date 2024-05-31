// document.querySelector(".set").addEventListener("mouseover", handleClick);


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("mouseover", handleClick);
}

function handleClick() {
  var out=this.innerHTML;
  if(out=='w'){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  }
  else if(out=='a'){
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
  }
  else if(out=='s'){
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  }
  else if(out=='d'){
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
  }
  else if(out=='j'){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
  }
  else if(out=='k'){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  }
  
  else {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
  }
}