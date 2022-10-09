/* 
12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let mydate = new Date();

console.log(`Year : ${mydate.getFullYear()}`);
console.log(`Month : ${mydate.getMonth()}`);
console.log(`Date : ${mydate.getDate()}`);
console.log(`Day : ${mydate.getDay()}`);
console.log(`Hours : ${mydate.getHours()}`);
console.log(`Minutes : ${mydate.getMinutes()}`);