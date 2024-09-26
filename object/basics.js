// two types of function - 
// 1. factory function
// 2. constructor funtion
let a = {}; // its null object

// creating objects in javascript

// let student = {
//     name : "Abhinav",
//     course : "bachlor's computer application",
//     town : "patna",
//     address : function(){
//         console.log("bihar,patna,804453");
//     },

// };

// factory function - for object creation.

// function createStudent(){
//     return student = {
//         name : "Abhinav",
//         course : "bachlor's computer application",
//         town : "patna",
//         address : function(){
//             console.log("bihar,patna,804453");
//         },
//     };
// }

// let storeStudent = createStudent();

// console.log(storeStudent);


// input paramets of factory function
function StudentInfo(name,course,department){
    return Student = {
        name,
        course,
        department,
    }
}

let result = StudentInfo("Abhinav","software engineering","computer science");

console.log(result)