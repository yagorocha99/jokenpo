function game(){
    for(let i = 1; i <= 5; i++){
        let getComputerChoice = () => ['jo', 'ken', 'po'][Math.floor(Math.random() * 3)];

        let playRound = (playerSelection, computerSelection) => {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection;

            return playerSelection == computerSelection
                ? "It's a tie! Let's play again."
                : (playerSelection == 'jo' && computerSelection == 'po') ||
                (playerSelection == 'ken' && computerSelection == 'jo') ||
                (playerSelection == 'po' && computerSelection == 'ken')
                ? `You Win! ${playerSelection} beats ${computerSelection}.`
                : `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }

        let playerSelection = prompt("Choose between Jo-Ken-Po: ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
