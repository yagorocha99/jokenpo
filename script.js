let getComputerChoice = () => ['Jo', 'Ken', 'Po'][Math.floor(Math.random() * 3)]

let computerChoice = getComputerChoice();
console.log("Computer's choice: " + computerChoice);

let playRound = (playerSelection, computerSelection) =>
    playerSelection = playerSelection.toLowerCase()
    ? "It's a tie! Let's play again."
    : (playerSelection == 'jo' && computerSelection == 'po') ||
      (playerSelection == 'ken' && computerSelection == 'jo') ||
      (playerSelection == 'po' && computerSelection == 'ken')
    ? 'You Win! ${playerSelection} beats ${computerSelection}.'
    : 'You Lose! ${computerSelection} beats ${playerSelection}.' ;

