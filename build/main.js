// task 1
function calculateFactorial(numeric) {
    let factorial = 1;
    for (let i = 1; i <= numeric; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(calculateFactorial(5));
//task 2
function multiply(...numerics) {
    let quantityOfArguments = numerics.length;
    if (quantityOfArguments === 0)
        return 0;
    let product = 1;
    for (let i = 1; i < quantityOfArguments; i++) {
        product *= numerics[i];
    }
    return product;
}
console.log(multiply(1, 2, 5, 10));
console.log(multiply());
//task 3
function reverseString(text) {
    let newText;
    return (newText = text
        .split("")
        .reverse()
        .join(""));
}
console.log(reverseString("test"));
const admins = [
    {
        name: "Tom",
        email: "tom@ukr.net",
        password: "123",
        type: "mainAdmin"
    },
    {
        name: "Spike",
        email: "spike@ukr.net",
        password: "456"
    }
];
console.log(admins);
//task 5
class Car {
    constructor(mileage, fuel) {
        this._mileage = mileage;
        this._fuel = fuel;
    }
}
class Audi extends Car {
    constructor(mileage, fuel) {
        super(mileage, fuel);
    }
    drive(mileage) {
        this._mileage += mileage;
        //10 liters per 100 miles;
        this._fuel = this._fuel - mileage / 10;
        if (this._fuel === 0)
            console.log("Go to the gas station!");
    }
    refuel(fuel) {
        this._fuel += fuel;
    }
    get mileage() {
        return this._mileage;
    }
    get fuel() {
        return this._fuel;
    }
}
let myCar = new Audi(10, 10);
console.log(myCar.mileage);
console.log(myCar.fuel);
myCar.drive(5);
console.log(myCar.mileage);
console.log(myCar.fuel);
