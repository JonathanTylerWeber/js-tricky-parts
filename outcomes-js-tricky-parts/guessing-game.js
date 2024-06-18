function guessingGame() {
  const target = Math.floor(Math.random() * 100);
  let solved = false;
  let guesses = 0;

  return function (guess) {
    if (solved) {
      return `The game is over, you already won!`;
    }

    guesses += 1;

    if (guess < target) {
      return `${guess} is too low!`;
    } else if (guess > target) {
      return `${guess} is too high!`;
    } else {
      solved = true;
      return `You win! You found ${target} in ${guesses} guesses.`;
    }
  };
}

module.exports = { guessingGame };
