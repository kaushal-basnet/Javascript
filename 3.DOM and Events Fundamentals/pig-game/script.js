"use strict";
/*manual: In this game players have to roll dice in thier own turn
 Rule 1: current score will be added what they roll from the dice
 Rule 2: if play rolls dice 1 then all the current score will be 0 and dice will be switch to the next player
 hold: if player holds then dice will be switch to the next player and points remain hold
 Winner: whoever makes 100 point first he/she will be the winner
*/

//selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); //Alternative way
const diceEl = document.querySelector(".dice");
const current1El = document.getElementById("current--0");
const current2El = document.getElementById("current--1");
//buttons
const btnNew = document.querySelector(".btn--new"); //reset game
const btnRoll = document.querySelector(".btn--roll"); //dice roll
const btnHold = document.querySelector(".btn--hold"); //dice hold

//setup initial score for both player
score0El.textContent = 0;
score1El.textContent = 0;

//intial dice hide
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//switching the player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // if dice is 1 then score will be 0
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //switching the player
  player0El.classList.toggle("player--active"); // toggling active class
  player1El.classList.toggle("player--active"); // toggling active class
};

//Rolling dice functionallity
btnRoll.addEventListener("click", function () {
  //Generating random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    //increse the score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer(); //switching player
  }
});

//hold functionallity
btnHold.addEventListener("click", function () {
  //holds the point
  scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //check the point >=100 for winning
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    //hide dice
    diceEl.classList.add("hidden");
    //After winning the game button roll and hold will be disabled
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    switchPlayer(); //switching player
  }
});
