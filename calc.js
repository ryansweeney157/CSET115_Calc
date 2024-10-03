var display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

//gets rid of part of string technically
function deleteNum() {
    var currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length -1);

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
function ValidExpression(expression) {
    var validChars = /^[0-9+\-*/.()]+$/;
    return validChars.test(expression)
}
