/* 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback stating 
to wait for the number of years he needs to turn 18.*/

let age = prompt("Enter the age");

if (age >= 18) {
  console.log(`You are eligible to drive`);
} else {
  console.log(
    `please wait for ${age - 18} to turn 18, and then you are eligible to drive`
  );
}
