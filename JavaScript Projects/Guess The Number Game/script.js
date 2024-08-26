'use strict';

// console.log(document.querySelector(`.message`).textContent); //we used `.` because `message` is a class,then we use the `textContent` method to get the text content inside the element we have accessed using querySelector. if we have multiple `.` operators its calculated from left to right.

// DOM -> Document Object Model : Structured representation of html document . Allows javascript to access html elements and stype to manipulate them.(Change text , html attributes and even css styles).(Automatically created by browser and stored in a tree structure).

//Document is a special object that is the entry point to the DOM . Example : document.querySelector().

//DOM methods and properties for DOM manipulation for example document.querySelector() are not part of javascript.

//DOM methods and properties are part of web api's(They are like libraries that browsers implement[api : application programming interface]) and can be accessed from javascript code

//Just like DOM we have other web api's like `Timers` and `Fetch`.

/*Selecting And Manipulating Elements

document.querySelector(`.message`).textContent = `Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

//Handling Click Event (And Game Logic)

let secretNumber = Math.trunc(Math.random() * 10) + 1; //Math.random() gives random numbers between 0-1 , if we multiply it with 10 it will give us random numbers between 0-10 and to remove decimal values we use Math.trunc but now it limits use to just 1 to 9 so we add 1 to make it between 1 and 10.

let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  //When no input or input out of range
  if (!guess || guess < 1 || guess > 10) {
    displayMessage(`INVALID !`);
    score--;
    document.querySelector(`.score`).textContent = score;
  }

  //when player wins
  else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = score;
    }
    document.querySelector(
      `.message`
    ).style.animation = `newmessageanimation 1s ease-in-out 0.5s infinite`;
    displayMessage(`CONGRATULATIONS 🎊`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage(`TOO HIGH !`)
        : displayMessage(`TOO LOW !`);
      //or displayMessage(guess > secretNumber? `TOO HIGH !`: `TOO LOW !`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`GAME OVER !`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(`body`).style.backgroundColor = `#000000`;
  score = 10;
  document.querySelector(`.score`).textContent = score;
  displayMessage(`START GUESSING...`);
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(
    `.message`
  ).style.animation = `messageanimation 1s ease-in-out 0.5s infinite`;
});
