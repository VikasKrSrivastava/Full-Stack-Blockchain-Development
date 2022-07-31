// Find a given no. is prime or not

let num = 53;
let counter = 2;
isPrime = true;

while (counter < num / 2) {
  if (num % counter == 0) {
    isPrime = false;
  }
  counter++;
}

if (isPrime) {
  console.log(`The number is prime`);
} else {
  console.log(`The number is composite`);
}
