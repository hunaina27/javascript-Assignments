// Question 6
// a. Counting
document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br><br>");

// b. Reverse Counting
document.write("<b>Reverse Counting:</b><br>");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("<br><br>");

// c. Even
document.write("<b>Even:</b><br>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br><br>");

// d. Odd
document.write("<b>Odd:</b><br>");
for (let i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br><br>");

// e. Series
document.write("<b>Series:</b><br>");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
