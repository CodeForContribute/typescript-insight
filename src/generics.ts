// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }
// const el = getFirstElement([1, 3, '5']);
// console.log()
// generics enable to create components that work with any data type while still providing compile-time type safety
function identity<T>(arg: T): T {
    return arg;
}
let op1 = identity<string>("mystring");
let op2 = identity<number>(100);

// solution to original problem
function getFirstElement<T>(arr:T[]){
    return arr[0];
}
const el = getFirstElement(["raushan","singh"]);
console.log(el.toLowerCase());