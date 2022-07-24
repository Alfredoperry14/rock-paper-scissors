let compAns = getComputerChoice();

console.log("Choose Rock, Paper, or Scissors")
let playerSelection = prompt();
RPS(playerSelection, compAns);

function RPS (playerSelection, compAns){
    console.log("Computer chooses " + compAns + "\n");
    if(playerSelection.toLowerCase() == "rock"){
        if(compAns =="paper"){
            console.log("You Lose! Paper beats Rock");
            return;
        }
        else if(compAns =="scissors"){
            console.log("You Won! Rock beats Scissors");
            return;
        }
            console.log("It's a tie!");
    }

    else if(playerSelection.toLowerCase() == "paper"){
        if(compAns =="rock"){
            console.log("You Win! Paper beats Rock");
            return;
        }
        else if(compAns =="scissors"){
            console.log("You Lose! Scissors beats Paper");
            return;
        }
        console.log("It's a tie!");
    }

    else{
        if(compAns =="paper"){
            console.log("You Win! Scissors beats Paper");
            return;
        }
        else if(compAns =="rock"){
            console.log("You Lose! Rock beats Scissors");
            return;
        }
        console.log("It's a tie!");
    }
}

function getComputerChoice(){
    const RPS = ["rock", "paper", "scissors"]
    let ans = Math.floor(Math.random() * 3);
    return RPS[ans];
}


