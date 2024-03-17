'use strict';
// console.log(document.querySelector('.message').textContent);

// // setting the element of class .message to new text message
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Number(Math.trunc(Math.random() * 20 + 1));
let score = 5;
let highscore = 0;

// Displays Function
const displayMessag = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (s) {
  document.querySelector('.score').textContent = s;
};

document.querySelector('.number').textContent = secretNumber;
displayScore(score);
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // check if the input field not empty and there is attempt left
  if (!guess) {
    displayMessag('⛔ No number entered');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessag(guess > secretNumber ? '📈Too large' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      score--;
      displayScore(score);
      //document.querySelector('.score').textContent = score;
      displayMessag('Game Lost 💥💥');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess === secretNumber) {
    displayMessag(' Correct guess 🎉');
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  document.querySelector('.number').textContent = '?';
  secretNumber = Number(Math.trunc(Math.random() * 20 + 1));
  displayMessag('Start guessing...');
  displayScore(score);
  guess = Number((document.querySelector('.guess').value = ''));
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// if (score >= 1) {
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No number entered';
//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = '📈Too large';
//     score--;
//     document.querySelector('.score').textContent = score;

// when guess is too low
// } else if (guess < secretNumber) {
//   document.querySelector('.message').textContent = '📉 Too low';
//   score--;
//   document.querySelector('.score').textContent = score;
// }
// if the quess is correct
//     else if (guess === secretNumber) {
//       document.querySelector('.message').textContent = ' Correct guess 🎉';
//       document.querySelector('body').style.backgroundColor = 'Green';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('.number').style.width = '30rem';

//       if (score > highscore) {
//         highscore = score;
//         document.querySelector('.highscore').textContent = highscore;
//       }
//     }
//     // when guess it too high
//     if (score === 0) {
//       //score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = 'Game Lost 💥💥';
//       document.querySelector('.number').textContent = secretNumber;
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
//   }
// });
