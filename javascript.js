function getComputerChoice() {
    let choices = ['rock','paper','scissors']
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


let computerSelection = getComputerChoice();
let playerScore = parseInt(0);
let computerScore = parseInt(0);

function playRound(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return(`It's a tie! The computer picked ${computerSelection}`)
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return('You win! Rock beats scissors.')
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return('You win! Paper beats rock.')
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return('You win! Scissors beats paper.');
    } else {
        computerScore++;
        return(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }
}

/* remove for logic thst plays exactly 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        let question = prompt('Rock, Paper, or Scissors?');
        const playerSelection = question.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
    return(`Player Score: ${playerScore}        Computer Score: ${computerScore}`)
}
*/

const rock = document.getElementById("rockBtn");
rock.addEventListener('click', () => {
    console.log(playRound('rock', computerSelection));
});

const paper = document.querySelector("#paperBtn");
paper.addEventListener('click', () => {
    console.log(playRound('paper', computerSelection))
});

const scissors = document.getElementById('scissorsBtn');
scissors.addEventListener('click', () => {
    console.log(playRound('scissors', computerSelection))
});
    
