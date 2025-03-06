function getComputerChoice() {
    randInt = Math.floor(Math.random() * 3);

    if (randInt === 0) {
        return "Rock";
    }
    else if (randInt === 1) {
        return "Paper";
    }
    return "Scissors";
}

let humanScore = 0;
let computerScore = 0;

function displayWinner(winner) {
    const body = document.querySelector("body");
    let winnerDiv = document.createElement("div");

    winnerDiv.textContent = `${winner} wins!`;
    body.appendChild(winnerDiv);

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    body.removeChild(rock);
    body.removeChild(paper);
    body.removeChild(scissors);
}

function playRound(humanChoice) {
    const resultsDiv = document.querySelector("div");

    let computerChoice = getComputerChoice();

    resultsDiv.textContent = `Player chose: ${humanChoice}, Computer chose: ${computerChoice}. `;
    if (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            resultsDiv.textContent += `You win! ${humanChoice} beats ${computerChoice}.
                                        Player: ${humanScore}, Computer: ${computerScore}`;

            if (humanScore === 5) {
                displayWinner("Player");
            }
        }
    else if (computerChoice === "Rock" && humanChoice === "Scissors" || 
        computerChoice === "Scissors" && humanChoice === "Paper" ||
        computerChoice === "Paper" && humanChoice === "Rock") {
            computerScore++;
            resultsDiv.textContent += `You lose! ${computerChoice} beats ${humanChoice}.
                                        Player: ${humanScore}, Computer: ${computerScore}`;
            if (computerScore === 5) {
                displayWinner("Computer");
            }
        }
    else {
        resultsDiv.textContent += `Tie! You both chose ${humanChoice}.
                                    Player: ${humanScore}, Computer: ${computerScore}`;
    }
}

function playGame() {
    let rock = document.createElement("button");
    let paper = document.createElement("button");
    let scissors = document.createElement("button");

    let body = document.querySelector("body");

    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";

    rock.addEventListener("click", () => playRound("Rock"));
    paper.addEventListener("click", () => playRound("Paper"));
    scissors.addEventListener("click", () => playRound("Scissors"));

    rock.id = "rock";
    paper.id = "paper";
    scissors.id = "scissors";

    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);

    let results = document.createElement("div");
    body.appendChild(results);
}

playGame();