// Ques. you are creating a website for your college. create a class user with 2 properties name and email. it also has a method called viewdata that allows user to view website data.
        // And then create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.


let DATA = "secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data", DATA);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name,email);
    }
    editData(){
        DATA = "some new value";
    }
}

let student1 = new User("suraj","suraj71308kumar@gmail.com");

let student2 = new User("Abhinav","Abhinav71308kumar@gmail.com");

let techer = new User("Abhinav-suraj","as@gmail.com");

let Admin1 = new User("admin","admin@college.com");

console.log(student1.name)
console.log(student2.email);

console.log(techer);

console.log(Admin1.email)
console.log(Admin1.editData());


