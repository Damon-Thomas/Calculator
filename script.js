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

// reset global variables
function clearDisplay() {
    num1 = null
    operator = null
    num2 = null
}



// Global Variables
let num1 = null
let operator = null
let num2 = null
let displayValue = 0

// set class variables
numbers = document.querySelectorAll(".numbers")
operators = document.querySelectorAll(".operator")
clearButton = document.querySelector(".clear")


// clear button functionality
clearButton.addEventListener('click', clearDisplay);

// use buttons to set num1 and num2
numbers.forEach(element => {
    element.addEventListener('click', function() {
        if (operator != null) {
            if (num2 == null) {
                num2 = ""};
            num2 += element.textContent;
        }
        else {
            if (num1 == null) {
                num1 = "";};
            num1 += element.textContent;
        }
    })
    
});

// change operator
operators.forEach(element => {
    element.addEventListener('click', function() {
        if (operator == null) {
            operator = element.textContent
        }
    })
    
});








console.log(num1)
console.log(operator)
console.log(num2)