let firstNumber = undefined, secondNumber = undefined, operator = undefined;
let currentNumber = 0, lastOperator = '';
let displayValue = '0';


// Functions for the operations
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function modulo(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
}

function operate(firstNumber, secondNumber, operator) {
    let result = 0;
    console.log(operator);
    switch(operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;
        case '÷':
            result = divide(firstNumber, secondNumber);
            break;
        case '×':
            result = multiply(firstNumber, secondNumber);
            break;
        case '%':
            result = modulo(firstNumber, secondNumber);
            break;
        default:
            result = 0;
    }
    return result;
}


// Reset function
function reset() {
    firstNumber = undefined;
    secondNumber = undefined;
    currentNumber = 0;
    currentOperator = '';
    lastOperator = '';
    displayValue = '0';
}

// All clear button
const ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
    reset();
});

// Logic to retrieve the numbers from DOM.
const display = document.querySelector('.display');
const calci = document.querySelector('.calculator');

calci.addEventListener('click', (e) => {
    display.textContent = displayValue;
});

for(let i = 0; i < 10; i++) {
    const number = document.querySelector(`#num-${i}`);
    number.addEventListener('click', (e) => {
        if(displayValue === '0') {
            displayValue = '';
        }
        if(lastOperator.length === 0) {
            if(firstNumber === undefined) {
                firstNumber = 0;
            }
            firstNumber = changeNumber(firstNumber, i);
            console.log('it is' + firstNumber);
        } else {
            if(secondNumber === undefined) {
                secondNumber = 0;
                displayValue = '';
            }
            secondNumber = changeNumber(secondNumber, i);
        }
        displayValue += `${i}`;
    });
}

function changeNumber(number, i) {
    if(number >= 0) {
        number = number * 10 + i;
    } else {
        number = number * 10 - i;   
    }
    return number;
}

const operation = document.querySelectorAll('.operator');
operation.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        if(operator.textContent === '=') {
            if(secondNumber === undefined) {
                displayValue = firstNumber;
            }
            else {
                evaluateAndShow();
            }
            return ;
        }
        if(secondNumber === undefined) {
            lastOperator = operator.textContent;
        }
        else {
            evaluateAndShow();
            lastOperator = operator.textContent;
        }
    })
});

function evaluateAndShow() {
    firstNumber = operate(firstNumber, secondNumber, lastOperator);
    console.log({firstNumber});
    secondNumber = undefined;
    firstNumber = Math.round(firstNumber * 100) / 100;
    displayValue = firstNumber.toString();
}


// Sign change button functionality
const sign = document.querySelector('#sign');
sign.addEventListener('click', () => {
    console.log({firstNumber});
    if(secondNumber !== undefined) {
        secondNumber = -secondNumber;
        displayValue = secondNumber.toString();
    } else if(firstNumber !== undefined){
        firstNumber = -firstNumber;
        displayValue = firstNumber.toString();
    }
    console.log({firstNumber});
    console.log(displayValue);
});