let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    tie : 0
}
var finalPlayerMove ='';
var finalComputerMove = '';
var finalResult = ''
function displayScore() {
    document.querySelector('.scores').innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Tie: ${score.tie}`;
    
}

function pickcomputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else  { // randomNumber >= 2/3 && < 1
        computerMove = 'scissors';
    }
    
    return computerMove;
}


    


function reset() {
    score.wins = 0,
    score.losses = 0,
    score.tie = 0 ,
    localStorage.removeItem('score');
    displayScore();
    
}

function playGame(playerMove) {
    const computerMove = pickcomputerMove();
    let result = '';
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
        result = 'you lose.';  
        }else if (computerMove === 'paper') {
        result = 'you win.';    
        } else if(computerMove === 'scissors'){ 
            result ='tie.';
        }
    } else if (playerMove === 'paper') {
        
        if (computerMove === 'rock') {
            result = 'you win.';  
            }else if (computerMove === 'paper') {
            result = 'tie.';    
            } else if(computerMove === 'scissors'){ 
                result ='you lose.';
        }

    } else if(playerMove === 'rock'){ // rock
        if (computerMove === 'rock') {
                result = 'tie.';  
            } else if (computerMove === 'paper') {
                result = 'you lose.';    
            } else if (computerMove === 'scissors'){ 
                result ='you win.';
         }
finalPlayerMove = playerMove;
finalComputerMove = computerMove;
finalResult = result;
    }

    if (result === 'you win.'){
        score.wins += 1;
    }else if(result === 'you lose.'){
        score.losses += 1;
    }else if (result === 'tie.'){ // tie
        score.tie += 1
    }

    
    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.result')
    .innerHTML = result;
    
    document.querySelector('.picks')
    .innerHTML = `you pick <img class="move-img" src="images/${playerMove}-emoji.png" alt="">  computer pick<img class="move-img" src="images/${computerMove}-emoji.png" alt="">`;
    displayScore();
}


let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if (!isAutoPlaying){
        intervalId = setInterval(function() {
            const playerMove = pickcomputerMove();
            playGame(playerMove);
        },1000)
        isAutoPlaying = true;
    } else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }

    
    
}