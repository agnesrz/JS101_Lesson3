let string = 'The Flintstones Rock!';

for (let ite = 0; ite < 10; ite += 1) {
  console.log(string.padStart((string.length + ite), " "));
}