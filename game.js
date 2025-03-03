function getComputerChoice() {
    randInt = Math.floor(Math.random() * 3);

    if (randInt === 0) {
        return "rock";
    }
    else if (randInt === 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    choice = prompt("Please enter your choice (rock, paper, scissors)").toLowerCase;

    
}

console.log(getComputerChoice())