const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Checked In");
  } else {
    alert("Wrong Passport");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//  First Class vs Higher Order Functions
// First Class Functions: JavaScript treats functions as first-class citizens. This means that functions are simply values. They can be stored in variables, passed as arguments to other functions, and returned from functions.
// Higher Order Functions: A higher-order function is a function that takes another function as an argument, or returns a function as a result.

// Example:
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, func) {
  return func(a, b);
}

const sum = calculate(3, 4, add);
const product = calculate(3, 4, multiply);

// In this example, the `calculate` function is a higher-order function because it takes another function as an argument.

// ### Callback Functions:
// A callback function is a function that is passed as an argument to another function. It is then invoked inside the outer function to complete some kind of routine or action.

// Example:
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

// In this example, the `greeting` function is a callback function because it is passed as an argument to the `processUserInput` function.

// Call, Apply, and Bind
// The `call`, `apply`, and `bind` methods are used to set the value of `this` within a function. They are used to invoke functions with a specific context.

// ### 1. Call:
// The `call` method is used to invoke a function with a specific context. It takes the function arguments individually.

// Example:
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet.call(person);

// In this example, the `call` method is used to invoke the `greet` function with the `person` object as the context.

// ### 2. Apply:
// The `apply` method is used to invoke a function with a specific context. It takes the function arguments as an array.

// Example:
person.greet.apply(person);

// In this example, the `apply` method is used to invoke the `greet` function with the `person` object as the context.

// ### 3. Bind:
// The `bind` method is used to create a new function with a specific context. It returns a new function that can be invoked later.

// Example:
const greet = person.greet.bind(person);
greet();

// In this example, the `bind` method is used to create a new function `greet` with the `person` object as the context.

// Understanding the `call`, `apply`, and `bind` methods is essential for comprehending how the `this` keyword is bound within different contexts.

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum,name){
        console.log(`FlightNumber --> ${flightNum} and Name --> ${name}`);
    }
}

lufthansa.book(239,"Suraj");
lufthansa.book(635,"Rahul");

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
}

const book = lufthansa.book;

// book(23,"Sarah"); // This will not work

// Call Method
book.call(eurowings,23,"Sarah");
console.log(eurowings);



