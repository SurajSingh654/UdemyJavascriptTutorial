// Primitive vs Object
// Primitive: A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol.
// Object: An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

// Primitive are store in Call Stack
// Object are store in Heap

let lastName = "Wiliams";
let oldLastName = lastName; // oldLastName and lastName pointing to same address
lastName = "Davis"; // lastName now pointing to new address
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Wiliams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage", jessica);
console.log("After Marriage", marriedJessica);
