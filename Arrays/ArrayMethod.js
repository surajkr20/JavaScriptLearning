
// 1. push - add to end.
// 2. pop - delete from end & returns it
// 3. unshift - add to start .
// 4. Shift - delete from start & returns it.

// Ques. arr1 = ["january","july","march","august"];
// output - ["july","june","march","august"];

let arr1 = ["january","july","march","august"];

// 5. indexOf method - returns index of something.

let primary = ["red","yellow","blue"];

console.log(primary.indexOf("yellow")); // 1
console.log(primary.indexOf("green"));  // -1
console.log(primary.indexOf("yellow")); // 1

// 6. Concat method - merge two arrays. (jis array ko phle likha jayega us array ke elements phle aayenge)

let newArr = arr1.concat(primary);
console.log(newArr);

// 7. Reverse - Reverse an array.

console.log(newArr.reverse());
console.log(arr1.reverse());

// 8. Slice - copies a portion of an array.

let colors = ["red","yellow","blue","orange","pink","White"];

console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));

// 9. Splice - removes / replaces / add elements in place. (splice changes in original array but slice is not any changes in original array)
// ex - splice(start,deleteCount,item0..itemN);

console.log(colors.splice(4)); // ["pink","white"]
console.log(colors.splice(0,1)); // ["red"]
console.log(colors); // ["yellow","blue","orange"]
console.log(colors.splice(0,1,"black","grey")); // ["yellow"]
console.log(colors); // ["black","grey","blue","orange"]

// 10. Sort - sorts an array. (sort by according to first letters)
// numbers sort = first convert to digit into string then sort.

let sortArr = [23,80,100,39,67];
console.log(sortArr.sort()); // [100,23,39,67,80] sort according to first digit.

let days = ["monday","sunday","wednesday","tuesday"];
console.log(days.sort());

// >> Array References.

let arr = ['a','b','c'];
let arrCopy = arr;
console.log(arr.pop());
console.log(arr);
console.log(arrCopy.push("d"));
console.log(arrCopy,arr);
// console.log(arrCopy);

// Constant Array -- const array elements are changable but const variable are not changable. but arrays not overwrite (ex - channel = me dobara se value nhi dal skte h)

const channel = ["starGold","Amazon","zeetv"];
channel[1] = "Netflix";
console.log(channel);
