// Question 15
let password = prompt("Enter your password:");

if (password.length < 6) {
  alert("Password must be at least 6 characters long.");
} 
else if (password[0] >= "0" && password[0] <= "9") {
  alert("Password can not begin with a number.");
} 
else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
  alert("Password must contain both alphabets and numbers.");
} 
else {
  document.write(`Your password "${password}" is valid `);
}



