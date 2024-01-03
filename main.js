let playerLives = 5;
let machineLives = 5;
let turnsCount = 0;
let result; // Declare the 'result' variable

let updateUI = () => {
    document.getElementById('player').getElementsByTagName('h3')[0].textContent = playerLives;
    document.getElementById('machine').getElementsByTagName('h3')[0].textContent = machineLives;
    document.getElementById('turns').getElementsByTagName('h3')[0].textContent = turnsCount;

    // Display result in a result div
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${result}</p>`;
};

let getComputerChoice = () => ['jo', 'ken', 'po'][Math.floor(Math.random() * 3)];

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        result = "It's a tie! Let's play again.";
    } else if (
        (playerSelection === 'jo' && computerSelection === 'po') ||
        (playerSelection === 'ken' && computerSelection === 'jo') ||
        (playerSelection === 'po' && computerSelection === 'ken')
    ) {
        machineLives--;
        result = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        playerLives--;
        result = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    updateUI();

    return result;
};

let startGame = () => {
    playerLives = 5;
    machineLives = 5;
    turnsCount = 0;
    updateUI();

    // Show Jo-Ken-Po buttons
    document.getElementById('buttons-container').style.display = 'block';

    // Clear previous results
    document.getElementById('result').innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        // Player makes selection using buttons
    }
};

let makeSelection = (playerSelection) => {
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    turnsCount++;
};
