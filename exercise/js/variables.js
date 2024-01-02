// // Task 1 declaring, naming and copying
let admin, 
    name = "John";
admin = name;
// alert(admin);

// // Task 2 naming convention right 
let ourPlanetName = "earth";
let currenet_user;

// // We generally use upper case for constants that are “hard-coded”. Or, in other words, 
// // when the value is known prior to execution and directly written into the code.

let s = "my" + "string";
// alert(s); // mystring

// // NUMBERS
// // There are many operators in JavaScript. Every operator has a corresponding precedence number. 
// // The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

let a = 1, b = 1;

let c = ++a; // prefix incremental does the operation first and updates the variable 
let d = b++; // postfix incremental keeps the old varible value, perfoms the operation and then update variable with new value
// a = 2, b = 2, c = 2, d = 1

//Assignment 
console.log(45 + 23);
console.log(d + b);
alert((4 + 6 + 9) / 77);

// Template Literal 
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
//string methods - 
