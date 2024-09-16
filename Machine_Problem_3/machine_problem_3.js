function calculateInterest() {
   
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);

    
    let simpleInterest = (principal * rate * time) / 100;

    
    let totalAmount = principal + simpleInterest;

    
    document.getElementById('result').innerHTML = `
        Simple Interest: ${simpleInterest.toFixed(2)}<br>
        Total Amount: ${totalAmount.toFixed(2)}
    `;
}
