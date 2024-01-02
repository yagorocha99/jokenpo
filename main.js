let playerLives = 5;
let machineLives = 5;
let turnsCount = 0;

document.getElementById('player').getElementsByTagName('h3')[0].textcontent = playerLives;
document.getElementById('machine').getElementsByTagName('h3')[0].textcontent = machineLives;
document.getElementById('turns').getElementsByTagName('h3')[0].textcontent = turnsCount;

let getComputerChoice = () => ['jo', 'ken', 'po'][Math.floor(Math.random() * 3)];

let updateUI = () => {
    document.getElementById('player').getElementsByTagName('h3')[0].textcontent = playerLives;
    document.getElementById('machine').getElementsByTagName('h3')[0].textcontent = machineLives;
    document.getElementById('turns').getElementsByTagName('h3')[0].textcontent = turnsCount;

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${result}</p>`
}


let playRound = (playerSelection, computerSelection) => {
    let result;

    result = playerSelection == computerSelection
        ? "It's a tie! Let's play again."
        : (playerSelection == 'jo' && computerSelection == 'po') ||
        (playerSelection == 'ken' && computerSelection == 'jo') ||
        (playerSelection == 'po' && computerSelection == 'ken')
        ? machineLives-- && `You Win! ${playerSelection} beats ${computerSelection}.`
        : playerLives-- && `You Lose! ${computerSelection} beats ${playerSelection}.`;

    return result;
}












function game(){
    for(let i = 1; i <= 5; i++){

        

        let playerSelection = prompt("Choose between Jo-Ken-Po: ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
