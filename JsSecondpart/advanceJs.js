// Advance js concepts

// higher order functions :-
// Higher Order functions are the functions which accept a function in a parameter or return a function or both.

// function print(a){
//     // a();
//     return a;
// }

// print(function(){console.log("hello")})

// var a = [1,2,3,4,5];
// // forEach method is also higher order function because it's consider a function as a arguments inside it.
// a.forEach(function(val){
//     console.log(val)
// })

// constructor fun :- jb apko ek jaisi property wale bht sare elements bnaane h to us time constructor ka use kiya jata h. 

// function makingBiscuits(width,height,color,taste){
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.taste = taste;
// }

// let bis1 = new makingBiscuits(10,15,"brown","sugary");
// let bis2 = new makingBiscuits();
// let bis3 = new makingBiscuits();

// first class functions - you can store in any variables and treated like a variables, which type of functions is first classs func

// let prod = function hello(a,b){
//     return a*b;
// }

// new keywords using function

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// const Person1 = new Person("suraj",20);

// console.log(Person1)

// new keyword using class

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const Person2 = new Person("Abhinav",21); //store data an object form
// console.log(Person2);

// life - immediately invoked function expression - for creating private variable and instant calling functions. and it's inside data is not accessible of anyone.only you can access these data's


// let ans = (function(){    //expression of immediately invoked function
//     var privateData = 234;

//     return { // creating object
//         getter : function(){
//             console.log(privateData);
//         },
//         setter : function(val){
//             privateData = val;
//         }
//     }

// })()

// console.log(ans.getter());
// console.log(ans.setter(65));
// console.log(ans.getter())

// prototype - 

// var human = {
//     canFly : false,
//     canTalk : true,
//     canWalk : true,
//     haveEmotions : true,
// }

// var AbhinavCompany = {
//     itIcons : true,
//     talentEmployees : true,
//     ghatiyaFeatrues : false,
// }

// // using prototype you can use all values of human in AbhinavCompany

// AbhinavCompany.__proto__ = human;

// console.log(AbhinavCompany.canFly);
// console.log(AbhinavCompany.canTalk);


