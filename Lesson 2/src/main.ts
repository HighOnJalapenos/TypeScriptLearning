// type One = string;
// type Two = string | number;
// type Three = "hello";

// let a: One = "World";
// let b = a as Two;
// let c = a as Three;

// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") return a + b;
//   return "" + a + b;
// };

// let myVal: string = addOrConcat(2, 2, "concat") as string;
// let nextVal: number = addOrConcat(2, 2, "concat") as number;
// // The type assertion as number doesn't perform any runtime conversion or type check. It's merely a way to tell TypeScript to treat the value as a number. Therefore, if the actual return value is a string, it will still be treated as a number variable, but its runtime type will remain as a string, leading to unexpected behavior when using it as a number.

// // The DOM
// const img = document.querySelector("img")!;
// // '!' - non null assertion operator can also use 'as'
// const myImg = document.getElementById("img") as HTMLImageElement;

// // img.src ('img' is possibly 'null'.)
// img?.src;
// // myImg.src ('myImg' is possibly 'null'.)
// myImg?.src;

// class Coder {
//   secondLang!: string;

//   constructor(
//     public name: string,
//     readonly music: string,
//     private age: number,
//     protected lang: string = "TypeScript"
//   ) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }

//   public getAge() {
//     return `Hello, I am ${this.age}`;
//   }
// }

// const Dave = new Coder("DJ", "Rap", 28, "JS");
// console.log(Dave.getAge());
// // console.log(Dave.age);
// // console.log(Dave.lang);
// // it will show error while compiling but it will still compile and show on console

// class Webdev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age);
//     this.computer = computer;
//   }

//   public getLang() {
//     return `I write ${this.lang}`;
//   }
// }

// const DJ = new Webdev("Mac", "DJ", "LoFi", 23);
// console.log(DJ.getLang());
// // console.log(DJ.age);
// // console.log(DJ.lang);

// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class Guitarist implements Musician {
//   name: string;
//   instrument: string;

//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }

//   play(action: string) {
//     return `${this.name} ${action} the ${this.instrument}`;
//   }
// }

// const Page = new Guitarist("Jimmy", "guitar");
// console.log(Page.play("strums"));

// class Peeps {
//   static count: number = 0;
//   public id: number;

//   static getCount(): number {
//     return Peeps.count;
//   }

//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count;
//   }
// }

// const John = new Peeps("John");
// const Steve = new Peeps("Steve");
// const Amy = new Peeps("Amy");
// console.log(Peeps.count);
// console.log(Amy.id);

// class Bands {
//   private dataState: string[];

//   constructor() {
//     this.dataState = [];
//   }

//   public get data(): string[] {
//     return this.dataState;
//   }

//   public set data(value: string[]) {
//     if (
//       Array.isArray(value) &&
//       value.every((elem) => typeof elem === "string")
//     ) {
//       this.dataState = value;
//       return;
//     } else throw new Error("Param is not an array of strings");
//   }
// }

// const MyBands = new Bands();
// MyBands.data = ["Neil Young", "Led Zep"];
// console.log(MyBands.data);
// MyBands.data = [...MyBands.data, "ZZ Top"];
// console.log(MyBands.data);
// // MyBands.data = ["Van Halen", 5150];

//Index Signatures

interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//   [index: string]: number;
// }

const todayTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todayTransactions.Pizza);
console.log(todayTransactions["Pizza"]);

let prop: string = "Pizza";
// console.log(todayTransactions[prop]);

const todayNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todayNet(todayTransactions));

//////////////////////////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined; //index signature
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "DJ",
  GPA: 7.2,
  classes: [100, 200],
};

// console.log(student.test); //undefined but not error because index signature

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) =>
  console.log(student[key as keyof typeof student])
);

const logStudentKet = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKet(student, "name");

////////////////////////////////////////////////////////

interface Income {
  [key: string]: number;
}

type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};
