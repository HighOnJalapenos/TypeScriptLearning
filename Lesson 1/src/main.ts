// let myName = "Digvijay"; //implicitly decalred
// let myLastName: string = "Singh"; //explicitly declared
// let myNewName: string; //Declared but not assigned
// myNewName = "DJ"; //Assigned the value to string variable
// myNewName = "Digvijay"; //variable can be assigned different value of same types

// myName = 42; //type error as myName is of string type

// let meaningOfLife: number;
// let isLoading: boolean;

// meaningOfLife = 42;
// isLoading = true;
// isLoading = "true" //type error

// let album: any; //use for any type like javascript
// album = "Red";
// console.log(album);
// album = 1984;
// console.log(album);

// ------------------------------Functions--------------------------------

// const sum = (a: number, b: string) => {
//   return a + b;
// };

// let score: string | number; //union type, it can be string or number. not limited to 2 types
// score = 350;
// score = "hundred";

// let re: RegExp = /\w+/g;

//----------------------------------Arrays------------------------------------

// let stringArr = ["one", "two", "three"];
// let numArr = [1, 2, "three"];
// let mixArr = ["YES", true, 1];

// stringArr[0] = 42; //error number not assignable to string
// stringArr[0] = "zero";
// stringArr.push("four");

// numArr[0] = "One";
// numArr.unshift(5); //order of the datatype does not matter in an array
// numArr.unshift(true); //type error as boolean is not implicity referred by ts in numArr

// stringArr = numArr; //error as stringArr only accepts string while numArr has both string and number
// numArr = stringArr; //this works sin e numArr accepts string and number

// let test = [];
// test.push(true);
// test.push("any");

// let bands: string[] = [];
// bands.push("The Strokes");

// tuple (for creating a Data Structure that keeps the position as well as type and size)

// let myTuple: [string, number, boolean] = ["DJ", 1, false];
// let mixed = ["DJ", 1, false];

// mixed = myTuple;
// myTuple = mixed;

// myTuple[3] = 42; //error as the 4th position is not declared
// myTuple[2] = "yes"; //error as the 3rd element has to be boolean

//-----------------------------------Objects-------------------------------------

// let myObj: object;
// myObj = [];
// console.log(typeof myObj);

// const exampleObj = {
//   prop1: "DJ",
//   prop2: true,
// }; //using inference instead of explicitly mentioning data types of keys

// exampleObj.prop2 = 42; //error as the prop2 is locked in to boolean data type

// type Guitarist = {
//   name: string;
//   active: boolean;
//   albums: (string | number)[];
//   song?: (string | number)[]; //to create optional properties
// };

// let evh: Guitarist = {
//   name: "Eddie",
//   active: false,
//   albums: [1984, 5150, "OU812"],
//   song: ["song1", "song2"],
//   //   songs: "Yayaya", //cannot add if not in the type Guitarist
// };

// let jp: Guitarist = {
//   name: "Jimmy",
//   active: true,
//   albums: ["I", "II", "III"],
// };

// jp = evh;

// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello ${guitarist.name}`;
// };

// console.log(greetGuitarist(evh));

// interface Guitarist {
//   name?: string;
//   active: boolean;
//   albums: (string | number)[];
// }

// let evh: Guitarist = {
//   name: "Eddie",
//   active: false,
//   albums: [1984, 5150, "OU812"],
// };

// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello ${guitarist.name?.toUpperCase()}`; //error since function can't be called on undefined so use ? operator
// };

// console.log(greetGuitarist(evh));

//------------------------------------Enums----------------------------------------

//This is not in normal vanilla JS

// enum Grade {
//   U = 1,
//   D,
//   C,
//   B,
//   A,
// }

// console.log(Grade.U);

// This is type aliases cannot be done with Interfaces
// type stringOrNumber = string | number;
// type stringOrNumberArr = (string | number)[];

// type Guitarist = {
//   name: string;
//   active: boolean;
//   albums: stringOrNumberArr;
//   song?: (string | number)[]; //to create optional properties
// };

// type userId = stringOrNumber;

// let user: userId = {
//   name: "User",
// };
// console.log(user);

//Literal Types
// let myName: "Digvijay";
// let userName: "DJ" | "MW" | "KC";
// userName = "DJ";
// userName = "SF"; //error as the type has to be either of the 3 provided

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const logMsg = (message: any): void => {
//   console.log(message);
// };

// return type

// logMsg(add(2, 3));

// let subtract = function (c: number, d: number): number {
//   return c - d;
// };

// type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };

// logMsg(multiply(2, 3));

// //optional parameters (has to be the last in the list of parameters)
// const addAll = function (a: number, b: number, c?: number): number {
//   if (typeof c !== "undefined") return a + b + c;
//   return a + b;
// };

//default value of a parameter
// const sumAll = function (a: number = 12, b: number, c: number = 0): number {
//   return a + b + c;
// };

// logMsg(addAll(1, 2));
// logMsg(sumAll(1, 2));
// logMsg(sumAll(undefined, 10, 1)); //explicitly send undefined to use default value

//default values cannot be achieved with type aliases or interfaces as function signatures

//Rest Parameters
// const total = (...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr);
// };

// const total1 = (a: number, ...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr);
// };

// logMsg(total(5, 0, 0, 0, 1));
// logMsg(total1(5, 0, 0, 0, 1));

//never return type is for error thrown or inifnite functions

// const createError = (errMsg: string): never => {
//   throw new Error(errMsg);
// };

// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };
