
// Methods = Actions that can be performed on objects.

// ex = stringName.method();

let name = "  suraj";
let name1 = "Abhinav";

// 1. trim Method-- Remove white spaces, remove only left and right side not middle side.

console.log(name);
console.log(name.trim());

// Strings are immutable in js
// i. No changes can be made to strings
// ii. Whenever we do try to make a change, a new string is created and old one remains same.

// 2. toUpperCase()--

console.log(name.toUpperCase());

// 3. toLowerCase()--

console.log(name1.toLowerCase());

// String methods with Arguments --
// >> Argument is a some value that we pass to the method.
// ex = stringName.method(arg);

// 4. indexOf method  -- Returns the first index of occurrence of some value in string. Or gives -1 if not found.

let str = "ilovecoding";
console.log(str.indexOf("love")); // 1 -- exist krega to first index return krega

console.log(str.indexOf('z')); // agar exist nhi krega to -1 return krega

// 5. Method chaining -- Using one method after another. Order of execution will be left to right.
// ex = str.toUpperCase().trim();

let newName = name.trim().toUpperCase();
console.log(newName);

// 6. Slice = Returns a part of the original string as a new String.
// str.slice(start index, end index);

console.log(str.slice(5)); // coding
console.log(str.slice(1,4)); // lov
console.log(str.slice(-2)); // eg (negative value dene pr yah string ke total vlaue se apni value ko substract kr leta h (ex = total length of str is 11 and slice value -2 the substract is 9 then print 9 index of str))

// 7. replace -- Searches a value in the string & returns a new string with the vaue replaced.
// ex = str.method("search value","new value")

console.log(str.replace("love","do"));
console.log(str.replace("o","x")); // ilxvecoding - replace only first occurence

// 8. Repeat method - Returns a string with the number of copies of a string.

console.log(str.repeat(2)); // ilovecodingilovecoding

