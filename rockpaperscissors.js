const rockbtn = document.querySelector("#rockbtn");const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");
const running_score = document.querySelector("#running_score");
const final_score = document.querySelector("#final_score");
round_num = 0;
humanScore = 0;
computerScore = 0;


function print_final() {  
  if (humanScore > computerScore) {
    final_score.style.color = "green";
    final_score.textContent = `Game Over! Your score is ${humanScore}. Computer score is ${computerScore}. You win! Refresh the page to restart the game.`;
  }
  if (humanScore < computerScore) {
    final_score.style.color = "red";
    final_score.textContent = `Game Over! Your score is ${humanScore}. Computer score is ${computerScore}. You lose! Refresh the page to restart the game.`;
  }
  if (humanScore === computerScore) {
    final_score.textContent = `Game Over! Your score is ${humanScore}. Computer score is ${computerScore}. Game tied! Refresh the page to restart the game.`;
  }
}


function playRound(event, humanChoice) {
  if ((humanScore === 5) || (computerScore === 5)) {
    print_final();
    return 0;
  }
  round_num++;
  let random = Math.floor(Math.random() * 3);
  let computerChoice = "";
  switch(random) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    default:
      computerChoice = "";
      break;
  }
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      running_score.textContent = `Round No. ${round_num}: Round tied! Both chose rock. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
    }
    if (computerChoice === "paper") {
      computerScore++;
      running_score.textContent = `Round No. ${round_num}: You lose this round! Your choice ${humanChoice}. Computer's choice ${computerChoice}. Paper beats Rock. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
      if ((humanScore === 5) || (computerScore === 5)) {
        print_final();
        return 0;
      }
    }
    if (computerChoice === "scissors") {
      humanScore++;
      running_score.textContent = `Round No. ${round_num}: You win this round! Your choice ${humanChoice}. Computer's choice ${computerChoice}. Rock beats Scissors. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
      if ((humanScore === 5) || (computerScore === 5)) {
        print_final();
        return 0;
      }
    }
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      running_score.textContent = `Round No. ${round_num}: You win this round! Your choice ${humanChoice}. Computer's choice ${computerChoice}. Paper beats Rock. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
      if ((humanScore === 5) || (computerScore === 5)) {
        print_final();
        return 0;
      }
    }
    if (computerChoice === "paper") {
      running_score.textContent = `Round No. ${round_num}: Round tied! Both chose Paper. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
    }
    if (computerChoice === "scissors") {
      computerScore++;
      running_score.textContent = `Round No. ${round_num}: You lose this round! Your choice ${humanChoice}. Computer's choice ${computerChoice}. Scissors beats Paper. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
      if ((humanScore === 5) || (computerScore === 5)) {
        print_final();
        return 0;
      }
    }
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      running_score.textContent = `Round No. ${round_num}: You lose this round! Your choice ${humanChoice}. Computer's choice ${computerChoice}. Rock beats Scissors. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
      if ((humanScore === 5) || (computerScore === 5)) {
        print_final();
        return 0;
      }
    }
    if (computerChoice === "paper") {
      humanScore++;
      running_score.textContent = `Round No. ${round_num}: You win this round! Your choice ${humanChoice}. Computer's choice ${computerChoice}. Scissors beats Paper. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
      if ((humanScore === 5) || (computerScore === 5)) {
        print_final();
        return 0;
      }
    }
    if (computerChoice === "scissors") {
      running_score.textContent = `Round No. ${round_num}: Round tied! Both chose Scissors. Your current score is ${humanScore}. Computer's current score is ${computerScore}.`;
    }
  }
}


rockbtn.addEventListener("click", (event) => {
  playRound(event, "rock");
});
paperbtn.addEventListener("click", (event) => {
  playRound(event, "paper");
});
scissorsbtn.addEventListener("click", (event) => {
  playRound(event, "scissors");
});