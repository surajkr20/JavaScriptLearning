// classes - class is a program-code template for creating objects.those objects will have some state (variable) & some behaviour (functions) inside it.

class Toyotocar{
    constructor(brand, mileage){
        console.log('creating new object');
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log('start')
    }

    stop(){
        console.log("stop")
    }

    setBrand(brand){
        // this.brand = brand
    }
}

// for creating fortuner car
let fortuner = new Toyotocar("lexis",10);
fortuner.setBrand("lexis", mileage);


console.log(fortuner.start())
console.log(fortuner.stop())