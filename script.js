let winCount = 0;
let loseCount = 0;
let games = 0;

const buttons = document.querySelectorAll("button");
const roundResults = document.querySelector(".round-results");
const playerPoints = document.querySelector("#player");
const computerPoints = document.querySelector("#computer");
const finalScore = document.querySelector(".final-score");
const playAgain = document.querySelector(".play-again");
const introScreen = document.querySelector('.intro');
const playBtn = document.querySelector('.intro .play-btn');
const title = document.querySelector('.title');
const gameScreen = document.querySelector(".game");

const playerScore = document.createElement("div");
const computerScore = document.createElement("div");
const roundResult = document.createElement("div");
const gameOverScore = document.createElement("div");
const playAgainText = document.createElement("div");
playAgainText.textContent = "Play again?";
const replaySymbol = document.createElement("div");
replaySymbol.classList.add("symbol");
replaySymbol.textContent = "↺";

playBtn.addEventListener("click", () => {
    playBtn.classList.add("fadeOut");
    gameScreen.classList.add("fadeIn");
    title.style.animation = "titleTransition 2s ease";
    title.style.animationFillMode = "forwards";
    introScreen.style.height = "0px";
})

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
    playRound(e.target.textContent);
    playGame();
    });
});

replaySymbol.addEventListener("click", () => {
        location.reload();
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
    let computerChoice = getComputerChoice();

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
    playerScore.textContent = winCount;
    computerScore.textContent = loseCount;
    roundResult.textContent = result;
    playerPoints.appendChild(playerScore); 
    computerPoints.appendChild(computerScore);
    roundResults.appendChild(roundResult);
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
        gameOverScore.textContent = result;
        finalScore.appendChild(gameOverScore);
        buttons.forEach((button) => {
            button.disabled = true;
        });
        playAgain.append(playAgainText);
        playAgain.append(replaySymbol);
    }
}