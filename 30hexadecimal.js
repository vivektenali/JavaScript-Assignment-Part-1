//30. Write a script which generates a random hexadecimal number.

let range = 100;

console.log(
  `Random number generated from 0 to ${range} is : ${Math.floor(
    Math.random() * range
  ).toString("16")}`
);
