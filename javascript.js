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
        gameOver();
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        let winRock = document.createElement('div');
        winRock.textContent = 'You win! Rock beats scissors.';
        roundResult.append(winRock);
        document.getElementById('playerCount');
        playerCount.textContent = "";
        playerCount.append(playerScore);
        gameOver();
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        let winPaper = document.createElement('div');
        winPaper.textContent = 'You win! Paper beats rock.';
        roundResult.append(winPaper);
        document.getElementById('playerCount');
        playerCount.textContent = "";
        playerCount.append(playerScore);
        gameOver();
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        let winScissors = document.createElement('div');
        winScissors.textContent = 'You win! Scissors beats paper.';
        roundResult.append(winScissors);
        document.getElementById('playerCount');
        playerCount.textContent = "";
        playerCount.append(playerScore);
        gameOver();
    } else {
        computerScore++;
        let lose = document.createElement('div');
        lose.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        roundResult.append(lose);
        document.getElementById('computerCount');
        computerCount.textContent = "";
        computerCount.append(computerScore);
        gameOver();
    }
}
function gameOver() {
    document.getElementById('winner')
    if (playerScore === 5) {
        winner.append('Player wins!');
    }
    else if (computerScore === 5) {
        winner.append('Computer wins!')
    }
}

// make score count into function to reduce mess? //

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
    (playRound('rock', computerSelection));
    computerSelection = getComputerChoice();
});

const paper = document.querySelector("#paperBtn");
paper.addEventListener('click', () => {
    (playRound('paper', computerSelection));
    computerSelection = getComputerChoice();
});

const scissors = document.getElementById('scissorsBtn');
scissors.addEventListener('click', () => {
    (playRound('scissors', computerSelection));
    computerSelection = getComputerChoice();
});
    
