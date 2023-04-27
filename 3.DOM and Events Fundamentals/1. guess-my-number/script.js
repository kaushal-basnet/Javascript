"use strict";

/* Coding Challenge #1 : Guess my number
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem) */

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1; //+1 = 0 + 1; 0 will be invalid
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highScore = 0;
//After clicking check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //guessing number
  //if no guess is in the input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 Enter a number";
    //if player wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").textContent = "✨ Correct Number";
    // disable check button after winning
    document.querySelector(".check").disabled = true;
    //setting highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    if (score === 20) {
      document.querySelector(".score").textContent = 20;
    } else {
      score++;
      document.querySelector(".score").textContent = score;
    }
    //if guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 high number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 You lost the game";
      document.querySelector(".score").textContent = 0;
    document.querySelector(".check").disabled = true;

    }
    // if guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 low number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😞 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// if players click "again" button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".check").disabled = false;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
*/

//Refactoring code
let secretNumber = Math.trunc(Math.random() * 20) + 1; //+1 = 0 + 1; 0 will be invalid
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = (document.querySelector(".score").textContent = score);
//After clicking check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //guessing number

  if (!guess) {
    displayMessage("🚫 Enter a number");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    displayMessage("✨ Correct Number");
    document.querySelector(".check").disabled = true;

    if (score === 20) {
      document.querySelector(".score").textContent = 20;
    } else {
      score++;
      document.querySelector(".score").textContent = score;
    }
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 high number" : "📉 low number");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😞 You lost the game");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").disabled = true;
    }
  }
});

// clicking again button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".check").disabled = false;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
