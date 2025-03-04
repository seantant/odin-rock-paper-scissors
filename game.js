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

function getHumanChoice() {
    choice = capitalize(prompt("Please enter your choice (rock, paper, scissors):").toLowerCase());

    if (choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        console.log("Invalid choice, please try again.");
        choice = getHumanChoice();
    }

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
    else if (computerChoice === "Rock" && humanChoice === "Scissors" || 
        computerChoice === "Scissors" && humanChoice === "Paper" ||
        computerChoice === "Paper" && humanChoice === "Rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    else {
        console.log(`Tie! You both chose ${humanChoice}.`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You won ${humanScore}-${computerScore}.`);
    }
    else if (humanScore < computerScore) {
        console.log(`You lost ${humanScore}-${computerScore}.`);
    }
    else {
        console.log(`You tied ${humanScore}-${computerScore}.`);
    }
}

playGame();