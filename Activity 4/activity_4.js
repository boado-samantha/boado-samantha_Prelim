
function checkTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let result;

    if (temperature <= 0) {
        result = "Water is frozen";
    } else if (temperature >= 100) {
        result = "Water is boiling";
    } else {
        result = "Water is in liquid state";
    }

    document.getElementById('temp-result').innerHTML = result;
}


function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
        case '+':
            result = `${num1} + ${num2} = ${num1 + num2}`;
            break;
        case '-':
            result = `${num1} - ${num2} = ${num1 - num2}`;
            break;
        case '*':
            result = `${num1} * ${num2} = ${num1 * num2}`;
            break;
        case '/':
            result = `${num1} / ${num2} = ${num1 / num2}`;
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById('calc-result').innerHTML = result;
}
