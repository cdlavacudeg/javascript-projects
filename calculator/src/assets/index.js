const numberButtons=document.querySelectorAll('button.button-number');
const operationButtons=document.querySelectorAll('button.button-operation');
const clearButton=document.querySelector('#clear');
const equalsButton=document.querySelector('#equals');

const formulaDisplay=document.querySelector('#formula-display');
const output=document.querySelector('#display');
let formula='';
let done=false;
output.innerText='0';
numberButtons.forEach(number => {
    number.addEventListener('click',()=>{
        if(done==true) {
            clearVariables();
        };
        formulaDisplay.innerText+=number.innerText;
        if(output.innerHTML!=='0'){
            output.innerText+=number.innerHTML;
        }else{
            output.innerText=number.innerHTML;
        }
        formula+=number.innerText;
    });
});
operationButtons.forEach(operation => {
    operation.addEventListener('click',()=>{
        if(done==true) {
            clearVariables();
        };
        formulaDisplay.innerText+=operation.innerText;
        formula+=operation.innerText;  
        output.innerText='0';      
    });
});
clearButton.addEventListener('click',()=>{
    clearVariables();
})

equalsButton.addEventListener('click',()=>{
    console.log(formula);
    output.innerText=eval(formula);
    done=true;
})

clearVariables=()=>{
    formulaDisplay.innerText='';
    output.innerText=0;
    formula='';
    done=false;
}