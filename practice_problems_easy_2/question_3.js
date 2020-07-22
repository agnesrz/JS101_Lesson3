let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;
let number2 = 95;

function arrayContainsValue (value, array) {
  return (array.includes(value));
}

console.log(arrayContainsValue(number1, numbers));   // false
console.log(arrayContainsValue(number2, numbers));   // true