// Question 8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replaceAll("and", "&");

document.write(`Message: ${message} <br><br> After replacement: ${newMessage}`);

// Question 9
let str = "472";
let num = Number(str);

document.write(` <br> <br>Value: ${str} <br> Type: ${typeof str}<br>`);
document.write(`Value: ${num} <br> Type: ${typeof num}`);

// Question 10
let userInput = prompt("Enter any text")
let upperCaseInput = userInput.toUpperCase()
document.write(`<br><br>User Input: ${userInput} <br> Upper Case: ${upperCaseInput}`);

