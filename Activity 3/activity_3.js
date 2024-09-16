
function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('calc-result').innerText = "Please enter valid numbers.";
        return;
    }

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;

    document.getElementById('calc-result').innerHTML = `
        Sum: ${sum}<br>
        Difference: ${difference}<br>
        Product: ${product}<br>
        Quotient: ${quotient}
    `;
}


function validateAge() {
    let age = parseInt(document.getElementById('age').value);

    if (isNaN(age)) {
        document.getElementById('age-result').innerText = "Please enter a valid age.";
        return;
    }

    if (age >= 18) {
        alert("You are an adult.");
        document.getElementById('age-result').innerText = "You are an adult.";
    } else {
        alert("You are not an adult.");
        document.getElementById('age-result').innerText = "You are not an adult.";
    }
}
