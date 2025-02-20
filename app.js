// console.log("Hello, World!")

function getComputerChoice() {
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors'];

    return computerChoice[computerNumber];
}


function getHumanChoice() {
    let humanSelect = prompt('Please select rock, paper or scissors');
    while (
        humanSelect.toLowerCase() != 'rock' &&
        humanSelect.toLowerCase() != 'paper' &&
        humanSelect.toLowerCase() != 'scissors'
    ) {
        humanSelect = prompt('Invalid prompt, please try again.');
    }

    console.log(`You have selected ${humanSelect}`)
    return humanSelect;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You chose ${humanChoice} and computer chose ${computerChoice}`)
        console.log('tie, play again!')
        playRound()
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You chose ${humanChoice} and computer chose ${computerChoice}`)
        console.log('you win!');
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You chose ${humanChoice} and computer chose ${computerChoice}`)
        console.log('you win!')
        humanScore++;

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You chose ${humanChoice} and computer chose ${computerChoice}`)
        console.log('you win!');
        humanScore++;
    } else {
        console.log('computer wins!')
        console.log(`You chose ${humanChoice} and computer chose ${computerChoice}`)
        computerScore++;
    }
}


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);