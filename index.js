// Step 2.1: Define the Array of People
const people = [
  { firstName: "Alice", lastName: "Johnson", age: 25, occupation: "Engineer" },
  { firstName: "Bob", lastName: "Smith", age: 30, occupation: "Designer" },
  { firstName: "Charlie", lastName: "Brown", age: 35, occupation: "Teacher" },
];

// Step 2.2: Create an Arrow Function to Greet a Person
const greetPerson = (person) => `Hello, ${person.firstName} ${person.lastName}!`;

// Step 2.3: Create an Arrow Function to Modify a Person's Properties
const updatePerson = (person, newOccupation, newAge) => {
  person.occupation = newOccupation;
  person.age = newAge;
  return person;
};

// Step 2.4: Use forEach to Log Greetings with Arrow Functions
people.forEach((person) => {
  console.log(greetPerson(person));
});

// Step 2.5: Modify a Person and Log the Updated Object
const updatedPerson = updatePerson(people[1], "Senior Designer", 31);
console.log(updatedPerson);

// Step 3: Use Arrow Functions to Modify and Filter Objects
const filterByAge = (peopleArray, ageLimit) => peopleArray.filter((person) => person.age <= ageLimit);

// Log the filtered array (people younger than or equal to 30)
const filteredPeople = filterByAge(people, 30);
console.log(filteredPeople);

// Step 4.1: Define the Array of Cars
const cars = [
  { make: "Toyota", model: "Camry", year: 2005 },
  { make: "Honda", model: "Accord", year: 2010 },
  { make: "Tesla", model: "Model 3", year: 2020 },
];

// Step 4.2: Create Arrow Functions for Cars
const logCarDetails = (car) => `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`;
cars.forEach((car) => {
  console.log(logCarDetails(car));
});

// Step 4.3: Modify Car Properties
const updateCar = (carArray, make, newModel, newYear) => {
  const car = carArray.find((car) => car.make === make);
  if (car) {
    car.model = newModel;
    car.year = newYear;
  }
  return car;
};

// Update the Honda car and log the updated object
const updatedCar = updateCar(cars, "Honda", "Civic", 2022);
console.log(updatedCar);

// Step 4.4: Filter Cars Based on Year
const filterCarsByYear = (carsArray, yearLimit) => carsArray.filter((car) => car.year > yearLimit);

// Log the filtered array of cars newer than 2010
const filteredCars = filterCarsByYear(cars, 2010);
console.log(filteredCars);
