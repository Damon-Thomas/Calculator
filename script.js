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
    operators.forEach(element => {element.style.backgroundColor = "#f7ad1977"});
}



// Global Variables
let num1 = ""
let operator = ""
let num2 = ""
let answer = false;



// set class variables
numbers = document.querySelectorAll(".numbers")
operators = document.querySelectorAll(".operator")
clearButton = document.querySelector(".clear")
output = document.querySelector("#output")
del = document.querySelector("#delete")

// clear button functionality
clearButton.addEventListener('click', clearDisplay);
del.addEventListener('click', deleteNumber)




// in progresss
function deleteNumber() {
    if (num1 != "" && operate != "" && num2 != "") {
        num2 = num2.replace(/.$/, "");
        output.innerHTML = num2;}
    else if (operator == "" && num2 == "" && answer != true){
        num1 = num1.replace(/.$/, "");
        output.innerHTML = num1;}}





// use buttons to set num1 and num2
numbers.forEach(element => {
    element.addEventListener('click', function() {
        output.style.fontSize = "5vh"
        if (operator != "") {
            if (num2.length < 15) {
                if (element.textContent != "." || (num2.includes(".") != true)) {
                    num2 += element.textContent;
                    output.innerHTML = num2}}}
        else {
            if (answer === true) {
                num1 = element.textContent;
                output.innerHTML = num1
                answer = false
            }
            else {
                answer = false
                if (num1.length < 15) {
                    if (element.textContent != "." || (num1.includes(".") != true)) {
                        num1 += element.textContent;
                        output.innerHTML = num1;}}}
        }
    })
    
});

// change operator
operators.forEach(element => {
    element.addEventListener('click', function() {
        if (num1 === ""){
            return }
        operators.forEach(element => {element.style.backgroundColor = "#f7ad1977"})
        if (operator === "" && num2 === "")  {
            operator = element.textContent
            element.style.backgroundColor = "#f7ad19"}
        else if (element.textContent === operator && num2 == "") {
            operator = ""
            operators.forEach(element => {element.style.backgroundColor = "#f7ad1977"})
        }
        else{
            equalEquation()
            operator = element.textContent
            element.style.backgroundColor = "#f7ad19"
        }
    })
    
});

// evaluate equation, 
function equalEquation() {
// handle equals before equation entered
    if (num1 === "918273645" && operator === "") {
        output.innerHTML = "Access Granted!";
        num1 = "";
        operator = "";
        num2 = "";
    }
    if (num1 != "" && num2 != "" && operator != "") {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (operator === "+") {
            operator = 0;}
        else if (operator === "-") {
            operator = 1;}
        else if (operator === "x") {
            operator = 2;}
        else if (operator === "÷") {
            operator = 3;}
// handle dividing by 0
        if (operator === 3 && num2 === 0) {
            output.style.fontSize = "3vh"
            output.innerHTML = "Woah there! You Can't Divide by 0 Partner";
            num1 = ""
            operator = ""
            num2 = ""
            
        }
        else {
            theAnswer = operate();
            if (theAnswer.toString().length > 15) {
            theAnswer = roundToFifteenDigits(theAnswer)
            }
            output.innerHTML = theAnswer;
            num1 = theAnswer;
            num2 = "";
            operator = "";
            answer = true};
            operators.forEach(element => {element.style.backgroundColor = "#f7ad1977"})
}}

function roundToFifteenDigits(number) {
    number = number.toString();
    if (parseInt(number[15]) >= 5) {
        number[14] = (parseInt(number[14]) + 1).toString()
    }
    number = number.split("")
    number = number.slice(0,15)
    number = number.join("")
    return parseFloat(number)
}

// equals button functionality
equals.addEventListener('click', equalEquation)


