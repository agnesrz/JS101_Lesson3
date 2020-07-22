// # Write three different ways to remove all of the elements from the following array:

// Solution 1
let numbers = [1, 2, 3, 4];
numbers.splice(0);

// Solution 2
let numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.pop();
}

// Solution 3
let numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.shift(...numbers);
}