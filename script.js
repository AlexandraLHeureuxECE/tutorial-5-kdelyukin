var numCircles = 6;
var colours = [];
var pickedColor;
let defaultColour = "#582c99";

var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector("h1");
var resetButton = document.getElementById("restart");

init();

function init() {
    reset();
    colourToGuess.textContent = pickedColor;
}

resetButton.addEventListener("click", reset);

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

function makeColour() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function genRandomColours() {
    colours = [];
    for (var n = 0; n < numCircles; n++) {
        colours.push(makeColour());
    }
}

function chooseColor() {
    var randomColor = Math.floor(Math.random() * colours.length);
    return colours[randomColor];
}
