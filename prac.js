const startBtn = document.querySelector('.btn');

const ROCK ='ROCK'
const PAPER ='PAPER'
const SCISSORS ='SCISSORS'
const DEFAULT_CHOICE = ROCK
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

startBtn.addEventListener('click',function(){
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true
    console.log('Game is starting...')  
    const playerSelection=getPlayerChoice()
    console.log(playerSelection);
})
