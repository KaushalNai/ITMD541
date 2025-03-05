/*  
  // K NAI
  // ITMD 541-01 Graduate Student
*/

/* =========================
   Exercise #1: minMaxAverage
========================= */
function minMaxAverage(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Error: Please pass a valid array of numbers.");
    return;
  }
  let totalNumbers = numbers.length;
  let minValue = Math.min(...numbers);
  let maxValue = Math.max(...numbers);
  let sum = numbers.reduce((acc, val) => acc + val, 0);
  let average = sum / totalNumbers;
  console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average}`);
}

// Test Cases for Exercise #1:
console.log("Exercise #1 Test Cases:");
let arrayTest1 = [2, 5, 23, 6, 9, 4, 30, 1];            
let arrayTest2 = [1, 5, 3, 5, 10, 12, 8, 6];             
let arrayTest3 = [3, 5, 25, 6, 7, 4, 32, 2];                        

console.log("Test Case 1:");
minMaxAverage(arrayTest1); 
console.log("Test Case 2:");
minMaxAverage(arrayTest2); 
console.log("Test Case 3:");
minMaxAverage(arrayTest3); 


/* =========================
   Exercise #2: countVowels
========================= */
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Test Cases for Exercise #2:
console.log("\nExercise #2 Test Cases:");
let word1 = "Winter";
let word2 = "Example";
let word3 = "Beautiful";

console.log(word1 + ": " + countVowels(word1) + " vowels");   
console.log(word2 + ": " + countVowels(word2) + " vowels");     
console.log(word3 + ": " + countVowels(word3) + " vowels");     


/* =========================
   Exercise #3: sortNumbers
========================= */
function sortNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Error: Please pass a valid array of numbers.");
    return;
  }
  return numbers.slice().sort((a, b) => a - b);
}

// Test Cases for Exercise #3:
console.log("\nExercise #3 Test Cases:");
let numbersTest1 = [15, -3, 22, 0, 7];                 
let numbersTest2 = [45, -7, 32, 1, 9];            
let numbersTest3 = [2, 23, -2, 21, -5];                    

console.log("Original Array: " + JSON.stringify(numbersTest1) + " | Sorted Array: " + JSON.stringify(sortNumbers(numbersTest1)));
console.log("Original Array: " + JSON.stringify(numbersTest2) + " | Sorted Array: " + JSON.stringify(sortNumbers(numbersTest2)));
console.log("Original Array: " + JSON.stringify(numbersTest3) + " | Sorted Array: " + JSON.stringify(sortNumbers(numbersTest3)));


/* =========================
   Exercise #4: celsiusToFahrenheit
========================= */
function celsiusToFahrenheit(temp) {
  let celsius = parseFloat(temp);
  if (isNaN(celsius)) {
    console.log("Error: Invalid temperature input:", temp);
    return;
  }
  let fahrenheit = (celsius * 9 / 5) + 32;
  console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test Cases for Exercise #4:
console.log("\nExercise #4 Test Cases:");
celsiusToFahrenheit(30);    
celsiusToFahrenheit(0);   
celsiusToFahrenheit(-10);   
celsiusToFahrenheit("35");   
celsiusToFahrenheit("100");


/* =========================
   Exercise #5: introducePeople
========================= */
function introducePeople(people) {
  if (!Array.isArray(people)) {
    console.log("Error: Please pass a valid array of people objects.");
    return;
  }
  let sortedPeople = people.slice().sort((a, b) => a.age - b.age);
  return sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
}

// Test Cases for Exercise #5:
console.log("\nExercise #5 Test Cases:");
let peopleArray1 = [
  { name: "Alice",   age: 30, city: "Chicago" },
  { name: "Bob",     age: 25, city: "New York" },
  { name: "Charlie", age: 28, city: "San Francisco" },
  { name: "Diana",   age: 22, city: "Miami" },
  { name: "Ethan",   age: 35, city: "Los Angeles" }
];

let peopleArray2 = [
  { name: "Fiona",  age: 40, city: "Boston" },
  { name: "George", age: 30, city: "Seattle" },
  { name: "Harry",  age: 18, city: "Denver" },
  { name: "Isla",   age: 28, city: "Austin" },
  { name: "Jack",   age: 32, city: "Houston" }
];

console.log("People Array 1 Introductions:");
introducePeople(peopleArray1).forEach(intro => console.log(intro));

console.log("\nPeople Array 2 Introductions:");
introducePeople(peopleArray2).forEach(intro => console.log(intro));