// Number of circles we have in the game
var numCircles = 6;

// The color variable should be an array that contains as many random RGB colors as there are circles.
var colours = [];

// This pickedColor is the RGB color we are trying to guess (string)
var pickedColor;

// This is the default color of the game.
let defaultColour = "#582c99";

// Grab all appropriate elements from the HTML.
var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector("h1");
var resetButton = document.getElementById("restart");

init();

// The init function should reset the stage and set a new RGB color
function init() {
    reset();
    // Set the text of the colourToGuess element to display the correct RGB color
    colourToGuess.textContent = pickedColor;
}

// Setup so that when the reset button is clicked, the reset function gets called
resetButton.addEventListener("click", reset);

// Define what should happen when any circle is clicked.
function clickCircle() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        resultMessage.textContent = "You win!";
        banner.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play again";
        circles.forEach(circle => circle.style.backgroundColor = pickedColor);
    } else {
        this.style.backgroundColor = defaultColour;
        resultMessage.textContent = "Try again";
    }
}

// The reset function should set new values for the colours array by calling genRandomColours.
function reset() {
    genRandomColours();
    pickedColor = chooseColor();
    colourToGuess.textContent = pickedColor;
    circles.forEach((circle, idx) => {
        circle.style.backgroundColor = colours[idx];
        circle.addEventListener("click", clickCircle);
    });
    banner.style.backgroundColor = defaultColour;
    resetButton.textContent = "Restart";
    resultMessage.textContent = "";
}

// Function to make a random RGB color
function makeColour() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Function to set new values for the colours array
function genRandomColours() {
    colours = [];
    for (var i = 0; i < numCircles; i++) {
        colours.push(makeColour());
    }
}

// Return one of the 6 RGB colors you created and stored in colours
// This function should set the color you are guessing.
function chooseColor() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}
