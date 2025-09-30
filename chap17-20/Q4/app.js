// Question 4
let tableNum = +prompt("Enter the number for multiplication table: ");
let length = +prompt("Enter the length of the table: ");

for (let i = 1; i <= length; i++) {
  document.write(`${tableNum} x ${i} = ${tableNum * i} <br>`);
}
