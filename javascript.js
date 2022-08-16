function getComputerChoice() {
    let choices = ['rock','paper','scissors']
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

let question = prompt('Rock, Paper, or Scissors?');
let playerSelection = question.toLowerCase();
let computerSelection = getComputerChoice();

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return(`It's a tie! The computer picked ${computerSelection}`)
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return('You win! Rock beats scissors.')
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return('You win! Paper beats rock.')
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return('You win! Scissors beats paper.')
    } else {
        return(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }
}