// Question 1 and 2
let a = 3;
let b = 5;

console.log(`a = ${a} & b = ${b}`);
// sum
console.log(`a + b = ${a + b}`);
document.write(`Sum of ${a} and ${b} is ${a + b}`);
// sub
console.log(`a - b = ${a - b}`);
document.write(`<br> Sub of ${a} and ${b} is ${a - b}`);
// multiply
console.log(`a * b = ${a * b}`);
document.write(`<br> Multiple of ${a} and ${b} is ${a * b}`);
// divide
console.log(`a / b = ${a / b}`);
document.write(`<br> Division of ${a} and ${b} is ${a / b}`);
// modulus
console.log(`a % b = ${a % b}`);
document.write(`<br> Modulus of ${a} and ${b} is ${a % b}`);


// Question 3
let x;
document.write(`<br><br> Value after variable declaration is ${x}`);
x = 5;
document.write(`<br> Initial value : ${x}`);
x++;
document.write(`<br> Value after increment is : ${x}`);
x = x + 7;
document.write(`<br> Value after addition is : ${x}`);
x--;
document.write(`<br> Value after decrement is : ${x}`);
x = x % 3;
document.write(`<br> The remainder is : ${x}`);


// Question 4
let ticketPrice = 600;
let totalCostTickets = ticketPrice * 5;
document.write(`<br><br> Total cost to buy 5 movie tickets is ${totalCostTickets} PKR`);


// Question 5
let num = 1;
document.write(`<br/><br/> Table of 4 <br>`);
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}<br>`); num++;
document.write(`4 × ${num} = ${4 * num}`);


// Question 6
document.write(`<br/><br/>`);
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
document.write(`${celsius}°C is ${fahrenheit}°F <br>`);

let fahrenheit2 = 70;
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(`${fahrenheit2}°F is ${celsius2}°C`);


// Question 7
document.write(`<br/><h1>Shopping Cart</h1>`);
let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;

let totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write(`Price of item 1 is ${priceItem1}<br>`);
document.write(`Quantity of item 1 is ${quantityItem1}<br>`);
document.write(`Price of item 2 is ${priceItem2}<br>`);
document.write(`Quantity of item 2 is ${quantityItem2}<br>`);
document.write(`Shipping Charges ${shippingCharges}<br><br>`);
document.write(`Total cost of your order is ${totalCost}`);


// Question 8
document.write(`<br/><h1>Marks Sheet</h1>`);
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;

document.write(`Total Marks: ${totalMarks}<br>`);
document.write(`Marks Obtained: ${marksObtained}<br>`);
document.write(`Percentage: ${percentage}%`);


// Question 9
document.write(`<br/><h1>Currency in PKR</h1>`);
let usDollars = 10;
let saudiRiyals = 25;
let totalPKR = (usDollars * 283.46) + (saudiRiyals * 75.03);

document.write(`Total Currency in PKR: ${totalPKR}`);


// Question 10
document.write(`<br/><h1>Arithmetic Sequence</h1>`);
let number = 5;
let result = ((number + 5) * 10) / 2;

document.write(`Initial number: ${number}<br>`);
document.write(`Result after ((num + 5) * 10) / 2 = ${result}`);


// Question 11
document.write(`<br/><h1>Age Calculator</h1>`);
let currentYear = 2025;
let birthYear = 2006;
let age = currentYear - birthYear;

document.write(`Current Year: ${currentYear}<br>`);
document.write(`Birth Year: ${birthYear}<br>`);
document.write(`Your Age is: ${age}`);


// Question 12
document.write(`<br/><h1>The Geometrizer</h1>`);
let radius = 20;          
let pi = 3.142;

let circumference = 2 * pi * radius;
let area = pi * radius * radius;

document.write(`Radius of a circle: ${radius}<br>`);
document.write(`The circumference is ${circumference}<br>`);
document.write(`The area is ${area}`);


// Question 13
document.write(`<br/><h1>The Lifetime Supply Calculator</h1>`);
let favoriteSnack = "Chocolate Chip Cookies";
let currentAge2 = 19;
let maxAge = 80;
let perDay = 3;
let totalNeeded = (maxAge - currentAge2) * 365 * perDay;

document.write(`Favourite Snack: ${favoriteSnack}<br>`);
document.write(`Current Age: ${currentAge2}<br>`);
document.write(`Estimated Maximum Age: ${maxAge}<br>`);
document.write(`Amount of snacks per day: ${perDay}<br>`);
document.write(`You will need ${totalNeeded} ${favoriteSnack} to last you until the ripe old age of ${maxAge}`);

