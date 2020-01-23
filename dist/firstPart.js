// Task 1 "Rectangle area"

let a = 2.4,
  b = 3.3,
  result = a * b,
  roundedResult = +(result.toFixed(1));

console.log(roundedResult, typeof roundedResult);

// Task 2 "Интерполяция"

let userName = 'Polina',
  userAge = 25,
  currentDate = new Date(),
  currentYear = currentDate.getFullYear(),
  userWasBorn = currentYear - userAge;

console.log(`My name is ${userName}. I was born in ${userWasBorn} and I\'m ${userAge} years old.`);

// Task 3 "Circle square"

let circleRadius = parseFloat('5.67cm'),
  circleSquare = Math.PI * (circleRadius ** 2); // S=πr2

console.log(`Circle square is ${parseInt(circleSquare)}`);