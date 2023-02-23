//array of possible choices
const choices = ["Rock", "Paper", "Scissors"];

const btnRock = document.querySelector(".btnRock");
const btnScissors = document.querySelector(".btnScissors");
const btnPaper = document.querySelector(".btnPaper");
const btnAgain = document.querySelector(".btnAgain");
let playerScore = 0;
let shaqScore = 0;

//randomly select a choice from choice array for the computer
const computerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

//round logic for game
const playRound = (playerChoice, shaqChoice) => {
  console.log(playerChoice, shaqChoice);
  if (playerChoice === shaqChoice) {
    console.log("Tie!");
  } else if (playerChoice === "Rock" && shaqChoice === "Scissors") {
    playerScore++;
    document.querySelector(".playerScore").textContent = playerScore;
    console.log("You won! Rock breaks Scissors!");
  } else if (playerChoice === "Rock" && shaqChoice === "Paper") {
    shaqScore++;
    document.querySelector(".shaqScore").textContent = shaqScore;
    console.log("You lost! Paper smothers Rock!");
  } else if (playerChoice === "Paper" && shaqChoice === "Scissors") {
    shaqScore++;
    document.querySelector(".shaqScore").textContent = shaqScore;
    console.log("You lost! Scissors cuts Paper");
  } else if (playerChoice === "Paper" && shaqChoice === "Rock") {
    playerScore++;
    document.querySelector(".playerScore").textContent = playerScore;
    console.log("You won! Paper smothers Rock!");
  } else if (playerChoice === "Scissors" && shaqChoice === "Rock") {
    shaqScore++;
    document.querySelector(".shaqScore").textContent = shaqScore;
    console.log("You lost! Rock breaks Scissors!");
  } else if (playerChoice === "Scissors" && shaqChoice === "Paper") {
    playerScore++;
    document.querySelector(".playerScore").textContent = playerScore;
    console.log("You won! Scissors cut Paper!");
  }
};

//function checking for winner
const checkWinner = (playerScore, shaqScore) => {
  if (playerScore === 5) {
    document.querySelector(
      ".playerScore"
    ).textContent = `You beat The Big Diesel 
    ${playerScore} to ${shaqScore}!`;
    btnRock.style.display = "none";
    btnPaper.style.display = "none";
    btnScissors.style.display = "none";
  } else if (shaqScore === 5) {
    document.querySelector(
      ".shaqScore"
    ).textContent = `The Big Diesel defeated you 
    ${shaqScore} to ${playerScore}!`;
    btnRock.style.display = "none";
    btnPaper.style.display = "none";
    btnScissors.style.display = "none";
  }
};

//click functions

btnRock.addEventListener("click", () => {
  let playerChoice = "Rock";
  const shaqChoice = computerChoice();
  playRound(playerChoice, shaqChoice);
  checkWinner(playerScore, shaqScore);
});

btnScissors.addEventListener("click", () => {
  let playerChoice = "Scissors";
  const shaqChoice = computerChoice();
  playRound(playerChoice, shaqChoice);
  checkWinner(playerScore, shaqScore);
});

btnPaper.addEventListener("click", () => {
  let playerChoice = "Paper";
  const shaqChoice = computerChoice();
  playRound(playerChoice, shaqChoice);
  checkWinner(playerScore, shaqScore);
});

//function to reset after round
btnAgain.addEventListener("click", () => {
  playerScore = 0;
  shaqScore = 0;
  document.querySelector(".playerScore").textContent = 0;
  document.querySelector(".shaqScore").textContent = 0;
  btnRock.style.display = "inline";
  btnPaper.style.display = "inline";
  btnScissors.style.display = "inline";
});
