const btn = document.querySelectorAll(".options button")

function getComputerChoice() {
    let play = ["Rock", "Paper", "Scissors"];
    let i = Math.trunc(Math.random()*3);
    return play[i];
}

function setImage(player, choice){
    const p = document.querySelector(player)
    let image = ""
    
    switch(choice){
        case "Rock":
            image += "piedra";
            break;
        case "Paper":
            image += "papel";
            break;
        case "Scissors":
            image += "tijera";
            break;
    }

    if(player == "#player"){
        image += "1"
    } else {
        image += "2"
    }

    p.setAttribute("src", image + ".png")
}

let computerScore = 0;
let humanScore = 0;
let choice = "";

btn.forEach(button => {
    button.addEventListener("click", () => {choice = button.textContent})
    button.addEventListener("click", playRound)
})

function playRound(event){
    event.preventDefault()
    
    const humanChoice = choice;
    const computerChoice = getComputerChoice();

    setImage("#player", humanChoice);
    setImage("#computer", computerChoice);

    if(humanChoice == computerChoice){
        message = "It's a tie!";
    } else if(humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Scissors" && computerChoice == "Paper"){
        message = "You Win!";
        humanScore++;
    } else {
        message = "You Lose!";
        computerScore++;
    }
    
    const hScorer = document.querySelector("#puntajeJ")
    const cScorer = document.querySelector("#puntajeC")
    
    hScorer.textContent = humanScore
    cScorer.textContent = computerScore

    const ganador = document.querySelector(".ganador h1")
    ganador.textContent = message;

}