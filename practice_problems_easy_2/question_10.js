/*
# Write two one-line expressions to count the number of lower-case t
characters in each of the following strings:
*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.includes('t') ? console.log(statement1.match(/t/g).length) : console.log('0');
statement2.includes('t') ? console.log(statement2.match(/t/g).length) : console.log('0');