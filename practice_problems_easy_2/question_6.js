// option 1
let flintstones = ["Fred", "Wilma"];
flintstones.push('Barney', 'Betty', 'Bambam','Pebbles');
console.log(flintstones);

// option 2
let flintstones = ["Fred", "Wilma"];
console.log(flintstones.concat(['Barney', 'Betty'], ['Bambam', 'Pebbles']));

// option 3
let flintstones = ["Fred", "Wilma"];
let flinstones2 = ["Barney", "Betty"];
let flinstones3 = ["Bamban", "Pebbles"];

flintstones.push(...flinstones2, ...flinstones3);
console.log(flintstones);

// actual solution 1
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log([].concat(...flintstones));

// actual solution 2
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newFlintstones = flintstones.reduce((acc, currVal) => {
  return acc.concat(currVal);
  }, []);
console.log(newFlintstones);