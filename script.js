let winCount = 0;
let loseCount = 0;
let games = 0;

const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector(".round-result");
const scores = document.querySelector(".scores");
const playerScore = document.createElement("div");
const computerScore = document.createElement("div");
const finalScore = document.createElement("div");

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
    playRound(e.target.textContent);
    playGame();
    });
});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    switch(choice){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function playRound(playerChoice){
    let result = "";
    computerChoice = getComputerChoice();

    if (playerChoice == "ROCK" && computerChoice == "SCISSORS" ||
    playerChoice == "SCISSORS" && computerChoice == "PAPER" ||
    playerChoice == "PAPER" && computerChoice == "ROCK"){
        winCount++;
        games++;
        result = `You win! ${playerChoice} beats ${computerChoice}!`;
    } 
    else if (playerChoice == "SCISSORS" && computerChoice == "ROCK" ||
    playerChoice == "PAPER" && computerChoice == "SCISSORS" ||
    playerChoice == "ROCK" && computerChoice == "PAPER"){
        loseCount++;
        games++;
        result = `You lose! ${computerChoice} beats ${playerChoice}!`;
    } 
    else {
        result = `Draw! You both picked ${playerChoice}.`;
    }
    playerScore.textContent = `Your score: ${winCount}`;
    computerScore.textContent = `Computer's score: ${loseCount}`;
    roundResult.textContent = result;
    scores.appendChild(playerScore); 
    scores.appendChild(computerScore);
}

function playGame(){
    let result = "";
    let gameOver = false;
    if (games < 5){
        if (winCount == 3){
            result = `You're the winner! Wins: ${winCount} \tLosses: ${loseCount}`;
            gameOver = true;
        } else if (loseCount == 3) {
            result = `You're the loser! Wins: ${winCount} \tLosses: ${loseCount}`;
            gameOver = true;
        }
    }
    else if(winCount > loseCount){
        result = `You're the winner! Wins: ${winCount} \tLosses: ${loseCount}`;
        gameOver = true;
    } else {
        result = `You're the loser! Wins: ${winCount} \tLosses: ${loseCount}`;
        gameOver = true;
    }
    if (gameOver){
        finalScore.textContent = result;
        scores.appendChild(finalScore);
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}