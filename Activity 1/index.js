function checkEligibility() {
    
    var age = document.getElementById("age").value;

    
    age = parseInt(age);

    
    var result = document.getElementById("result");

   
    if (isNaN(age)) {
        result.textContent = "Please enter a valid age.";
        return;
    }

    
    if (age >= 18) {
        result.textContent = "You are eligible to vote!";
    } else {
        result.textContent = "You are not eligible to vote.";
    }
}