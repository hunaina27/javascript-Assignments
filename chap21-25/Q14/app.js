// Question 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery! What do you want to order?");

let item = userInput.toLowerCase();

if (A.includes(item)) {
  document.write(`Yes, ${userInput} is available at index ${A.indexOf(item)} in our bakery.`);
} else {
  document.write(`We are sorry. ${userInput} is not available in our bakery.`);
}

