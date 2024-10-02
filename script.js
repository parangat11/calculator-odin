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
        console.log(e.target);
        console.log({lastOperator});
        if(lastOperator.length !== 0) {
            displayValue = '';
        }
        if(displayValue === '0') {
            displayValue = `${i}`;
        }
        else {
            displayValue += `${i}`;
        }
        currentNumber = 10 * currentNumber + i;
    });
}

const operation = document.querySelectorAll('.operator');
operation.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        if(lastOperator.length !== 0) {
            if(firstNumber !== undefined) {
                secondNumber = Number(displayValue);
            }
            if(secondNumber !== undefined) {
                displayValue = operate(firstNumber, secondNumber, lastOperator);
                console.log({displayValue});
                displayValue = displayValue.toString();
            }
            lastOperator = operator.textContent;
            console.log("hereeee: " + displayValue);
        }
        if(operator.textContent !== '=') {
            console.log('ch');
            if(firstNumber === undefined) {
                firstNumber = currentNumber;
                currentNumber = 0;
                lastOperator = operator.textContent;
            }
            else if(secondNumber === undefined) {
                secondNumber = currentNumber;
                let result = operate(firstNumber, secondNumber, lastOperator);
                lastOperator = operator.textContent;
                currentNumber = 0;
                secondNumber = undefined;
                firstNumber = secondNumber;
                displayValue = result.toString();
            }
        }
        else {
            // if(secondNumber === undefined) {
            //     if(firstNumber === undefined) {
            //         reset();
            //     }
            //     else {

            //     }
            // }
        }
    })
});
