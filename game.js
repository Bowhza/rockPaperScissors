const choices = ["rock", "paper", "scissors"]

class score {
    constructor(score){
        this.score = +score;
    }
}

let playerScore = new score(0);
let computerScore = new score(0);
const scoreLimit = 5;
const gameOn = true;

function game(){
    function computerPlay(cpuChoice){
        cpuChoice = choices[Math.floor(Math.random() * choices.length)];
        return cpuChoice;
    }
    
    function playerPlay(playerChoice){
        playerChoice = prompt("Chose Rock, Paper or Scissors").toLowerCase();
        if (choices.includes(playerChoice)){
            return playerChoice;
        }
        else {
            console.log("That is not an option. Picking a random option.")
            playerChoice = choices[Math.floor(Math.random() * choices.length)];
            return playerChoice;
        }
        
    }
    
    function playRound(playerSelection, computerSelection){
    
        console.log(`You Chose: ${playerSelection.toUpperCase()} | The Computer Chose: ${computerSelection.toUpperCase()}`);
    
        if (playerSelection === "rock" && computerSelection === "scissors"){
            console.log("You Win! Rock beats Scissors!");
            playerScore.score += 1;
            console.log(`Your Score: ${playerScore.score} | Computer Score: ${computerScore.score}`);
        }
        else if (playerSelection === "paper" && computerSelection === "rock"){
            console.log("You Win! Paper beats Rock!");
            playerScore.score += 1;
            console.log(`Your Score: ${playerScore.score} | Computer Score: ${computerScore.score}`);
        }
        else if (playerSelection === "scissors" && computerSelection === "paper"){
            console.log("You Win! Scissors beats Paper!");
            playerScore.score += 1;
            console.log(`Your Score: ${playerScore.score} | Computer Score: ${computerScore.score}`);
        }
        else if (playerSelection === computerSelection){
            console.log("You Tied!");
            console.log(`Your Score: ${playerScore.score} | Computer Score: ${computerScore.score}`);
        }
        else {
            console.log(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`);
            computerScore.score += 1;
            console.log(`Your Score: ${playerScore.score} | Computer Score: ${computerScore.score}`);
        }
    }
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    playRound(playerSelection, computerSelection);
}

while (gameOn){
    if (playerScore.score === scoreLimit){
        console.log("You Win!");
        break
    }
    else if (computerScore.score === scoreLimit){
        console.log("Computer Wins!");
        break
    }

    game();
}