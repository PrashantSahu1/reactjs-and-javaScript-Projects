'use strict';

//selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`); //method 1(better)
const score1El = document.getElementById(`score--1`); //method 2
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//Starting Conditions
let currentScore,
  activePlayer = 0,
  playing,
  scores;

const init = function () {
  currentScore = 0;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add(`hidden`);
  current0El.textContent = 0;
  current1El.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--active`);
  playing = true;
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`); //adds a class if not present and removes it if present
  player1El.classList.toggle(`player--active`);
};

//Rolling Dice Functionality

btnRoll.addEventListener(`click`, function () {
  if (playing) {
    //1.Generating a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.display the dice

    diceEl.classList.remove(`hidden`);

    diceEl.src = `dice-${dice}.png`;

    //3.Check for the rolled 1:if true,switch to next player

    if (dice !== 1) {
      //Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    //1.Add currentScore to the active player finalScore

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.Check if the players score is >= 100 (if true finish the game, else switch the players) .

    if (scores[activePlayer] >= 100) {
      //Finish the game
      diceEl.classList.add(`hidden`);
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, init);
