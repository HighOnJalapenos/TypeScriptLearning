"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ 1: "a", 2: "b" }));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { arg, is: false };
    if (typeof arg === "object" && !Object.keys(arg).length)
        return { arg, is: false };
    return {
        arg,
        is: !!arg,
    };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 23 }));
// console.log(processUser({ id: "twenty" }));
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const users = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        email: "johndoe@example.com",
        birthDate: "1973-01-22",
        login: {
            uuid: "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
            username: "johndoe",
            password: "jsonplaceholder.org",
            md5: "c1328472c5794a25723600f71c1b4586",
            sha1: "35544a31cc19bd6520af116554873167117f4d94",
            registered: "2023-01-10T10:03:20.022Z",
        },
        address: {
            street: "123 Main Street",
            suite: "Apt. 4",
            city: "Anytown",
            zipcode: "12345-6789",
            geo: { lat: "42.1234", lng: "-71.2345" },
        },
        phone: "(555) 555-1234",
        website: "www.johndoe.com",
        company: {
            name: "ABC Company",
            catchPhrase: "Innovative solutions for all your needs",
            bs: "Marketing",
        },
    },
    {
        id: 2,
        firstname: "Jane",
        lastname: "Smith",
        email: "janesmith@example.com",
        birthDate: "1983-02-22",
        login: {
            uuid: "2a0eed02-9430-4d68-901f-c0d4c1c3bf22",
            username: "janesmith",
            password: "jsonplaceholder.org",
            md5: "c1328472c5794a25723600f71c1b4586",
            sha1: "35544a31cc19bd6520af116554873167117f4d94",
            registered: "2022-06-10T12:45:20.022Z",
        },
        address: {
            street: "456 Oak Street",
            suite: "Suite 200",
            city: "Anytown",
            zipcode: "12345-6789",
            geo: { lat: "42.3456", lng: "-71.6789" },
        },
        phone: "(555) 555-5678",
        website: "www.janesmith.com",
        company: {
            name: "XYZ Corporation",
            catchPhrase: "Leading the way in innovation",
            bs: "Finance",
        },
    },
    {
        id: 3,
        firstname: "Bob",
        lastname: "Johnson",
        email: "bobjohnson@example.com",
        birthDate: "1974-11-12",
        login: {
            uuid: "3a0eed11-9430-4d68-901f-c0d4c1c3bf12",
            username: "bobjohnson",
            password: "jsonplaceholder.org",
            md5: "c1328472c5794a25723600f71c1b4586",
            sha1: "35544a31cc19bd6520af116554873167117f4d94",
            registered: "2022-06-10T12:45:20.022Z",
        },
        address: {
            street: "789 Elm Street",
            suite: "Apt. 100",
            city: "Anytown",
            zipcode: "12345-6789",
            geo: { lat: "42.5678", lng: "-71.1234" },
        },
        phone: "(555) 555-9012",
        website: "www.bobjohnson.com",
        company: {
            name: "Acme Corporation",
            catchPhrase: "Your trusted partner",
            bs: "Manufacturing",
        },
    },
    {
        id: 4,
        firstname: "Emily",
        lastname: "Davis",
        email: "emilydavis@example.com",
        birthDate: "1974-11-30",
        login: {
            uuid: "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
            username: "emilydavis",
            password: "jsonplaceholder.org",
            md5: "c1328472c5794a25723600f71c1b4586",
            sha1: "35544a31cc19bd6520af116554873167117f4d94",
            registered: "2022-07-10T11:21:20.033Z",
        },
        address: {
            street: "321 Maple Street",
            suite: "Apt. 50",
            city: "Anytown",
            zipcode: "12345-6789",
            geo: { lat: "42.9012", lng: "-71.5678" },
        },
        phone: "(555) 555-3456",
        website: "www.emilydavis.com",
        company: {
            name: "GHI Corporation",
            catchPhrase: "Your success is our priority",
            bs: "Consulting",
        },
    },
    {
        id: 5,
        firstname: "William",
        lastname: "Brown",
        email: "williambrown@example.com",
        birthDate: "1974-11-22",
        login: {
            uuid: "5a0eed11-9430-4d68-901f-c0d4c1c3bf22",
            username: "williambrown",
            password: "jsonplaceholder.org",
            md5: "c1328472c5794a25723600f71c1b4586",
            sha1: "35544a31cc19bd6520af116554873167117f4d94",
            registered: "2021-02-10T10:38:03.030Z",
        },
        address: {
            street: "567 Pine Street",
            suite: "Apt. 2",
            city: "Anytown",
            zipcode: "12345-6789",
            geo: { lat: "42.6789", lng: "-71.9012" },
        },
        phone: "(555) 555-6789",
        website: "www.williambrown.com",
        company: {
            name: "JKL Industries",
            catchPhrase: "Quality products for a better world",
            bs: "Engineering",
        },
    },
    {
        id: 6,
        firstname: "Laura",
        lastname: "Wilson",
        email: "laurawilson@example.com",
        birthDate: "1984-12-14",
        login: {
            uuid: "6a0eed12-9430-4d68-901f-c0d4c1c3bf14",
            username: "laurawilson",
            password: "jsonplaceholder.org",
            md5: "c1328472c5794a25723600f71c1b4586",
            sha1: "35544a31cc19bd6520af116554873167117f4d94",
            registered: "2022-01-10T09:03:03.030Z",
        },
        address: {
            street: "789 Maple Street",
            suite: "Apt. 10",
            city: "Anytown",
            zipcode: "12345-6789",
            geo: { lat: "42.3456", lng: "-71.2345" },
        },
        phone: "(555) 555-1234",
        website: "www.laurawilson.com",
        company: {
            name: "LMN Corporation",
            catchPhrase: "Innovative solutions for a better future",
            bs: "Technology",
        },
    },
    {
        id: 7,
        firstname: "Michael",
        lastname: "Garcia",
        email: "michaelgarcia@example.com",
        birthDate: "1984-12-14",
        login: {
            uuid: "7a0eed12-9430-4d68-901f-c0d4c1c3bf14",
            username: "michaelgarcia",
            password: "jsonplaceholder.org",
            md5: "c1328472c5794a25723600f71c1b4586",
            sha1: "35544a31cc19bd6520af116554873167117f4d94",
            registered: "2023-01-10T09:03:03.030Z",
        },
        address: {
            street: "234 Elm Street",
            suite: "Apt. 20",
            city: "Anytown",
            zipcode: "12345-6789",
            geo: { lat: "42.5678", lng: "-71.6789" },
        },
        phone: "(555) 555-9012",
        website: "www.michaelgarcia.com",
        company: {
            name: "NOP Enterprises",
            catchPhrase: "Your partner in success",
            bs: "Consulting",
        },
    },
    {
        id: 8,
        firstname: "Stephanie",
        lastname: "Lee",
        email: "stephanielee@example.com",
        birthDate: "1983-02-13",
        login: {
            uuid: "8a0eed02-9430-4d68-901f-c0d4c1c3bf13",
            username: "stephanielee",
            password: "jsonplaceholder.org",
            md5: "c1328472c5794a25723600f71c1b4586",
            sha1: "35544a31cc19bd6520af116554873167117f4d94",
            registered: "2023-01-10T09:03:34.330Z",
        },
        address: {
            street: "345 Oak Street",
            suite: "Suite 500",
            city: "Anytown",
            zipcode: "12345-6789",
            geo: { lat: "42.9012", lng: "-71.1234" },
        },
        phone: "(555) 555-3456",
        website: "www.stephanielee.com",
        company: {
            name: "PQR Industries",
            catchPhrase: "Innovative solutions for your needs",
            bs: "Manufacturing",
        },
    },
];
console.log(getUserProperty(users, "firstname"));
console.log(getUserProperty(users, "lastname"));
console.log(getUserProperty(users, "company"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("DJ");
console.log(store.state);
store.state = "Digvijay";
console.log(store.state);
// store.state = 23; error because the generic type is now string
const store2 = new StateObject([15]);
console.log(store2.state);
store2.state = ["Digvijay", 27, true];
console.log(store2.state);
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "final project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 12 }));
//Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
//thius now requires all the property of the Assignment interface
console.log(recordAssignment(Object.assign(Object.assign({}, assign1), { verified: true })));
const assignVerified = assign1;
// assignVerified.grade = 88;
//Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
};
const finalGrades = {
    Sara: "B",
    Kelly: "F",
};
const score = {
    studentId: "ABC123",
    grade: 23,
};
const preview = {
    studentId: "ABC123",
    title: "Mr",
    //   grade: 34, error sice we omitted grade and verified
};
//Return type
// type NewAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
