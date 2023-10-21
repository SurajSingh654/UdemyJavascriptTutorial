// A function definition --> function declaration, or function statement
// An expression is a value, or anything that executes and ends up being a value.
// Statements are the whole structure, while expressions are the building blocks.

// ----------- Function declaration -------------

// const age1 = calcAge1(1999); // Can be invoked before initialization

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1999);

// ----------- Function expression -------------
// const age2 = calcAge2(1985);  // ReferenceError: Cannot access 'calcAge2' before initialization
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1985);
console.log(
  `Age 1(Function Declaration): ${age1}, Age 2(Function Expression): ${age2}`
);

// ----------- Arrow function -------------
// const age3 = calcAge3(1999);  // ReferenceError: Cannot access 'calcAge3' before initialization

const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1999);
console.log(`Age 3(Arrow Function): ${age3}`);

// ------------------------ Function Calling Other function  ---------------------------
function cutFruitPieces(fruit) {
  return fruit * 4;
}
let appleSlices = cutFruitPieces(6);
console.log(appleSlices);

function fruitProcessor(apples, oranges) {
  let applePieces = cutFruitPieces(apples);
  let orangePieces = cutFruitPieces(oranges);
  let juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(`Juice maker: ${fruitProcessor(2, 3)}`);
console.log("Suraj");
