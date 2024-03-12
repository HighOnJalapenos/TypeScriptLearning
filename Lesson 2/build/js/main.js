"use strict";
// type One = string;
// type Two = string | number;
// type Three = "hello";
// interface TransactionObj {
//   [index: string]: number;
// }
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions["Pizza"]);
let prop = "Pizza";
// console.log(todayTransactions[prop]);
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todayTransactions));
const student = {
    name: "DJ",
    GPA: 7.2,
    classes: [100, 200],
};
// console.log(student.test); //undefined but not error because index signature
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => console.log(student[key]));
const logStudentKet = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKet(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
