//29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

var evenSum = 0;
var oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) evenSum = evenSum + i;
  else oddSum = oddSum + i;
}

console.log(evenSum);
console.log(oddSum);
