let getComputerChoice = () => ['Jo', 'Ken', 'Po'][Math.floor(Math.random() * 3)];

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    return playerSelection === computerSelection
        ? "It's a tie! Let's play again."
        : (playerSelection === 'jo' && computerSelection === 'po') ||
          (playerSelection === 'ken' && computerSelection === 'jo') ||
          (playerSelection === 'po' && computerSelection === 'ken')
        ? `You Win! ${playerSelection} beats ${computerSelection}.`
        : `You Lose! ${computerSelection} beats ${playerSelection}.`;
};

let playerSelection = 'po';
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
