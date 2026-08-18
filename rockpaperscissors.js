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
        //return;
      }
      if (computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
        //return;
      }
      if (computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
        //return;
      }
    }
    if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
        //return;
      }
      if (computerChoice === "paper") {
        console.log("Round tied! Both chose Paper.");
        //return;
      }
      if (computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
        //return;
      }
    }
    if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
        //return;
      }
      if (computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
        //return;
      }
      if (computerChoice === "scissors") {
        console.log("Round tied! Both chose Scissors.");
        //return;
      }
    }
  }
  for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();
