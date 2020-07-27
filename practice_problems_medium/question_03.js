function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(20));
console.log(factors(2));
console.log(factors(1));
console.log(factors(0.25));
console.log(factors(0));
console.log(factors(-3));