/*
Creating a basic calculator which can perform below basic operations:
a) add
b) subtract
c) multiply
d) divide
e) modulus
f) percentage
*/

let num1 = 20;
let num2 = 4;

//Addition of 2 variables
let resultAdd = num1 + num2;
console.log(`The addition value is ${resultAdd}`);

//Subtraction of 2 variables
let resultSub =  num1 - num2;
console.log(`The subtraction value is ${resultSub}`);

//Multiplication of 2 variables
let resultMul = num1 * num2;
console.log(`The multiplication value is ${resultMul}`);

//Division of 2 variables
let resultDiv = num1 / num2;
console.log(`The multiplication value is ${resultDiv}`);

//Modulus of 2 variables
let resultMod = num1 % num2;
console.log(`The multiplication value is ${resultMod}`);

//Percentage of 2 variables
let resultPer = (num2 / num1) * 100;
console.log(`The multiplication value is ${resultPer}%`);
