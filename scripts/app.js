const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
const statusElement = document.querySelector("#status");
let game1;

//event listener for taking input for the guess from Keyboard
window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render()
});

const render = () => {
  puzzleElement.innerHTML = '';
  guessesElement.textContent = game1.statusMessge;
  game1.puzzle.split('').forEach((letter)=>{
    const letterElement=document.createElement('span')
    letterElement.textContent=letter
    puzzleElement.appendChild(letterElement)
  })
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render()
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

getPuzzle("2")
  .then((puzzle) => {
    console.log(puzzle);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

// getCurrentCountry().then((country)=>{
//   console.log(country.name)
// }).catch((err)=>{
//   console.log(err)
// })
