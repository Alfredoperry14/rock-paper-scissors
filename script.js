let compScore = 0, playerScore = 0;
let compAns;
console.log("First to 3 Wins!");

while(compScore != 3 && playerScore != 3){
    compAns = getComputerChoice();
    console.log("Choose Rock, Paper, or Scissors");
    let playerSelection = prompt();
    RPS(playerSelection, compAns);
}

if(compScore == 3){
    console.log("The Computer Wins!");
}

else{
     console.log("You Win!");
}

function RPS(playerSelection, compAns) {
    console.log("Computer chooses " + compAns + "\n");
    if (playerSelection.toLowerCase() == "rock") {
        if (compAns == "paper") {
            console.log("You Lose! Paper beats Rock");
            compScore++;
        }
        else if (compAns == "scissors") {
            console.log("You Won! Rock beats Scissors");
            playerScore++;
        }
        else{
            console.log("It's a tie!");
        }
    }

    else if (playerSelection.toLowerCase() == "paper") {
        if (compAns == "rock") {
            console.log("You Win! Paper beats Rock");
            playerScore++;
        }
        else if (compAns == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            compScore++;
        }
        else{
            console.log("It's a tie!");
        }
    }

    else {
        if (compAns == "paper") {
            console.log("You Win! Scissors beats Paper");
            playerScore++;
        }
        else if (compAns == "rock") {
            console.log("You Lose! Rock beats Scissors");
            compScore++;
        }
        else{
            console.log("It's a tie!");
        }
    }
    console.log("\nPlayer Score: " + playerScore + "\nComputer Score: " + compScore);
}


function getComputerChoice() {
    const RPS = ["rock", "paper", "scissors"]
    let ans = Math.floor(Math.random() * 3);
    return RPS[ans];
}


