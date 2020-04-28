// Your code goes here
let mainLoop;
do {
  mainLoop = confirm('Do you want to play a game?');
  if (!mainLoop) {
    break;
  }
  let to = 5;
  let number = Math.floor(Math.random() * (to + 1));
  console.log(number);
  let attempts = 3;
  let prize = 0;
  let possiblePrize = 100;
  let currentAttemptPrize = 100;
  do {
    let userInput = prompt(
      `Choose a roulette pocket number from 0 to ${to}\nAttempts left: ${attempts}
Total prize: ${prize}$\nPossible prize on current attempt ${currentAttemptPrize}$`
    );
    if (parseInt(userInput) === number) {
      if (attempts === 3) {
        prize += possiblePrize;
      } else if (attempts === 2) {
        prize += currentAttemptPrize;
      } else if (attempts === 1) {
        prize += currentAttemptPrize;
      }
      let gameLoop = confirm(
        `Congratulations, you won! Your prize is ${prize}$. Do you want to continue?`
      );
      if (!gameLoop) {
        alert(`Thanks for you participation. Your prize is ${prize}$`);
        break;
      } else {
        attempts = 3;
        number = Math.floor(Math.random() * (to + 1));
        console.log(number);
        to += 5;
        possiblePrize *= 2;
        currentAttemptPrize = possiblePrize;
        continue;
      }
    } else {
      currentAttemptPrize /= 2;
      attempts--;
    }
    if (attempts === 0) {
      alert(`Thank you for you participation. Your prize is ${prize}`);
    }
  } while (attempts > 0);
} while (mainLoop);
alert('You did not become a billionaire, but can.');
