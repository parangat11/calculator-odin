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

let firstNumber = undefined, secondNumber = undefined, operator = undefined;
let displayValue = '';
const display = document.querySelector('.display');
const calci = document.querySelector('calculator');

calci.addEventListener('click', (e) => {
    display.textContent = displayValue;
});

function operate(firstNumber, secondNumber, operator) {
    switch(operate) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '%':
            return modulo(firstNumber, secondNumber);
    }
}