const playerChoice = "paper";

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
        return [`You win! ${playerChoice} beats ${computerChoice}!`, 0];
    } 
    else if (playerChoice == "SCISSORS" && computerChoice == "ROCK" ||
    playerChoice == "PAPER" && computerChoice == "SCISSORS" ||
    playerChoice == "ROCK" && computerChoice == "PAPER"){
        return [`You lose! ${computerChoice} beats ${playerChoice}!`, 1];
    } 
    else {
        return [`Draw! You both picked ${playerChoice}.`, 2];
    }
}

function playGame(){
    let winCount = 0;
    let loseCount = 0;
    
    for (let i = 0; i < 5; i++){
        let result = playRound(playerChoice.toUpperCase(), getComputerChoice());
        console.log(result[0]);

        if (result[1] == 0){
            winCount++;
        } else if (result[1] == 1){
            loseCount++;
        }
        if (winCount == 3){
            return `You're the winner! Wins: ${winCount} \tLosses: ${loseCount}`;
        } else if (loseCount == 3) {
            return `You're the loser! Wins: ${winCount} \tLosses: ${loseCount}`;
        }
    }
    if(winCount > loseCount){
        return `You're the winner! Wins: ${winCount} \tLosses: ${loseCount}`;
    } else {
        return `You're the loser! Wins: ${winCount} \tLosses: ${loseCount}`;
    }
}

console.log(playGame());

