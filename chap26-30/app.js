//  Q1: Positive Integer 
let num1 = +prompt("Enter a positive integer:");
document.write(`<h2>Q1 Results</h2>`);
document.write(`Number: ${num1}<br>`);
document.write(`Round off value: ${Math.round(num1)}<br>`);
document.write(`Floor value: ${Math.floor(num1)}<br>`);
document.write(`Ceil value: ${Math.ceil(num1)}<br><br>`);

//  Q2: Negative Floating Number 
let num2 = +prompt("Enter a negative floating number:");
document.write(`<h2>Q2 Results</h2>`);
document.write(`Number: ${num2}<br>`);
document.write(`Round off value: ${Math.round(num2)}<br>`);
document.write(`Floor value: ${Math.floor(num2)}<br>`);
document.write(`Ceil value: ${Math.ceil(num2)}<br><br>`);

//  Q3: Absolute Value 
let num3 = +prompt("Enter any number to find absolute value:");
document.write(`<h2>Q3 Results</h2>`);
document.write(`Absolute value of ${num3} is ${Math.abs(num3)}<br><br>`);

//  Q4: Dice Simulation 
let dice = Math.floor(Math.random() * 6) + 1; // 1–6
document.write(`<h2>Q4 Results</h2>`);
document.write(`Dice value: ${dice}<br><br>`);

// Q5: Coin Toss 
let toss = Math.floor(Math.random() * 2) + 1; // 1 or 2
let coinResult = (toss === 1) ? "Heads" : "Tails";
document.write(`<h2>Q5 Results</h2>`);
document.write(`Coin value: ${toss} (${coinResult})<br><br>`);

//  Q6: Random Number (1–100) 
let randomNum = Math.floor(Math.random() * 100) + 1;
document.write(`<h2>Q6 Results</h2>`);
document.write(`Random number (1 to 100): ${randomNum}<br><br>`);

//  Q7: Parse Weight 
let weightInput = prompt("Enter your weight:");
let weight = parseFloat(weightInput); // extract only number
document.write(`<h2>Q7 Results</h2>`);
document.write(`Your weight is: ${weight} kilograms<br><br>`);

//Q8: Secret Number Guess Game 
let secret = Math.floor(Math.random() * 10) + 1; // 1–10
let userGuess = +prompt("Guess a number between 1 and 10:");
document.write(`<h2>Q8 Results</h2>`);
if (userGuess === secret) {
    document.write(`🎉 Congratulations! You guessed the secret number ${secret}!`);
} else {
    document.write(`❌ Wrong! The secret number was ${secret}. Try again!`);
}
