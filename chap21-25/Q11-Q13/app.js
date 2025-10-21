// Question 11
let userInput = prompt("Enter your text")
let titleCaseInput = userInput.charAt(0).toUpperCase() +userInput.slice(1).toLowerCase();
document.write(`User Input: ${userInput} <br> Title Case: ${titleCaseInput}`);

// Question 12
let num = 35.36;
let str = num.toString();
let result = str.replace(".", "");

document.write(`<br><br><br>Number: ${num} <br> Result: ${result}`);

// Question 13
let username = prompt("Enter your username:");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  document.write(`<br><br>Your username is: ${username}`);
}

