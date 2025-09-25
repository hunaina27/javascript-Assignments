// Question 11

let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");
let operation = prompt("Enter operation (+, -, *, /, %):");

if (operation === "+") {
    alert("Result: " + (num1 + num2));
}

if (operation === "-") {
    alert("Result: " + (num1 - num2));
}

if (operation === "*") {
    alert("Result: " + (num1 * num2));
}

if (operation === "/") {
    alert("Result: " + (num1 / num2));
}

if (operation === "%") {
    alert("Result: " + (num1 % num2));
}
