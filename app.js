// console.log("Hello, World!")

function getComputerChoice() {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors'];

    return computerChoice[computerNumber];
}


function getHumanChoice() {
    const humanSelect = prompt('Please select Rock, Paper or Scissors');
    console.log(`You have selected ${humanSelect}`)
}

let humanScore = 0;
let computerScore = 0;

//while human choice === 'rock'.toUpperCase() || 'paper'.toUpperCase() || 'scissors.toUpperCase()

function playRound(humanChoice, computerChoice) {
    while (humanChoice.toUpperCase() === 'ROCK' || humanChoice.toUpperCase() === 'PAPER' || humanChoice.toUpperCase() === 'SCISSORS') {
        if (humanChoice.toUpperCase() === 'ROCK' && computerChoice.toUpperCase() === 'PAPER') {
            computerScore++;
            console.log('Computer Wins!')
        } else if (humanChoice.toUpperCase() === 'ROCK' && computerChoice.toUpperCase() === 'SCISSORS') {
            humanScore++;
            console.log('You beat the computer!')
        } else if ()
    }

}