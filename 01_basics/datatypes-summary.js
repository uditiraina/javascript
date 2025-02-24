// Primitive

// 7 types: string , number , boolean , null ,
// undefined , symbol(kisi bhi value ko unique banane ke liye use hota hai),
// BigInt
/*
IS JAVASCRIPT DYNAMICALLY TYPED OR STATICALLY?
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)

const bigNumber = 324258278434927582n






// Reference Type OR Non Primitive

// Array, objects , functions
  
const heros =["batman","superman","thor","aquaman"];
let myObj = {
    name: "uditi",
    age: 21,
}
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myName ="uditi raina"
let anotherName = myName
anotherName = "chaiaurcode"
console.log(anotherName)
console.log(myName)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="uditiraina@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);