// Hoisting and the Temporal Dead Zone (TDZ) are related concepts that are part of the JavaScript language, affecting how variables and functions are interpreted during the execution of the code.

// ### Hoisting:
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that regardless of where variables and functions are declared, they are moved to the top of their scope before the code is executed. However, only the declarations are hoisted, not the initializations.

// Example of variable hoisting:

// ```javascript
// console.log(x); // Output: undefined
// var x = 5;
// ```

// Example of function hoisting:

// ```javascript
// myFunction(); // Output: "Hello"

// function myFunction() {
//   console.log("Hello");
// }
// ```

// ### Temporal Dead Zone (TDZ):
// The Temporal Dead Zone (TDZ) is a behavior that occurs with variables declared using `let` and `const`. It refers to the period between entering a scope and the actual declaration of a variable. Accessing variables within the TDZ results in a `ReferenceError`.

// Example of TDZ with let:

// ```javascript
// console.log(x); // Throws a ReferenceError
// let x = 5;
// ```

// Example of TDZ with const:

// ```javascript
// console.log(y); // Throws a ReferenceError
// const y = 10;
// ```

// To avoid issues related to hoisting and the TDZ, it's good practice to declare variables at the beginning of their scope. Understanding these concepts helps prevent unexpected behavior and errors in your JavaScript code, enabling you to write more predictable and reliable programs.

"use strict";

const myName = "Suraj Singh";
const myAge = 21;
const myHobbies = ["Coding", "Reading", "Writing", "Gaming"];
if (myName === "Suraj Singh") {
  //   console.log(`My birthYear is ${birthYear}`); // ReferenceError: birthYear is not defined
  //   console.log(`My name is ${myName} and my job is ${myJob}`); // ReferenceError: Cannot access 'myJob' before initialization. This is the TDZ for myJob
  const myJob = "Solution Engineer";
}

console.log(`Office name ${officeName}`); // print undefined
// console.log(`College Name ${collegeName}`); // ReferenceError: Cannot access 'collegeName' before initialization

var officeName = "FICO"; // var is hoisted
const collegeName = "MANIT"; // let and const are in TDZ in their scope

console.log(declarationFunction());
// console.log(functionExpression()); //ReferenceError: Cannot access 'functionExpression' before initialization
// console.log(arrowFunction());

function declarationFunction() {
  console.log(`Function Declaration`);
}

const functionExpression = function () {
  console.log(`Function Expression`);
};

const arrowFunction = () => console.log(`Arrow Function`);

// console.log(varFunctionExpression());  // TypeError: varFunctionExpression is not a function
console.log(varArrowFunction); // undefined

var varFunctionExpression = function () {
  console.log(`Function Expression`);
};

var varArrowFunction = () => console.log(`Arrow Function`);
