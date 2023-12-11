'use strict';


//defining the secret number
let secretNumber = Math.trunc(Math.random()* 20)+1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
if(score > 1){
    if (!guess){
        displayMessage('No Number!🤦‍♂️');
    } else if(guess === secretNumber){
        displayMessage('Correct Number💖');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }else if (highScore > score){
            highScore = highScore;
        }
    } else if(guess !== secretNumber){
        document.querySelector('.message').textContent = guess > secretNumber ? 'Number is too high!📈' : 'Number is too low!📉';
        score --;
        document.querySelector('.score').textContent = score;
    }else{
        score = 0;
    }
}else{
    displayMessage('You lose the game!');
}
    
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()* 20)+1;
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value= '';
    
})