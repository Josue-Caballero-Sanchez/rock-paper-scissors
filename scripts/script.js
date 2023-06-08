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
    const topText = document.querySelector(".top-text");
    const topText2 = document.querySelector(".top-text-2");
    const playerChoice = document.querySelector(".player-choice");
    const computerChoice = document.querySelector(".computer-choice");
    const choiceContainer = document.querySelector(".choice-container");
    const scorePlayer = document.querySelector(".player-score");
    const scoreComputer = document.querySelector(".computer-score");

    choiceContainer.style.cssText = "gap: 0px";
    
    if(playerSelection === "rock"){
        playerChoice.textContent = "✊";
    }
    else if(playerSelection === "paper"){
        playerChoice.textContent = "✋";
    }
    else{
        playerChoice.textContent = "✌";
    }

    if(computerSelection === "rock"){
        computerChoice.textContent = "✊";
    }
    else if(computerSelection === "paper"){
        computerChoice.textContent = "✋";
    }
    else{
        computerChoice.textContent = "✌";
    }

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
        playerScore ++;
        scorePlayer.textContent = "Player " + playerScore;
        topText.textContent = "You Win!";
        topText2.textContent = "" + CapitalizeFirst(playerSelection) + " beats " + CapitalizeFirst(computerSelection);

        if(playerScore === 5){
            alert("You Win!");
            location.reload();
        }

        return;  
    }
    else if(playerWin === 0){
        computerScore ++;
        scoreComputer.textContent = "Computer: " + computerScore;
        topText.textContent = "You Lose!";
        topText2.textContent = "" + CapitalizeFirst(playerSelection) + " loses to " + CapitalizeFirst(computerSelection);

        if(computerScore === 5){
            alert("You Lose!");
            location.reload();
        }

        return;
    }
    else{
        topText.textContent = "It's a tie!";
        topText2.textContent = "" + CapitalizeFirst(playerSelection) + " ties with " + CapitalizeFirst(computerSelection);
        return;
    }
}

function CapitalizeFirst(string){
    let firstletter = string.charAt(0)
    firstletter = firstletter.toUpperCase();
    return firstletter + string.slice(1);
  }



let playerWin;
let playerScore = 0;
let computerScore = 0;


const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener('click', () => {
    PlayRound("rock", GetComputerChoice());
});

paperButton.addEventListener('click', () => {
    PlayRound("paper", GetComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    PlayRound("scissors", GetComputerChoice());
});



