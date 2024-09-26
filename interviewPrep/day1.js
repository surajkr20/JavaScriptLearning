// ques.1

// var a = [];
// var b = [];

// console.log(a==b); //output - false, because a and b is not array it's two diffrent objects. and for objects the equality operator compare the references.

// var x = [];
// var y = x;
// console.log(x===y); // output- true, because value is pass as reference

// let a = [1,8,9,10,22,57,27];
// let b = [...a]; // using spread operator you can copy all values in another variable and store it

// let x = [1,8,9,10,22,57,27];
// let y = [3,4,5];

// let copy = [...x, ...y];
// console.log(copy);

// // ques.2
// let a = [1,8,9,10,22,57,27];
// function array(b,...a){ // spread operator all the values store it
//     console.log(a)
// }

// array(8,9,10,11,8,9,0,4) // output - [9,10,11] because 8 is consider in b and all the value is consider in a.

// Ques. 3
// let data = {name : "suraj"};
// console.log(delete data.name); //output - true
// console.log(data); // {}

// let data = {name : "suraj"};
// console.log(delete data); // false

let arr = [1,2,3];
console.log(delete arr);