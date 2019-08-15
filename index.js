// addEventListener has 2 parameters: 1. action listening to and 2. result of action
// no parentheses in handleclick because () = run immediately. instead here we are just passing the name of the function in the addEventListener
//document.querySelector("button").addEventListener("click", handleClick);

//function handleClick() {
  //alert("I got clicked!");
//}

// you can also use anonymous functions --> plopping the function inside of the addEventListener
//document.querySelector("button").addEventListener("click", function() {
  //alert("W got clicked!");
//});

// basic layout of event eventListeners where input1 is the event we are listening to, input2 is the response function
// in many programming languages, you can enter input2 as "higher order functions" where you just specify the function name and it refers to it
//$0.addEventListener(input1, input2);
//function input2() {
//  console.log("I got clicked");
//}

// you can also for loop through all the buttons and add JS eventListeners to each button
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playAudio(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  playAudio(event.key);
});

function playAudio(input) {
  switch (input) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log();
  }
}
