let playerLives = 5;
let machineLives = 5;
let turnsCount = 0;
let result;

let updateUI = () => {
    document.getElementById('player').getElementsByTagName('h3')[0].textContent = playerLives;
    document.getElementById('machine').getElementsByTagName('h3')[0].textContent = machineLives;
    document.getElementById('turns').getElementsByTagName('h3')[0].textContent = turnsCount;

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${result}</p>`;

    if (playerLives === 0) {
        disableButtons();
        alert("Better luck next time!");
    } else if (machineLives === 0) {
        disableButtons();
        alert("Congratulations, you win!");
    }
};

let disableButtons = () => {
    let buttons = document.getElementById('buttons-container').getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }
};

let getComputerChoice = () => ['Jo', 'Ken', 'Po'][Math.floor(Math.random() * 3)];

let playRound = (playerSelection, computerSelection) => {
    if (playerLives === 0 || machineLives === 0) {
        return;
    }

    result = "";

    if (playerSelection === computerSelection) {
        result = "It's a tie! Let's play again.";
    } else if (
        (playerSelection === 'Jo' && computerSelection === 'Po') ||
        (playerSelection === 'Ken' && computerSelection === 'Jo') ||
        (playerSelection === 'Po' && computerSelection === 'Ken')
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

    document.getElementById('buttons-container').style.display = 'block';

    document.getElementById('result').innerHTML = '';
};

let makeSelection = (playerSelection) => {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    turnsCount++;
};
