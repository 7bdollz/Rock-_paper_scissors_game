let computerScore = 0;
let userScore = 0;
let result = "";
function getcomputerChoice() {
  computerChoice = Math.random() * 10;
  if (computerChoice <= 1) {
    computerChoice = "rock";
  } else if (computerChoice <= 3 && computerChoice > 1) {
    computerChoice = "paper";
  } else if (computerChoice > 3) {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  return computerChoice;
}
function getuserInput() {
  userInput = prompt("chose betweeen 'rock', 'paper', or 'scissors'");
  userInput = userInput.toLowerCase();
  console.log(userInput);
  return userInput;
}

function gameEngine(computer, user) {
  if (userInput === "rock " && computerChoice === "rock") {
    result = "stalmate";
    alert(result);
    console.log(result);
  } else if (userInput === "rock" && computerChoice === "paper") {
    result = "computer Won";
    alert(result);
    console.log(result);
  } else if (userInput === "rock" && computerChoice === "scissors") {
    result = "user won";
    alert(result);
    console.log(result);
  } else if (userInput === "paper" && computerChoice === "rock") {
    result = "user won";
    console.log(result);
    alert(result);
  } else if (userInput === "paper" && computerChoice === "paper") {
    result = "stalmate";
    alert(result);
    console.log(result);
  } else if (userInput === "paper" && computerChoice === "scissors") {
    result = "computer won";
    alert(result);
    console.log(result);
    console.log(result);
  } else if (userInput === "scissors" && computerChoice === "rock") {
    result = "computer won";
    alert(result);
    console.log(result);
  } else if (userInput === "scissors" && computerChoice === "paper") {
    result = "user won";
    alert(result);
    console.log(result);
  } else if (userInput === "scissors" && computerChoice === "scissors") {
    result = "stalmate";
    alert(result);
    console.log(result);
  } else if (userInput != "rock" || "paper" || "scissors") {
    alert("enter a valid option");
    console.log(result);
  }
  console.log(result);
  if (result === "user won") {
    userScore++;
  } else if (result === "computer won") {
    computerScore++;
  } else if (result === "stalmate") {
  }
  console.log(computerScore);
  console.log(userScore);
}
function play5times() {
  for (let i = 0; i < 5; i++) {
    let computer = getcomputerChoice();
    let user = getuserInput();
    gameEngine(user, computer);
  }
}

play5times();
