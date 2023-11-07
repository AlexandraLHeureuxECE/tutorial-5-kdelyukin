// The number of circles in the game
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

resetButton.addEventListener("click", reset);

circles.forEach(function (circle) {
    circle.addEventListener("click", clickCircle);
});

function init() {
    genRandomColours();
    pickedColor = chooseColor();
    colourToGuess.textContent = pickedColor;
    for (var i = 0; i < numCircles; i++) {
        circles[i].style.backgroundColor = colours[i];
    }
    banner.style.backgroundColor = defaultColour;
    resetButton.textContent = "Restart";
    resultMessage.textContent = "";
}

function clickCircle() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        resultMessage.textContent = "You win!";
        resetButton.textContent = "Play again";
        circles.forEach(function (circle) {
            circle.style.backgroundColor = pickedColor;
        });
        banner.style.backgroundColor = pickedColor;
    } else {
        this.style.backgroundColor = defaultColour;
        resultMessage.textContent = "Try again";
    }
}

function reset() {
    init();
}

function makeColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function genRandomColours() {
    colours = [];
    for (var i = 0; i < numCircles; i++) {
        colours.push(makeColour());
    }
}

function chooseColor() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}
