function calculateGrade() {
    
    const studentName = prompt("Enter the student's name:");

    const quiz1 = parseFloat(prompt("Enter the grade for Quiz 1 (0-100):"));
    const quiz2 = parseFloat(prompt("Enter the grade for Quiz 2 (0-100):"));
    const quiz3 = parseFloat(prompt("Enter the grade for Quiz 3 (0-100):"));

    const averageGrade = (quiz1 + quiz2 + quiz3) / 3;

    let letterGrade;
    if (averageGrade >= 90 && averageGrade <= 100) {
        letterGrade = 'A';
    } else if (averageGrade >= 80 && averageGrade < 90) {
        letterGrade = 'B';
    } else if (averageGrade >= 70 && averageGrade < 80) {
        letterGrade = 'C';
    } else if (averageGrade >= 60 && averageGrade < 70) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    
    console.log(`Student Name: ${studentName}`);
    console.log(`Quiz 1 Grade: ${quiz1}`);
    console.log(`Quiz 2 Grade: ${quiz2}`);
    console.log(`Quiz 3 Grade: ${quiz3}`);
    console.log(`Average Score: ${averageGrade.toFixed(2)}`);
    console.log(`${studentName}'s letter grade is: ${letterGrade}`);

    
    const resultBox = document.getElementById('resultBox');
    resultBox.innerHTML = `${studentName}'s letter grade is: ${letterGrade}`;
    resultBox.style.display = 'block';
}
