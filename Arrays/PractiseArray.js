
// Arrays = Linear collection of things. Arrays are mutable

// Arrays Methods --

// 1. push - add to end.

// let arr = ['car','audi','maruthi','tayota','xuv'];
// let newarr = arr.push("farrari");
// console.log(newarr);

// Ques. For the given start state of an array, change it to final using splice.

// start : ["january", "july","march","august"]
// final : ["july", "june","march","august"]

// solution.

let startArr = ["january","july","march","august"];
let finalArr = startArr.splice(0,2,"july",'june');
console.log(startArr);

// Return the index of the "javaScript" from the given array, if it was reversed.

let lang = ["c","c++","html","javascript","python","java","c#","sql"];

let newlang  = lang.reverse();
console.log(newlang);
console.log(newlang.indexOf("javascript"));