const choices = ["rock", "paper", "scissors"]
const scoreLimit = 5;
let gameOn = true;

let playerScore = 0;
let computerScore = 0;

/*selects the player score nodes and the message node*/
let plrScore = document.getElementById("player-score");
let cpuScore = document.getElementById("cpu-score");
let message = document.getElementById("message");

function computerPlay(cpuChoice){
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

function checkScore(){
    if (playerScore === scoreLimit){
        console.log("You Win!");
        message.innerText = "Game Over! You Win!";
    }
    else if (computerScore === scoreLimit){
        console.log("Computer Wins!");
        message.innerText = "Game Over! You Lose!";
    }
    else {
        null
    }
}

function playRound(playerSelection, computerSelection){

    console.log(`You Chose: ${playerSelection.toUpperCase()} | The Computer Chose: ${computerSelection.toUpperCase()}`);
    
    if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors!");
        playerScore += 1;
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
        plrScore.innerText = playerScore;
        message.innerText = "You Win! Rock beats Scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock!");
        playerScore += 1;
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
        plrScore.innerText = playerScore;
        message.innerText = "You Win! Paper beats Rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper!");
        playerScore += 1;
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
        plrScore.innerText = playerScore;
        message.innerText = "You Win! Scissors beats Paper!";
    }
    else if (playerSelection === computerSelection){
        console.log("You Tied!");
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
        message.innerText = "You Tied!";
    }
    else {
        console.log(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`);
        computerScore += 1;
        console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
        cpuScore.innerText = computerScore;
        let gameMessage = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
        message.innerText = gameMessage;
    }
}

/*Selects the button nodes*/
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

/*event listeners that detect whet option has been chosen,
It also runs the playRound function and checks if the score limit has been reached.*/
rockBtn.addEventListener("click", function(playerSelection){
    playerSelection = "rock";

    const computerSelection = computerPlay();
    
    playRound(playerSelection, computerSelection);

    checkScore();
})

paperBtn.addEventListener("click", function(playerSelection){
    playerSelection = "paper";

    const computerSelection = computerPlay();
    
    playRound(playerSelection, computerSelection);

    checkScore();
})

scissorsBtn.addEventListener("click", function(playerSelection){
    playerSelection = "scissors";

    const computerSelection = computerPlay();
    
    playRound(playerSelection, computerSelection);

    checkScore();
})