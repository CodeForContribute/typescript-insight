const express = require('express');
const app = express();
const port = 3004;

const a: number = 1;
console.log(a);
// basic types in typescript
// number,
// string
// boolean
// null
// undefined
function greet(name: string) {
    console.log(`Hare ${name}`);
}

greet('krishna');
greet('ram');

function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(2, 4));

function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isLegal(24));
console.log(isLegal(3));

function delayCall(fn: () => void) {
    setTimeout(fn, 1000);
}
// delayCall(function () {
//     console.log("hi there");
// })

// try different target options for compilation
const greet2 = (name: string) => `Hello, ${name}!`;
console.log(greet2("krishna"));
console.log(greet2("ram"));

const greet3 = (name: any) => `Hello, ${name}!`;

// interfaces
const user = {
    firstName: "hare",
    lastName: "krishna",
    email: "radheradhe@gmail.com",
    age: 2
}

// to assign a type to the user object, we can use interfaces
interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function isLeageV2(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

//console.log(isLeageV2(user));

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// const emp: Employee = new Employee("raushan", 29);
// console.log(emp.name);
// console.log(emp.age);
// console.log(emp.greet("hello, "));

//types like interfaces , it aggregates data together
type User2 = {
    firstName: string;
    lastName: string;
    age: number;
}

type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}

printId(101);
printId("123");

// intersection - if we want to create a  type 
// every prop of multiple types/interfaces

type Employee = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager;
const teamLead: TeamLead = {
    name: "Raushan",
    startDate: new Date(),
    department: "Software developer"
}
console.log(teamLead.department);
console.log(teamLead.name);
console.log(teamLead.startDate);


// arrays in TS
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));

// given a list of users, filter out the users
// that are legal (> 18)
interface User3 {
    firstName: string;
    lastName: string;
    age: number;
}

function filteredLegalUsers(users: User3[]) {
    return users.filter(user => user.age > 18);
}
const filteredUsers: User3[] = filteredLegalUsers(
    [{
        firstName: "raushan",
        lastName: "kumar",
        age: 123
    }, {

        firstName: "avinash",
        lastName: "kumar",
        age: 123
    }]
);

filteredUsers.forEach(user => console.log(user.firstName + " " + user.lastName + " " + user.age));

// enums - to define a set of named constants

// enum Direction {
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }
// function doSomething(keyPressed:Direction){
//     // do something
// }
//doSomething(Direction.UP);
//console.log(Direction.UP);
// change default values for enums

// enum Direction{
//     UP = 1,
//     DOWN,
//     LEFT,
//     RIGHT
// }
// function doSomething(keyPressed: Direction){
//     // do something
// }
// doSomething(Direction.DOWN);
// can also be strings
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

function doSomething(keyPressed: Direction) {
    // do something
}
doSomething(Direction.Down);

// common use case in express
enum ResponseStatus {
    SUCCESS = 200,
    NOTFOUND = 404,
    ERROR = 500
}

// Pick allows u to create a new type by selecting  a set of properties(keys)
// from an existing type

interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}
// for a profile display, pnly pick 'name' and 'email'

type UserProfile = Pick<User, 'name' | 'email'>;
const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}

displayUserProfile({
    name: "raushan",
    email: "ping.raushan@gmail.com"
})

// Partial - makes all propeties of a type optional
// creating a type with the same properties but
// each marked as optional

interface PersonV2 {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};
type UpdateProps = Pick<PersonV2, 'name' | 'age' | 'email'>;
type UpdatePropsOptional = Partial<UpdateProps>
function updateUser(updateProps: UpdatePropsOptional) {
    // hit the db to update the user
    const name = updateProps.name;
    const age = updateProps.age;
}
updateUser({});

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcedf213434'
};
//config.apiKey = 'newKey'; // error : can not assign to apiKey as it is read only

// app.get('/',(req:any,res:any)=>{
//     if(!req.query.userId){
//         res.status(ResponseStatus.ERROR).json({});
//     }
//     return res.status(ResponseStatus.SUCCESS).json({});
// });


// app.listen(port,()=>{
//     console.log(`app is listening at ${port}`);
// });