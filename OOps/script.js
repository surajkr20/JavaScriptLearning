// object oriented programming

const student = {
    fullname : 'Abhinv-suraj',
    marks : 79.3,
    printmarks : function(){
        console.log("marks is",this.marks);
    }
}

// console.log(student.fullname);
// console.log(student.printmarks());

// example of using prototype

const employee = {
    calctax(){
        console.log("tax rate is 10%");
    },
}

const Abhinv = {
    salary : 50000,
};
const Abhinv2 = {
    salary : 50000,
};
const Abhinv3 = {
    salary : 50000,
};

// js objects have a special property called prototype
// use employee id as prototype

Abhinv.__proto__ = employee;
Abhinv2.__proto__ = employee;
Abhinv3.__proto__ = student;

console.log(student.fullname)


console.log(Abhinv.calctax())