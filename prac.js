const startBtn = document.querySelector('.btn');

const ROCK ='ROCK'
const PAPER ='PAPER'
const SCISSORS ='SCISSORS'
const DEFAULT_CHOICE = ROCK
const draw = 'DRAW'
const computerWins = 'COMPUTER WINS'
const playerWins = 'PLAYER WINS'

let gameIsRunning = false

const getPlayerChoice=function(){
    const selection=prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`).toUpperCase();
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

const getComputerChoice = function(){
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

const getWinner = function(computer,player){
    if(computer === player){
        return draw;
    }
    else if(
        computer === ROCK && player === PAPER ||
        computer === SCISSORS && player === ROCK ||
        computer === PAPER && player === SCISSORS
        )
        {
            return playerWins;
        }
    else(
        player === ROCK && computer === PAPER ||
        player === SCISSORS && computer === ROCK ||
        player === PAPER && computer === SCISSORS
        )
        {
            return computerWins
        }
}

startBtn.addEventListener('click',function(){
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true
    console.log('Game is starting...')  
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    const winner = getWinner(playerSelection,computerSelection)
    console.log(winner);
})
