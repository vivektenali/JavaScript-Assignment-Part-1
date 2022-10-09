//16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


let r = prompt('Enter radius of circle');

const pi = 3.14;

console.log(`Area of circle : ${pi*r**2}`);
console.log(`Circumference of a circle : ${2*pi*r}`);
