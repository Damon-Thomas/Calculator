function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

// returns answer
function operate() {
    if (operator === 0) {
        return add(num1, num2);}
    else if (operator === 1) {
        return subtract(num1, num2);}
    else if (operator === 2) {
        return multiply(num1, num2);}
    else if (operator === 3) {
        return divide(num1, num2);}
}



// Global Variables
let num1 = 0
let operator = 0 
let num2 = 0