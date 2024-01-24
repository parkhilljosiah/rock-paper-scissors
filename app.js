// initialize variable to check game state
let gameIsRunning = false;

// get buttons from DOM
const startGameBtn = document.getElementById("start-game-btn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const messageContainer = document.getElementById("message-container");

// initialize global variables
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

// initialize selection variable
let selection;

!selection ? (selection = ROCK) : (selection = selection);

let results = [];

// add event listeners on rock, paper, and scissors buttons
rockBtn.addEventListener("click", function (e) {
  selection = ROCK;
  rockBtn.classList.add("active");
  paperBtn.classList.remove("active");
  scissorsBtn.classList.remove("active");
});

paperBtn.addEventListener("click", function (e) {
  selection = PAPER;
  paperBtn.classList.add("active");
  rockBtn.classList.remove("active");
  scissorsBtn.classList.remove("active");
});

scissorsBtn.addEventListener("click", function (e) {
  selection = SCISSORS;
  scissorsBtn.classList.add("active");
  rockBtn.classList.remove("active");
  paperBtn.classList.remove("active");
});

// gets a random number and matches that to a choice
const getComputerChoice = function () {
  let randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// receives computer's choice as a parameter and compares to player selection to verify winner
const getWinner = (computerChoice) => {
  if (selection === computerChoice) {
    return RESULT_DRAW;
  } else if (
    (selection === PAPER && computerChoice === ROCK) ||
    (selection === ROCK && computerChoice === SCISSORS) ||
    (selection === SCISSORS && computerChoice === PAPER)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

// adds event listener to start game button to start the game logic
startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;

  const computerChoice = getComputerChoice();

  let winner;

  winner = getWinner(computerChoice);

  selection ? console.log(selection) : console.log("no selection made");

  let message = `You picked ${selection} and the computer picked ${computerChoice}, therefore you `;

  if (winner === RESULT_DRAW) {
    message = message + "had a draw.";
    results.push(RESULT_DRAW);
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won!";
    results.push(RESULT_PLAYER_WINS);
  } else {
    message = message + "lost.";
    results.push(RESULT_COMPUTER_WINS);
  }
  console.log(results);

  messageContainer.innerText = message;
  gameIsRunning = false;
});
