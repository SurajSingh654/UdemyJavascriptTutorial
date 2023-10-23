// Scoping is a fundamental concept in programming that defines the visibility and accessibility of variables within a program. It determines where variables and functions can be accessed or referenced. There are different types of scoping in JavaScript, including lexical scoping, global scoping, local scoping, and block scoping.

// ### 1. Lexical Scoping:
// Lexical scoping, also known as static scoping, is a method for resolving variables based on the location of the variable declaration in the source code. In JavaScript, the scope is defined during the lexing phase, which occurs before the code is executed. Lexical scoping allows a function to access variables from its own scope, as well as from the scope in which it is defined.

// ```javascript
// var externalVariable = 'I am external';

// function myFunction() {
//   var internalVariable = 'I am internal';
//   console.log(externalVariable); // Accessible
// }

// myFunction();
// console.log(internalVariable); // Not accessible
// ```

// In this example, the `myFunction` can access the `externalVariable` from the outer scope because of lexical scoping.

// ### 2. Global Scoping:
// Global scoping refers to the context where variables are declared outside of any function. Variables declared in the global scope can be accessed from any part of the code, including inside functions.

// ```javascript
// var globalVariable = 'I am global';

// function myFunction() {
//   console.log(globalVariable); // Accessible
// }

// myFunction();
// console.log(globalVariable); // Accessible
// ```

// ### 3. Local Scoping:
// Local scoping refers to the context where variables are declared within a function. Variables declared within a function have local scope and can only be accessed within that function.

// ```javascript
// function myFunction() {
//   var localVariable = 'I am local';
//   console.log(localVariable); // Accessible
// }

// myFunction();
// console.log(localVariable); // Not accessible
// ```

// ### 4. Block Scoping:
// Block scoping is a feature introduced in ES6 that allows variables to be scoped to the nearest block, rather than to the nearest function. This is achieved using the `let` and `const` keywords.

// ```javascript
// {
//   let blockVariable = 'I am inside a block';
//   console.log(blockVariable); // Accessible
// }

// console.log(blockVariable); // Not accessible
// ```

// Understanding the different types of scoping is essential for writing clean, maintainable, and error-free JavaScript code. It enables you to manage variable accessibility and prevent naming conflicts within different parts of your code.

"use strict";

// Get Current Year
const currentYear = new Date().getFullYear();

// Function Declaration
function calcAge(birthYear) {
  const age = currentYear - birthYear; // Function Scope
  function printDetails() {
    console.log(`Name is ${firstName} and age is ${age}`);
  }

  printDetails();

  if (age < 18) {
    const message = "You are not eligible";
    console.log(message);

    function printMessage() {
      // block scoped function in strict mode
      console.log(message);
    }
  }
  //   printMessage(); ReferenceError: printMessage is not defined (In strict mode function are block scoped)
  //   console.log(message);  ReferenceError: message is not defined
}

const firstName = "Suraj"; // Global Scope
calcAge(2010);
