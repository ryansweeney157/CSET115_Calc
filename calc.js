var display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteNum() {
    var currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length -1);

}

function addToCalc(value) {
    display.value += value;
}
