
// Sync in js
// -->> Synchronous means the code runs in a particular sequence of instructions given in the program. each instruction waits for the previous instruction to complete its execution

// Asynchrous in js
// -->> Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchrous code executiion allows to execute next instructions immediately and does'nt block the flow.

// Async programming always start begins
// setTimeout, setInterval, promises, fetch, axios etc.

// console.log('one');
// console.log('two');

// setTimeout(() => {
//     console.log("hello");
// }, 4000); // timeout;

// console.log("three")
// console.log("four")

// callBacks functions -- A callback is a function passed as an argument to another function

// Async callbacks--
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

// calculator (1,2, sum); or

calculator (1,2, (a,b) => {
    console.log(a+b); // 3
})

// Callback Hell -- Nested callback stacked below one another forming a pyramid structure(pyramid of Doom)
// this style of programming becomes difficult to understand & manage.


