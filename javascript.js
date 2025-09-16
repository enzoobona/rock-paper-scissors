

function getComputerChoice() {
    let play = ["rock", "paper", "scissors"];
    let i = Math.trunc(Math.random()*3);
    return play[i];
}

function getHumanChoice() {
    let input = prompt("Input rock, paper or scissors").toLowerCase();
    return input;
}

let computerScore = 0;
let humanScore = 0;

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();


    let winLoseTie = ""; 
    let beatsOrTies = "";
    let winner = "";
    let loser = "";

    if(humanChoice == computerChoice){
        winLoseTie = " tie, ";
        winner = humanChoice;
        beatsOrTies = " ties with "
        loser = computerChoice;
    } else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice.length > computerChoice.length){
        winLoseTie = " won, ";
        winner = humanChoice;
        beatsOrTies = " beats "
        loser = computerChoice;
        humanScore++;
    } else {
        winLoseTie = " lost, ";
        winner = computerChoice;
        beatsOrTies = " beats "
        loser = humanChoice;
        computerScore++;
    }
    
    let message = "You " + winLoseTie + winner + beatsOrTies + loser;

    console.log(message);
}

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log("Human Score: " + humanScore + "\nComputer Score: " + computerScore)
}

playGame()