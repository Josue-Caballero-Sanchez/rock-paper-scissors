function GetComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if(random === 1){
        computerChoice = "rock";
    }
    else if(random === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }

    return computerChoice;
}

function PlayRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    playerWin = 0;

    if(playerSelection === "rock" && computerSelection === "scissors"){
        playerWin = 1;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerWin = 1;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerWin = 1;
    }
    else if(playerSelection === computerSelection){
        playerWin = 2;
    }

    if(playerWin === 1){
        return "You Win! " + CapitalizeFirst(playerSelection) + " beats " + CapitalizeFirst(computerSelection);  
    }
    else if(playerWin === 0){
        return "You Lose! " + CapitalizeFirst(playerSelection) + " loses to " + CapitalizeFirst(computerSelection);
    }

    return "It's a Tie!";

}

function CapitalizeFirst(string){
    let firstletter = string.charAt(0)
    firstletter = firstletter.toUpperCase();
    return firstletter + string.slice(1);
  }

function game(){
    let playerScore = 0;
    let computerScore = 0;

    while(-1){
        let playerSelection = prompt("Choose your move");
        console.log(PlayRound(playerSelection, GetComputerChoice()));

        if(playerWin === 1){
            playerScore ++;
        }
        else if(playerWin === 0){
            computerScore ++;
        }

        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);

        if(computerScore === 5){
            console.log("You Lose!");
            break;
        }
    
        else if(playerScore === 5){
            console.log("You Win!");
            break;
        }
    }
}

let playerWin;
game();


