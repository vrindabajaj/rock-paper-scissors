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

function playRound(playerChoice, computerChoice){
    if (playerChoice == "ROCK" && computerChoice == "SCISSORS" ||
    playerChoice == "SCISSORS" && computerChoice == "PAPER" ||
    playerChoice == "PAPER" && computerChoice == "ROCK"){
        return `You win! ${playerChoice} beats ${computerChoice}!`;
    } 
    else if (playerChoice == "SCISSORS" && computerChoice == "ROCK" ||
    playerChoice == "PAPER" && computerChoice == "SCISSORS" ||
    playerChoice == "ROCK" && computerChoice == "PAPER"){
        return `You lose! ${computerChoice} beats ${playerChoice}!`;
    } 
    else {
        return `Draw! You both picked ${playerChoice}.`;
    }
}

const playerChoice = "paper";
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice.toUpperCase(), computerChoice));