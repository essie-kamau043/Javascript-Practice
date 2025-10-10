// Guessing Game
const readline = require("readline");

// Setup input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = Math.floor(Math.random() * 10) + 1; // random 1–10
let attempts = 0;

function askGuess() {
  rl.question("Guess a number between 1 and 10: ", (answer) => {
    let guess = parseInt(answer);
    attempts++;

    if (guess === secretNumber) {
      console.log(`🎉 Correct! The number was ${secretNumber}. Attempts: ${attempts}`);
      rl.close();
    } else if (guess < secretNumber) {
      console.log("Too low 📉. Try again!");
      askGuess();
    } else {
      console.log("Too high 📈. Try again!");
      askGuess();
    }
  });
}

askGuess();
