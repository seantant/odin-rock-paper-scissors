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

function capitalize(str) {
    first = str.charAt(0).toUpperCase();
    remaining = str.substring(1).toLowerCase();

    return first + remaining;
}

let humanScore = 0;
let computerScore = 0;

function displayWinner(winner) {
    const body = document.querySelector("body");
    let winnerDiv = document.createElement("div");

    winnerDiv.textContent = `${winner} wins!`;
    body.appendChild(winnerDiv);
}

function playRound(humanChoice) {
    const resultsDiv = document.querySelector("div");

    let computerChoice = getComputerChoice();

    if (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.
                                        Player: ${humanScore}, Computer: ${computerScore}`;

            if (humanScore === 5) {
                displayWinner("Player");
            }
        }
    else if (computerChoice === "Rock" && humanChoice === "Scissors" || 
        computerChoice === "Scissors" && humanChoice === "Paper" ||
        computerChoice === "Paper" && humanChoice === "Rock") {
            computerScore++;
            resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.
                                        Player: ${humanScore}, Computer: ${computerScore}`;
            if (computerScore === 5) {
                displayWinner("Computer");
            }
        }
    else {
        resultsDiv.textContent = `Tie! You both chose ${humanChoice}.
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

    body.appendChild(rock);
    body.appendChild(paper);
    body.appendChild(scissors);

    let results = document.createElement("div");
    body.appendChild(results);
}

playGame();