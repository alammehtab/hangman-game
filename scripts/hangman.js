class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.staus = "playing";
  }
  calculateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.staus = "failed";
    } else if (finished) {
      this.staus = "finished";
    } else {
      this.staus = "playing";
    }
  }
  get statusMessge() {
    if (this.staus === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.staus === "failed") {
      return `Nice try! The word was "${this.word.join("")}".`;
    } else {
      return "Great work! You guessed the word.";
    }
  }
  get puzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }

  makeGuess(guess) {
    this.guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.staus !== "playing") {
      // this will return undefined and will prevent the rest of the function from running
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    this.calculateStatus();
  }
}
