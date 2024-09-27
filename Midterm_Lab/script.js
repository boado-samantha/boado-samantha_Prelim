const students=[
    {
        "name":"Sam",
        "course":"BSIT",
        "grade":90,
        "subjects":["CCIT102","ITELEC1"],

    },
    {
        "name":"Nicole",
        "course":"BSCS",
        "grade":95,
        "subjects":["CCIT102","ITELEC1","ENGLISH"]
    }
]
const singleStudent={
    "name":"Samantha",
    "course":"BSEMC",
    "grade":80,
}
console.log(singleStudent);
students.push(singleStudent);

console.log(students);

const addButton1 = document.getElementById('addButton');
const studentContainer1 = document.getElementById('studentContainer');

addButton1.addEventListener('click',function(){
var output="";

students.map(student =>{
    output+=`<h1>${student.name}</h1>`;
    output+=`<h2>${student.course}</h2>`;
    output+=`<h2>${student.grade}</h2>`;
    output+="<br>";
});

console.log(output);

studentContainer1.innerHTML=output;
});
// output+="<h1>";
// output+=student.name;
// output+="</h1">;
// output+=""

// console.log(students[0].subjects.push("English"));
// console.log(students);
// console.log(students[1].subjects[2]);

//object
// const student={
//     "name":"Sam",
//     "course":"BSIT",
//     "grade":90,
//     "subjects":["CCIT102","ITELEC1"]
// }
// // var keys="course";
// console.log(student["subjects"][1]);
// console.log(student.subjects[1]);


//Arrays
// const numbers=[5,7,1,6,8,9];
// console.log(number);


// const numbers1=[5,7,1,6,8,9];
// const sortednumber = numbers.sort().reverse();
// console.log(sortednumber);
// const sortednumber1 = numbers.reverse().sort();
// console.log(sortednumber);




//splice
// numbers.splice(2,1);
// console.log(numbers);



// slice
// const newnumbers = numbers.slice(1,-1);
// console.log(newnumbers);



// Que
// numbers.unshift(2);
// console.log(numbers);

// numbers.unshift(6);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);
// console.log(numbers[0]);

// numbers.push(10);
// console.log(numbers);

// numbers.push(9);
// console.log(numbers);

// numbers.pop(9);
// console.log(numbers);


