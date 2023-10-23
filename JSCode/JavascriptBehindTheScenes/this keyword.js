// -------------------------   this keyword  -------------------------------
// The `this` keyword refers to the object that the function is a method of. It represents the runtime context of the function and can change based on how the function is called.
// Special Variable that is created for every execution context
// It takes the value of (points to) the "owner" of the function in which the "this" keyword is used.
// The value of "this" is not static. It depends on how the function is called, and its value is only assigned when the function is actually called.

"use strict";

// Example1: Function Expression
const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(`Inside Function Expression ${this}`); // Output: undefined (In strict mode)
};
calcAge(1999);

// Example2: Arrow Function
const calcAgeArrow = (birthYear) => {
  console.log(2021 - birthYear);
  console.log(`Inside Arrow Function ${this}`); // Output: Window (uses lexical this keyword)
};
calcAgeArrow(1999);

// Example3: Function Declaration
function calcAgeDeclaration(birthYear) {
  console.log(2021 - birthYear);
  console.log(`Inside Function Declaration ${this}`); // Output: undefined (In strict mode)
}

calcAgeDeclaration(1999);

var firstName = "Suraj";
// Example4: Object
const jonas = {
  year: 1999,
  firstName: "Jonas",
  greet: () => console.log(`Hey ${this.firstName}`),
  calcAge: function () {
    console.log(`Inside Jonas Object ${this}`); // {year: 1999, calcAge: ƒ}
    console.log(2021 - this.year); // 22

    const self = this;
    function printDecl() {
      console.log(self);
    }

    printDecl();

    const printArrow = () => {
      console.log(this);
    };

    printArrow();
  },
};

jonas.calcAge();
jonas.greet();
