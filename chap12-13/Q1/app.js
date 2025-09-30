// Question 1
let char = prompt("Enter any character: ");

let ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  alert("You entered a Number");
} else if (ascii >= 65 && ascii <= 90) {
  alert("You entered an Uppercase Letter");
} else if (ascii >= 97 && ascii <= 122) {
  alert("You entered a Lowercase Letter");
} else {
  alert("Other character (not number or letter)");
}
