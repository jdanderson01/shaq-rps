const choices = ["Rock", "Paper", "Scissors"];

const btnRock = document.querySelector(".btnRock");
const btnScissors = document.querySelector(".btnScissors");
const btnPaper = document.querySelector(".btnPaper");
const btnAgain = document.querySelector(".btnAgain");

let playerScore = 0;
let shaqScore = 0;

const computerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerChoice, shaqChoice) => {
  console.log(playerChoice, shaqChoice);
  if (playerChoice === shaqChoice) {
    console.log("Tie!");
  } else if (
    (playerChoice === "Rock" && shaqChoice === "Scissors") ||
    (playerChoice === "Paper" && shaqChoice === "Rock") ||
    (playerChoice === "Scissors" && shaqChoice === "Paper")
  ) {
    playerScore++;
    document.querySelector(".playerScore").textContent = playerScore;
    console.log(`You won! ${playerChoice} beats ${shaqChoice}!`);
  } else {
    shaqScore++;
    document.querySelector(".shaqScore").textContent = shaqScore;
    console.log(`You lost to Shaq! ${shaqChoice} beats ${playerChoice}!`);
  }
};

const checkWinner = (playerScore, shaqScore) => {
  if (playerScore === 5) {
    document.querySelector(
      ".playerScore"
    ).textContent = `You beat The Big Diesel ${playerScore} to ${shaqScore}!`;
    //get rid of shaq score
    document.querySelector(".shaqScore").textContent = "";
    endGame();
  } else if (shaqScore === 5) {
    document.querySelector(
      ".shaqScore"
    ).textContent = `The Big Diesel defeated you ${shaqScore} to ${playerScore}!`;
    //get rid of player score
    document.querySelector(".playerScore").textContent = "";
    endGame();
  }
};

const endGame = () => {
  btnRock.style.display = "none";
  btnPaper.style.display = "none";
  btnScissors.style.display = "none";
};

const resetGame = () => {
  playerScore = 0;
  shaqScore = 0;
  document.querySelector(".playerScore").textContent = 0;
  document.querySelector(".shaqScore").textContent = 0;
  btnRock.style.display = "inline";
  btnPaper.style.display = "inline";
  btnScissors.style.display = "inline";
};

btnRock.addEventListener("click", () => {
  const playerChoice = "Rock";
  const shaqChoice = computerChoice();
  playRound(playerChoice, shaqChoice);
  checkWinner(playerScore, shaqScore);
});

btnScissors.addEventListener("click", () => {
  const playerChoice = "Scissors";
  const shaqChoice = computerChoice();
  playRound(playerChoice, shaqChoice);
  checkWinner(playerScore, shaqScore);
});

btnPaper.addEventListener("click", () => {
  const playerChoice = "Paper";
  const shaqChoice = computerChoice();
  playRound(playerChoice, shaqChoice);
  checkWinner(playerScore, shaqScore);
});

btnAgain.addEventListener("click", () => {
  resetGame();
});
