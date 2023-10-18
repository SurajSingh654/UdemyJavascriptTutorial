// Teach Javascript Objects with important methods


const Suraj = {
  firstName: "Suraj",
  lastName: "Singh",
  birthYear: 1999,
  gender: "Male",
  WrongAge: (currentYear) => currentYear - this.birthYear, // 'this' keyword not working in Arrow function
  Age: function (currentYear) {
    return currentYear - this.birthYear;
  }
};



const now = new Date();
const currentYear = now.getFullYear();
// console.log(Suraj.WrongAge(currentYear)); // return NaN
console.log(`${Suraj.firstName} ${Suraj.lastName}, is ${Suraj.Age(currentYear)} years old`);

// console.log(Suraj[Age(currentYear)]);          ReferenceError: Age is not defined(bracket notation is not working!)
// when you're trying to access the Age property using bracket notation, it should be a string
console.log(Suraj["Age"](currentYear));

// ------------------- Javascript Objects ----------------------
// 1. Object Literal
// 2. Object Constructor
// 3. Object.create() method
// 4. Object.assign() method
// 5. Object.keys() method
// 6. Object.values() method
// 7. Object.entries() method
// 8. Object.freeze() method
// 9. Object.seal() method
// 10. Object.getPrototypeOf() method
// 11. Object.hasOwnProperty() method
// 12. Object.is() method
// 13. Object.toString() method
// 14. Object.toLocaleString() method
// 15. Object.defineProperty() method
// 16. Object.defineProperties() method
// 17. Object.preventExtensions() method
// 18. Object.isExtensible() method
// 19. Object.getOwnPropertyDescriptor() method
// 20. Object.getOwnPropertyDescriptors() method
