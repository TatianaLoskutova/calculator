let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function makeOperation(operationCode) {

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('operation is unknown')
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

let operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide];

for (let i = 0; i < operationButtons.length; i++) {
    let button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}
