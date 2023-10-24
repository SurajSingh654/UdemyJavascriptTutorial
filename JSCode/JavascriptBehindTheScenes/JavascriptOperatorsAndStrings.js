"use strict";

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 Enhanced Object Literals
  openingHours,

  orderDelivery({ startIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Destructuring Arrays

// Example1:
const [first, second, third, fourth] = restaurant.categories;
console.log(first, second, third, fourth);

// Example2:
let [mainMenu1, , mainMenu2] = restaurant.mainMenu;
console.log(mainMenu1, mainMenu2);

// Example3:
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// Example4:
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Example5:
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring Objects
// Example1:
const {
  name: restaurantNames = [],
  openingHours: hours = {},
  categories = [],
  branches = [],
} = restaurant;
console.log(restaurantNames, hours, categories, branches);

// Mutating Variables
// Example2:
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
// Example3:
// const {
//   fri: { open: openingHours, close: closingHours },
// } = restaurant.openingHours;
// console.log(openingHours, closingHours);

// Example4:
restaurant.orderDelivery({
  time: "22:30",
  startIndex: 2,
  mainIndex: 2,
  address: `Via del sole 21`,
});

// Spread Operator
// Example1:
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

// Example2:
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Example3:
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Example4:
const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(menu);

// Spread Operator works only on iterables
// Iterables: Array,String,Sets,Map but not objects

// Example5:
const str = "Suraj";
const letters = [...str, " ", "S."];
console.log(letters);

// // Example6:
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// // Example7:
// restaurant.orderPasta(...ingredients);

// Spread Operator on Objects
// Example8:
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: "Suraj" };
console.log(newRestaurant);

// Example9:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Rest Pattern and Parameters
// Example1:
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

// Example2:
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];
console.log(pizza, risotto, otherFood);

// Example3:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Example4:
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);

// Example5:
const x = [23, 5, 7];
add(...x);

// Example6:
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

// Short Circuiting (&& and ||)
// Example1:
console.log("---- OR ----");
console.log(3 || "Suraj"); // 3
console.log("" || "Suraj"); // Suraj
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || "" || "Suraj" || 23 || null); // Suraj

// Example2:
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Example3:
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Example4:
console.log("---- AND ----");
console.log(0 && "Suraj"); // 0
console.log(7 && "Suraj"); // Suraj
console.log("Hello" && 23 && null && "Suraj"); // null

// Example5:
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

// Example6:
console.log(
  restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach")
);

// Nullish Coalescing Operator (??)
// Example1:
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Example2:
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// For-of loop
// Example1:
const menu1 = [...restaurant.startMenu, ...restaurant.mainMenu];
for (const item of menu1) console.log(item);

// Example2:
for (const item of menu1.entries()) {
  console.log(item);
}

// Example3:
for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Optional Chaining (?.)
// Example1:
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// Example2:
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example3:
const days1 = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days1) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Looping Objects: Object Keys, Values and Entries
// Example1:
const properties = Object.keys(openingHours);
console.log(properties);

// Example2:
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Example3:
const values = Object.values(openingHours);
console.log(values);

// Example4:
const entries = Object.entries(openingHours);
console.log(entries);

// Example5:
const keys = Object.keys(openingHours);
console.log(keys);

// Example6:
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Sets
// Example1:
const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta"]);
console.log(ordersSet);

// Example2:
console.log(new Set("Suraj"));

// Example3:
console.log(ordersSet.size);

// Example4:
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

// Example5:
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);

// Example6:
ordersSet.delete("Risotto");
console.log(ordersSet);

// Example7:
// ordersSet.clear();
// console.log(ordersSet);

// Example8:
for (const order of ordersSet) console.log(order);

// Map
// Example1:
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

// Example2:
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D");

// Example3:
console.log(rest.get("name"));
console.log(rest.get(true));

// Example4:
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// Example5:
console.log(rest.has("categories"));

// Example6:
rest.delete(2);
console.log(rest);

// Example7:
const arr1 = [1, 2];
rest.set(arr1, "Test");
console.log(rest);

// Example8:
console.log(rest.get(arr1));

// Example9:
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

// Example10:
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
]);
console.log(question);

// Quiz app
// Example11:
console.log(question.get("question"));

// Example12:
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//Strings
// Example1:
const airline = "TAP Air Portugal";
const plane = "A320";

// Example2:
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

// Example3:
console.log(airline.length);
console.log("B737".length);

// Example4:
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

// Example5:
console.log(airline.slice(4));

// Example6:
console.log(airline.slice(4, 7));

// Example7:
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// Example8:
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Example9:
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat :(");
  else console.log("You got lucky :)");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// Example10:
console.log(new String("Suraj"));
console.log(typeof new String("Suraj"));

// Example11:
console.log(typeof new String("Suraj").slice(1));

// Example12:
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Example13:
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// String Method Practice
// Example14:
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightDetails = flights.split("+");
console.log(flightDetails);

for (const flight of flightDetails) {
  console.log(flight);
  const [type, from, to, time] = flight.split(";");
  console.log(
    `${type} from ${from.slice(0, 3).toUpperCase()} to ${to
      .slice(0, 3)
      .toUpperCase()} (${time.slice(0, 2)}h${time.slice(2)})`
  );
}
