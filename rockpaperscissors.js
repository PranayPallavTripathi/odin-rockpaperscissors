function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch(random) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";

    default:
      return undefined;
  }
}

function getHumanChoice() {
  let humanTurn = prompt("Enter one of the following three: rock, paper, scissors");
  humanTurn = String(humanTurn);
  return humanTurn.toLowerCase();
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        console.log("Round tied! Both chose rock.");
      }
      if (computerChoice === "paper") {
        console.log("You lose this round! Paper beats Rock.");
        computerScore++;
      }
      if (computerChoice === "scissors") {
        console.log("You win this round! Rock beats Scissors.");
        humanScore++;
      }
    }
    if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win this round! Paper beats Rock.");
        humanScore++;
      }
      if (computerChoice === "paper") {
        console.log("Round tied! Both chose Paper.");
      }
      if (computerChoice === "scissors") {
        console.log("You lose this round! Scissors beats Paper.");
        computerScore++;
      }
    }
    if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose this round! Rock beats Scissors.");
        computerScore++;
      }
      if (computerChoice === "paper") {
        console.log("You win this round! Scissors beats Paper.");
        humanScore++;
      }
      if (computerChoice === "scissors") {
        console.log("Round tied! Both chose Scissors.");
      }
    }
  }
  for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(`Your score is ${humanScore}. Computer score is ${computerScore}. You win!`);
  }
  if (humanScore < computerScore) {
    console.log(`Your score is ${humanScore}. Computer score is ${computerScore}. You lose!`);
  }
  if (humanScore === computerScore) {
    console.log(`Your score is ${humanScore}. Computer score is ${computerScore}. Game tied!`);
  }
}

playGame();
