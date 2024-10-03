var display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

//gets rid of part of string technically
function deleteNum() {
    var currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length -1);

}

//slices string from beginning and subtracts the length of the last entry, which makes sure it only clears the last part. This takes the last part of the split array and gets rid of it. 
function clearEntry() {
    var currentValue = display.value;
    var lastEntry = currentValue.split(/[\+\-\*\/]/).pop();
    display.value = currentValue.slice(0, -lastEntry.length);
}

//gets value of element and adds it to the calculator
function addToCalc(value) {
    display.value += value;
}


//getscurent expression, validates it, and evaluates
function calculateResult() {
    var expression = display.value;
    if (validExpression(expression)) {
        display.value = eval(expression);
    } else {
        display.value = 'error'
    }
}

//makes sure calculator only contains valid characters
function validExpression(expression) {
    var validChars = /^[0-9+\-*/.()]+$/;
    return validChars.test(expression)
}

//converts to floating-point number so it can calculate decimal, checks if its valid, then calculates the square root.  
function SquareRoot() {
    var currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.sqrt(currentValue);
    
    } else {
        display.value = 'error';
    }
}

//pretty much same thing as square root, but sets it to the power of 2
function squareNumber() {
    var currentValue = parseFLoat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 2);
    } else {
        display.value = 'error'
    }
}

function calculatePercenetage() {
    var currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue / 100;

    } else {
        display.value = 'error';
    }
}