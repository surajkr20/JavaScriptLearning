// difference between let,const and var

// 1. let & const is a new feature of ES6 and var is older version of ES5

// 2. var is a function scoped, it's accessable own function parent everywhere.

// function functionScoped(){
//     for(var i=1; i<12; i++){
//         console.log(i);
//     } // loop print 1 to 11
//     console.log(i); // it's print only 12.
// }

// 3. let and const is braces scoped. means accessible only braces

// function braceScoped(){
//     for(let i=1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i); // error line
// }

// braceScoped();

// copy reference value. using spread operator

// let a = [1,2,3,4,5];
// let b = [...a];  // (...) it's spread operators

// console.log(b) // output - [ 1, 2, 3, 4, 5 ]
// b.pop();
// console.log(b) // output - [ 1, 2, 3, 4 ]

// copy object values using spread operator

// let obj = {
//     name : "Abhinav",
//     course : "software engineering"
// }

// let copyobj = {...obj};

// console.log(copyobj);
// console.log(obj);

// forEach loop - only for arrays, 

// var arr = [1,2,3,4,5,6,7];

// arr.forEach(function(val){
//     console.log(val+4);
// }) // output - 5 6 7 8 9 10 11

// // its not any changing original array value
// console.log(arr); //output - 1 2 3 4 5 6 7

// for in loop - it's only for obj
 
// var obj = {
//     name : "Abhinav bhardwaj",
//     course : "computer science",
//     skills : "javascript python c++ dsa react.js tailwind css",
//     city : "patna"
// }

// // accessing values using forin loop

// for(var key in obj){
//     console.log(obj[key])
// }

// do while loop - it's print value atleast one times, as your requirments 

// let a = 29;

// do{
//     console.log(a);
//     a++;
// } while(a<31)

// callback function
// setTimeout(function (){
//     console.log("example of callback fun")
// },3000);

// First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// function print(a){ // a is treated func like value
//     a();
// }

// print(function(){console.log("hello")}) // sending fun as an arguments in another fun

// why we make negative indexes arrays in js
var arr = [1,2,3,4];
delete arr[2]; // index value is deleted
console.log(arr)
console.log(typeof(arr))    // output - object
console.log(Array.isArray(arr)) // output - true
console.log(Array.isArray(arr1)) 

var arr1 = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}

// delete object first value
delete arr1[1];

console.log(arr1)
console.log(typeof(arr1));