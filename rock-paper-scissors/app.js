const computerChoiceDisplay=document.getElementById('computer-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const resultDisplay=document.getElementById('result');

const possibleChoices=document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    result = getResult();
    resultDisplay.innerHTML=result;
}));

function generateComputerChoice(){
    const randomNumber=Math.trunc(Math.random()*possibleChoices.length)+1;
    switch(randomNumber){
        case 1:
            computerChoice='rock';
            break;
        case 2:
            computerChoice='paper';
            break;
        case 3:
            computerChoice='scissors';
            break;
        default:
            break;
    }
    computerChoiceDisplay.innerHTML=computerChoice;
};

function getResult(){
    return computerChoice === userChoice ? 'its a draw'
        : computerChoice ==='rock' && userChoice==='paper' ? 'you win!'
        : computerChoice ==='paper' && userChoice === 'scissors' ? 'you win!'
        : computerChoice === 'scissors' && userChoice ==='rock' ? 'you win!'
        : 'you lose!';
}