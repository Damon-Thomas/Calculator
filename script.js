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
    num1 = ""
    operator = ""
    num2 = ""
    output.innerHTML = ""
    
}



// Global Variables
let num1 = ""
let operator = ""
let num2 = ""



// set class variables
numbers = document.querySelectorAll(".numbers")
operators = document.querySelectorAll(".operator")
clearButton = document.querySelector(".clear")
output = document.querySelector("#output")


// clear button functionality
clearButton.addEventListener('click', clearDisplay);

// use buttons to set num1 and num2
numbers.forEach(element => {
    element.addEventListener('click', function() {
        if (operator != "") {
            num2 += element.textContent;
            output.innerHTML = num2

        }
        else {
            num1 += element.textContent;
            output.innerHTML = num1
        }
    })
    
});

// change operator
operators.forEach(element => {
    element.addEventListener('click', function() {
        if (operator == "") {
            operator = element.textContent
            output.innerHTML = operator
        }
    })
    
});

// equals button functionality
equals.addEventListener('click', function() {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (operator === "+") {
        operator = 0;}
    else if (operator === "-") {
        operator = 1;}
    else if (operator === "x") {
        operator = 2;}
    else if (operator === "/") {
        operator = 3;}
    answer = operate()
    output.innerHTML = answer
    num1 = answer
    num2 = ""
    operator = ""
}

)



