// Question 2
let int1 = +prompt("Enter your first integer:");
let int2 = +prompt("Enter your second integer:");

if (int1 > int2) {
  alert(`${int1} is larger.`);
} 
else if (int1 < int2) {
  alert(`${int2} is larger.`);
} 
else {
  alert(`Both numbers are equal: ${int1}`);
}
