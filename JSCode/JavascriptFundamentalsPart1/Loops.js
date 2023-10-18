// Looping and Iterations in javascript

const FICO = {
  fullName: "Fair Issac Corporation",
  description:
    "FICO is a data analytics company that specializes in credit scoring services. FICO was founded in 1956 by Bill Fair and Earl Isaac.",
  headquarter: "Bozeman, Montana",
  founded: 1956,
  employees: 4000,
  departments: ["Engineering", "Marketing", "Finance"],
  offices: ["South Africa", "Bangalore", "California"],

  greeting: function () {
    console.log(`Welcome to ${this.fullName}!`);
  },
  calcAge: function (currentYear) {
    this.age = currentYear - this.founded;
    return this.age;
  },
  calcEmployees: function () {
    this.employees = 4000;
    return this.employees;
  },
  calcDepartments: function () {
    this.departments = ["Engineering", "Marketing", "Finance"];
    return this.departments;
  },
  calcEmployeesPerDepartment: function () {
    this.employeesPerDepartment = this.employees / this.departments.length;
    return this.employeesPerDepartment;
  },

  mainOffices: [
    {
      address: "RMZ Titanium Building,Bangalore",
      employees: 1000,
      floors: 4,
      facilities: ["Cafeteria", "Gym", "Board Rooms"],
    },
    {
      address: "San Jose, California",
      employees: 2000,
      floors: 5,
      facilities: ["Cafeteria", "Gym", "Board Rooms"],
    },
    {
      address: "Johannesburg, South Africa",
      employees: 1000,
      floors: 4,
      facilities: ["Cafeteria", "Gym", "Board Rooms"],
    },
  ],
};

// Loop FICO departments

// 1. For loop
for (let i = 0; i < FICO.departments.length; i++) {
  console.log(`FICO department[${i + 1}] --> ${FICO.departments[i]}`);
}

// 2. While loop
let i = 0;
while (i < FICO.offices.length) {
  console.log(`FICO office[${i + 1}] --> ${FICO.offices[i]}`);
  i++;
}

// 3. Do while loop
let j = 0;
do {
  console.log(
    `FICO main office[${j + 1}] --> address:${
      FICO.mainOffices[j].address
    }, employees:${FICO.mainOffices[j].employees}, floors:${
      FICO.mainOffices[j].floors
    }, facilities:${FICO.mainOffices[j].facilities}`
  );
  j++;
} while (j < FICO.mainOffices.length);

// 4. For of loop
const names = ["Suraj", "Singh", "Rajput", { a: 1, b: 2 }];
for (const name of names) {
  console.log(`Values --> ${name}`);
}

// 5. For in loop
for (const key in names) {
  console.log(`key: ${key}, value: ${names[key]}`);
}
