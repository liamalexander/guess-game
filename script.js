'use strict';

const newGameBtn = document.getElementById("new-game");
const highscoreDisplay = document.querySelector(".highscore");
const ball0 = document.querySelector(".ball-0");
const ball1 = document.querySelector(".ball-1");
const higherBtn = document.getElementById("higher");
const lowerBtn = document.getElementById("lower");
const scoreDisplay = document.querySelector(".score");
const messageDisplay = document.querySelector(".message");
const lastBall = document.querySelector(".previous-ball");

let currentScore = 0;
let newNumber;
let highscore = 0;
let currentNumber;
let prevNumber;

highscoreDisplay.textContent += 0;
higherBtn.disabled = true;
lowerBtn.disabled = true;
lastBall.style.visibility = "hidden";

const incorrectAnswer = function () {
    messageDisplay.textContent = `Unforced error!...You lose! 😭 \n`;
    higherBtn.disabled = true;
    lowerBtn.disabled = true;
    ball1.textContent = newNumber;
    ball1.classList.replace("ball-1", "ball-1-wrong");
    if (currentScore > highscore) {
        highscore = currentScore;
        highscoreDisplay.textContent = `Highscore: ${highscore}`;
        messageDisplay.textContent += ` \n New Highscore! 🏆`;
    };
};

const correctAnswer = function () {
    lastBall.style.visibility = "visible";
    lastBall.textContent = `Last Ball: ${currentNumber}`;
    currentNumber = newNumber;
    ball0.textContent = currentNumber;
    currentScore ++;
    scoreDisplay.textContent = `Score: ${currentScore}`;
    messageDisplay.textContent = "Winner! ✔"
};

const newGame = function () {
    currentScore = 0;
    scoreDisplay.textContent = `Score: ${currentScore}`;
    currentNumber = Math.trunc(Math.random() * 20) + 1;
    ball0.textContent = currentNumber;
    ball1.textContent = "?";
    ball1.classList.replace("ball-1-wrong", "ball-1");
    higherBtn.disabled = false;
    lowerBtn.disabled = false;
    messageDisplay.textContent = " ";
    lastBall.style.visibility = "hidden";
};

const lowerGuess = function () {
    newNumber = Math.trunc(Math.random() * 20) + 1;
    if (newNumber === currentNumber) {
        newNumber = Math.trunc(Math.random() * 20) + 1;
    } else {
    newNumber < currentNumber ? correctAnswer() : incorrectAnswer();
    };
};

const higherGuess = function () {
    newNumber = Math.trunc(Math.random() * 20) + 1;
    if (newNumber === currentNumber) {
        newNumber = Math.trunc(Math.random() * 20) + 1;
    } else {
    newNumber > currentNumber ? correctAnswer() : incorrectAnswer();
    };
};

newGameBtn.addEventListener("click", newGame);
lowerBtn.addEventListener("click", lowerGuess);
higherBtn.addEventListener("click", higherGuess);

//MAKE IT RESPONSIVE WHEN ON SMALLER SCREENS - HEADING SMALLER