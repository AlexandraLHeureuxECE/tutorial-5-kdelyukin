var numCircles = 6;
var colours = []
var pickedColor; 
let defaultColour="#582c99"


var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colourToGuess");
var resultMessage = document.getElementById("resultMessage");
var banner = document.getElementById("banner");
var resetButton = document.getElementById("resetButton");

init();

function init() {
	reset();
	colourToGuess.textContent = pickedColor;
}
resetButton.addEventListener("click", function() {
	reset();
  });
  
circles.forEach(function(circle) {
	circle.addEventListener("click", clickCircle);
  });

  function clickCircle() {
	
	var clickedColor = this.style.backgroundColor;
	
	if (clickedColor === pickedColor) {
	  resultMessage.textContent = "You win!";
	  resetButton.textContent = "Play again";
	  changeColors(pickedColor); 
	  banner.style.backgroundColor = pickedColor;
	} else {
	  this.style.backgroundColor = defaultColour;
	  resultMessage.textContent = "Try again";
	}
  }

function reset() {
	
	colours = genRandomColours(numCircles);
	
	pickedColor = chooseColor();
	
	for (var n = 0; n < circles.length; n++) {
	  circles[n].style.backgroundColor = colours[n];
	}
	
	banner.style.backgroundColor = defaultColour;
	resetButton.textContent = "Restart";
	resultMessage.textContent = "";
  }

function makeColour() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
  }

function genRandomColours(number) {
	var array2 = [];
	for (var i = 0; i < number; i++) {
	  arr.push(makeColour());
	}
	return array2;
  }

function chooseColor() {
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
  }

  function changeColors(color) {
	for (var k = 0; k < circles.length; k++) {
	  circles[k].style.backgroundColor = color;
	}
  }

