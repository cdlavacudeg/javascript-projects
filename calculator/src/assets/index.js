const numberButtons=document.querySelectorAll('button.button-number');
const operationButtons=document.querySelectorAll('button.button-operation');
const clearButton=document.querySelector('#clear');
const equalsButton=document.querySelector('#equals');

const formulaDisplay=document.querySelector('#formula-display');
const output=document.querySelector('#output-display');

numberButtons.forEach(number => {
    number.addEventListener('click',()=>{
        formulaDisplay.innerText+=number.innerText;
    });
});
operationButtons.forEach(operation => {
    operation.addEventListener('click',()=>{
        formulaDisplay.innerText+=operation.innerText;
    });
});
clearButton.addEventListener('click',()=>{
    formulaDisplay.innerText='';
    output.innerText='';
})

equalsButton.addEventListener('click',()=>{
    output.innerText=formulaDisplay.innerText
})