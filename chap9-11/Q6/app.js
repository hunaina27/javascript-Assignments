// Question 6

let sub1marks = +prompt(`Enter your marks in English`);
let sub2marks = +prompt(`Enter your marks in Maths`);
let sub3marks = +prompt(`Enter your marks in Computer`);

let totalMarks = +prompt(`Enter total marks`);

let obtainedMarks = sub1marks + sub2marks + sub3marks;
let percentage = (obtainedMarks / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} 
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} 
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} 
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write(`
  <h2>Marks Sheet</h2>
  Total marks : ${totalMarks} <br>
  Marks obtained : ${obtainedMarks} <br>
  Percentage : ${percentage}% <br>
  Grade : ${grade} <br>
  Remarks : ${remarks}
`);
