const choices = ["rock", "paper", "scissors"]
const scoreLimit = 5;
let gameOn = true;

let playerScore = 0;
let computerScore = 0;

/*selects the score, message and options box nodes*/
let plrScore = document.getElementById("player-score");
let cpuScore = document.getElementById("cpu-score");
let messageBox = document.querySelector(".message-box")
let message = document.querySelector(".message");
let optionsBox = document.querySelector(".button-container");

/*Creates the play again button and assigns attributes*/
let playButton = document.createElement("button");
playButton.classList.add("message");
playButton.setAttribute("id", "play");
playButton.innerText = "Play Again?";

/*Randomly select and option from the array which is then assigned to the computer player*/
function computerPlay(cpuChoice){
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

/*This function checks the score to see if it excedes the limit*/
function checkScore(){
    if (playerScore === scoreLimit){
        console.log("You Win!");
        message.innerText = "Game Over! You Win!";
        /*once the score limit is reached it removes the options container*/
        optionsBox.remove();
        /*Changes the color of the score after the game ends*/
        plrScore.style.color = "green";
        cpuScore.style.color = "red";
        /*This adds a "play again" button which refreshes the page*/
        messageBox.appendChild(playButton);
        playButton.addEventListener("click", function(){
            window.location.reload();
        });
    }
    else if (computerScore === scoreLimit){
        console.log("Computer Wins!");
        message.innerText = "Game Over! You Lose!";
        /*once the score limit is reached it removes the options container*/
        optionsBox.remove();
        /*Changes the color of the score after the game ends*/
        plrScore.style.color = "green";
        cpuScore.style.color = "red";
        /*This adds a "play again" button which refreshes the page*/
        messageBox.appendChild(playButton);
        playButton.addEventListener("click", function(){
            window.location.reload();
        });
    }
    else {
        null
    }
}

/*The play round function takes in 2 paramaters and then compares them to see who won the round*/
function playRound(playerSelection, computerSelection){

    /*logs both the player and computer choice*/
    console.log(`You Chose: ${playerSelection.toUpperCase()} | The Computer Chose: ${computerSelection.toUpperCase()}`);
    
    if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore += 1;
        plrScore.innerText = playerScore;
        message.innerText = "You Win! Rock beats Scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore += 1;
        plrScore.innerText = playerScore;
        message.innerText = "You Win! Paper beats Rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore += 1;
        plrScore.innerText = playerScore;
        message.innerText = "You Win! Scissors beats Paper!";
    }
    else if (playerSelection === computerSelection){
        message.innerText = "You Tied!";
    }
    else {
        computerScore += 1;
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