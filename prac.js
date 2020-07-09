const startBtn = document.querySelector('.btn');

const ROCK ='ROCK'
const PAPER ='PAPER'
const SCISSORS ='SCISSORS'
const DEFAULT_CHOICE = ROCK
const draw = 'DRAW'
const computerWins = 'COMPUTER WINS'
const playerWins = 'PLAYER WINS'

let gameIsRunning = false

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`).toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
        ){
        alert(`invalid choice! So we chose ${ROCK} for you!`)
        return DEFAULT_CHOICE
        }
        return selection
}

const getComputerChoice = () =>{
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK
    }
    else if (randomValue < 0.67) {
        return PAPER
    }
    else{
        return SCISSORS
    }
}

const getWinner = (player,computer) => {
    if(computer === player){
        return draw;
    }
    else if(
        player === ROCK && computer === SCISSORS ||
        player === PAPER && computer === ROCK ||
        player === SCISSORS && computer === PAPER
        )
        {
            return playerWins;
        }
    else(
        computer === ROCK && player === SCISSORS ||
        computer === PAPER && player === ROCK ||
        computer === SCISSORS && player === PAPER
        )
        {
            return computerWins
        }
}

startBtn.addEventListener('click',() => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true
    console.log('Game is starting...')  
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    const winner = getWinner(playerSelection,computerSelection)
    console.log(winner);

    let message=`You picked ${playerSelection} and the computer picked ${computerSelection} therefore `;
    if(winner === draw){
        message += "you had a draw"
    }
    else if(winner === playerWins){
        message += "you won"
    }
    else{
        message += 'you lost'
    }
    alert(message);
    gameIsRunning = false;
})
