//28. Use for loop to iterate from 0 to 100 and print only prime numbers

let count = 0;
let i,
  j = 0;
for (i = 0; i <= 100; i++) {
  for (j = 0; j <= i; j++) {
    if (i % j == 0) count++;
  }

  if (count == 2) console.log(i);
  count = 0;
}
