// Solution using .reverse() method
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.map(item => item).reverse();
console.log(reversedNumbers);

// Solution using .sort() method
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.map(item => item).sort((num1, num2) => num2 - num1);
console.log(reversedNumbers); // [ 5, 4, 3, 2, 1 ]

// Bonus 1
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

numbers.forEach((item, index) => reversedNumbers[numbers.length - 1 - index] = item);
console.log(reversedNumbers);

