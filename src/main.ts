// task 1
function calculateFactorial(numeric: number): number {
  let factorial: number = 1;

  for (let i = 1; i <= numeric; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(calculateFactorial(5));

//task 2
function multiply(...numerics: number[]): number {
  let quantityOfArguments: number = numerics.length;

  if (quantityOfArguments === 0) return 0;

  let product: number = 1;

  for (let i = 1; i < quantityOfArguments; i++) {
    product *= numerics[i];
  }
  return product;
}

console.log(multiply(1, 2, 5, 10));
console.log(multiply());

//task 3
function reverseString(text: string): string {
  let newText: string;
  return (newText = text
    .split("")
    .reverse()
    .join(""));
}

console.log(reverseString("test"));

//task 4
interface Admin {
  name: string;
  email: string;
  password: string;
  type?: string;
}

const admins: Admin[] = [
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
abstract class Car {
  protected _mileage: number;
  protected _fuel: number;

  constructor(mileage: number, fuel: number) {
    this._mileage = mileage;
    this._fuel = fuel;
  }

  public abstract drive(mileage: number): void;
  public abstract refuel(fuel: number): void;
}

class Audi extends Car {
  constructor(mileage: number, fuel: number) {
    super(mileage, fuel);
  }

  public drive(mileage: number): void {
    this._mileage += mileage;
    //10 liters per 100 miles;
    this._fuel = this._fuel - mileage / 10;
    if (this._fuel === 0) console.log("Go to the gas station!");
  }

  public refuel(fuel: number): void {
    this._fuel += fuel;
  }

  public get mileage() {
    return this._mileage;
  }

  public get fuel() {
    return this._fuel;
  }
}

let myCar = new Audi(10, 10);

console.log(myCar.mileage);
console.log(myCar.fuel);

myCar.drive(5);
console.log(myCar.mileage);
console.log(myCar.fuel);
