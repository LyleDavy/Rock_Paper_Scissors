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
        let tie = document.createElement('div');
        tie.textContent = `It's a tie! The computer picked ${computerSelection}`;
        roundResult.append(tie);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        let winRock = document.createElement('div');
        winRock.textContent = 'You win! Rock beats scissors.';
        roundResult.append(winRock);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        let winPaper = document.createElement('div');
        winPaper.textContent = 'You win! Paper beats rock.';
        roundResult.append(winPaper);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        let winScissors = document.createElement('div');
        winScissors.textContent = 'You win! Scissors beats paper.';
        roundResult.append(winScissors)
    } else {
        computerScore++;
        let lose = document.createElement('div');
        lose.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        roundResult.append(lose);
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
    
