// # Create an array from this object that contains only two elements: Barney's name and Barney's number:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let index = Object.entries(flintstones).findIndex(item => item[0] === 'Barney');
let barney = Object.entries(flintstones)[index];

console.log(barney);