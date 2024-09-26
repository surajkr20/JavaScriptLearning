// inheritance is passing down properties & methods form parent class to child class.

// super keyword - is used to call the constructor of its parent class to access the parent's properties and methods.

// class parent {
//     hello(){
//         console.log("hello india");
//     }
// }

// // inherit(access) all vlaues of parent in child class
// class child extends parent{};

// // inherit value access in object
// let obj = new child();

// console.log(obj.hello());


class person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log('sleep')
    }

    work(){
        console.log("do nothing");
    }
}

class engineer extends person{
    constructor(branch){
        super(); // to invoke parent class consturctor
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("solve the problem and improve your logics")
        super.sleep();
    }
}

let obj = new engineer("software engineering");

// console.log(obj.work())
// console.log(obj.eat())
// console.log(obj.sleep())