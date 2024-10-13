//Midterm Activity
const students = []; 

function addStudent() {
    const singleStudent = {
        name: nameInput.value,
        address: addressInput.value,
        course: courseInput.value,
        grade: gradeInput.value   
    };

    
    if (nameInput.value === "" || addressInput.value === "" || courseInput.value === "" || gradeInput.value === "") {
        alert("Please fill out all fields before adding a student.");
    } else {
        students.push(singleStudent); 
        displayAllStudents();
        clearForm(); 
    }
}

function displayAllStudents() {
    let output = "";
    students.forEach((student) => {
        output += `<div>
            <span>${student.name}</span> /
            <span>${student.address}</span> /
            <span>${student.course}</span> /
            <span>${student.grade}</span>
        </div>`;
    });
    studentsContainer.innerHTML = output;
}

function clearForm() {
    nameInput.value = "";
    addressInput.value = "";
    courseInput.value = "";
    gradeInput.value = "";
}

const addButton = document.getElementById('addStudent');
const studentsContainer = document.getElementById('students-container');
const nameInput = document.getElementById('name');
const addressInput = document.getElementById('address');
const courseInput = document.getElementById('course');
const gradeInput = document.getElementById('grade');

addButton.addEventListener('click', addStudent);


displayAllStudents();


// const students=[
//     {
//         name:"Sam",
//         address:"Calamba",
//         course:"BSIT",
//         grade:99,
//         subjects:["CCIT102","ITELEC1,FAITH101"]
//     },
//     {
//         name:"Jenny",
//         address:"Tanauan",
//         course:"BSIT",
//         grade:98,
//         subjects:["CCIT102","ITELEC1","FAITH101","SOFTENG"]
//     },
//     {
//         name:"John",
//         address:"Tanauan",
//         course:"BSCS",
//         grade:100,
//         subjects:["CCIT102","ITELEC1","FAITH101","SOFTENG"]
//     },
//     {
//         name:"Marites",
//         address:"Sto Tomas",
//         course:"BSEMC",
//         grade:95,
//         subjects:["CCIT102","ITELEC1","FAITH101","SOFTENG"]
//     }
// ]
// console.log("-------Strat Map-------");
// var average1;
// var sum1=0;
// var count1=0;
// students.filter((student,index)=>student.address=="Tanauan")
// .map((student,index)=>{
//     sum+=parseInt(students.grade);
//     console.log("Sum",sum1);
//     count1++;
// })
// average1=sum1/count1;
// console.log("Average",average1);

// console.log("-------Start For-------");
// var average;
// var sum=0;
// var count=0;
// for(var i=0;i<students.length;i++){
//     if(students[i].address=="Tanauan"){
//         sum+=parseInt(students[i].grade);
//         console.log("Sum",sum);
//         count++;
//     }
   
// }
// average=sum/count;
// console.log("Average",average);
