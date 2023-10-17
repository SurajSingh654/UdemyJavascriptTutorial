const Suraj = {
  name: "Suraj Singh",
  birthYear: "1999",
  gender: "Male",
};

const Shatakshi = {
  name: "Shatakshi Singh",
  birthYear: "2000",
  gender: "Female",
};

const members = [Suraj, Shatakshi];

const years = new Array(
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
);
console.log(years);

// years[0] = "JAN"  allowed

// years = ["JAN","FEB"];   TypeError: Assignment to constant variable.

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

console.log(
  `${members[0].name}\'s age is --> ${calcAge(members[0].birthYear)}`
);

console.log(
  `${members[1].name}\'s age is --> ${calcAge(members[1].birthYear)}`
);

//  ---------------- Some Important Javascript Methods -----------------------

// 1. push() method --> return length of new array
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output : [1, 2, 3, 4]

// 2. unshift() method  --> return length of new array
arr.unshift(0);
console.log(arr); // Output : [0, 1, 2, 3, 4]

// 3. pop() method --> return last element of array
arr.pop();
console.log(arr); // Output : [0, 1, 2, 3]

// 4. shift() method --> return first element of array
arr.shift();
console.log(arr); // Output : [1, 2, 3]


// 5. indexOf() method --> return index of element
console.log(arr.indexOf(2)); // Output : 1

// 6. includes() method --> return true or false
console.log(arr.includes(2)); // Output : true

// 7. slice() method --> return new array
console.log(arr.slice(1, 3)); // Output : [2, 3]


// 8. splice() method --> return deleted elements
console.log(arr.splice(1, 2)); // Output : [2, 3]


// 9. reverse() method --> return reversed array
console.log(arr.reverse()); // Output : [3, 2, 1]


// 10. concat() method --> return new array
console.log(arr.concat([4, 5])); // Output : [3, 2, 1, 4, 5]



// 11. join() method
console.log(arr.join(",")); // Output : 3,2,1

// 12. sort() method --> return sorted array
console.log(arr.sort()); // Output : [1, 2, 3]



// 13. filter() method --> return filtered array
function greaterThanTwo(element) {
  return element > 2;
}
console.log(arr.filter(greaterThanTwo)); // Output : [3]



// 14. map() method
function addTwo(element) {
  return element + 2;
}
console.log(arr.map(addTwo)); // Output : [3, 4, 5]

// 15. reduce() method --> return reduced value
function sumOfArray(total, element) {
  return total + element;
}
console.log(arr.reduce(sumOfArray)); // Output : 6



// 16. find() method
var obj = { name: "<NAME>", age: 20 };
function findName(element) {
  return element.name === "<NAME>";
}
console.log(arr.find(findName)); // Output : {name: "<NAME>", age: 20}



// 17. findIndex() method
console.log(arr.findIndex(findName)); // Output : 0



// 18. some() method
function isGreaterThanThree(element) {
  return element > 3;
}
console.log(arr.some(isGreaterThanThree)); // Output : false


// 19. every() method
console.log(arr.every(isGreaterThanThree)); // Output : false


// 20. flat() method
var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // Output : [1, 2, 3, 4]


// 21. flatMap() method
function duplicate(element) {
  return [element, element];
}
console.log(arr1.flatMap(duplicate)); // Output : [1, 1, 2, 2, 3, 3, 4, 4]
