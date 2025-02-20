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

function playRound(humanChoice, computerChoice) {
    if (toLowerCase(humanChoice) === computerChoice) {
        playRound()
    } else if (toLowerCase(humanChoice) === 'rock' && computerChoice === 'scissors') {
        console.log('you win!');
        humanScore++;
    } else if (toLowerCase(humanChoice) === 'scissors' && computerChoice === 'paper') {
        console.log('you win!')
        humanScore++;

    } else if (toLowerCase(humanChoice) === 'paper' && computerChoice === 'rock') {
        console.log('you win!');
        humanScore++;
    } else {
        console.log('computer wins!')
        computerScore++;
    }
}