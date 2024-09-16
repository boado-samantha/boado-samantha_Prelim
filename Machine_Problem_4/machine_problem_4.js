
function calculateTicketPrice() {
    let age = document.getElementById('age').value;
    let price;
    
    
    if (isNaN(age) || age < 0) {
        document.getElementById('price-result').innerHTML = "Please enter a valid age.";
        return;
    }

    age = parseInt(age);

    
    if (age >= 0 && age <= 5) {
        price = "Free entry";
    } else if (age >= 6 && age <= 12) {
        price = "50 PHP";
    } else if (age >= 13 && age <= 17) {
        price = "100 PHP";
    } else if (age >= 18 && age <= 59) {
        price = "200 PHP";
    } else if (age >= 60) {
        price = "150 PHP";
    } else {
        price = "Invalid age entered";
    }

    
    document.getElementById('price-result').innerHTML = `Ticket Price: ${price}`;
}
