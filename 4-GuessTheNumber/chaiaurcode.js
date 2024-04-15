const randomumber = parseInt(Math.random() * 100 + 1);

const form = document.querySelector('.form'); //form
const userInput = document.querySelector('#guessField'); //userInput
const submit = document.querySelector('#subt');
const gauessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greter than 1');
  } else if (guess > 100) {
    alert('Please enter  a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanup(guess);
      displaymessage(`Game Over. Rnadom number was ${randomumber}`);
      endGame();
    } else {
      cleanup(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomumber) {
    displaymessage(`You guessed it right`);
    endGame();
  } else if (guess < randomumber) {
    displaymessage(`Number is too low`);
  } else if (guess > randomumber) {
    displaymessage(`Number is too high`);
  }
}

function cleanup(guess) {
  userInput.value = ''; //update the value
  gauessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displaymessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', function (e) {
    const randomumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    gauessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
