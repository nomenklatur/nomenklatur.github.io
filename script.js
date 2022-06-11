const numbers = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

numbers.forEach((number) =>{
    number.addEventListener('click', function(event){
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', function(event){
       inputOperator(event.target.value);
    })
});

equalSign.addEventListener('click', function(){
    calculate();
    updateScreen(currentNumber);
});

clearBtn.addEventListener('click', function(){
    clearAll();
    updateScreen(currentNumber);
});

decimal.addEventListener('click', function(){
    inputDecimal();
    updateScreen(currentNumber);
});

const updateScreen = (number) =>{
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;        
    } else {
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const calculate = () => {
    let result;
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }

    currentNumber = result.toFixed(2);
    calculationOperator = '';
}

const clearAll = () => {
    currentNumber = '0';
    prevNumber = '';
    calculationOperator = '';
}

const inputDecimal = (dot) =>{
    if (currentNumber.includes('.')){
        return;
    }
    currentNumber += '.';
}

