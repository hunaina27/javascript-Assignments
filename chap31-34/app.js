//  Q1: Current Date & Time 
let currentDate = new Date();
document.write(`<h2>Q1</h2>Current Date & Time: ${currentDate}<br><br>`);

//  Q2: Current Month in Words
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentMonth = monthNames[currentDate.getMonth()];
document.write(`<h2>Q2</h2>Current Month: ${currentMonth}<br><br>`);

//  Q3: First 3 Letters of Current Day 
let dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let currentDay = dayNames[currentDate.getDay()];
document.write(`<h2>Q3</h2>Today is: ${currentDay}<br><br>`);

//  Q4: Fun Day Check 
if (currentDay === "Sat" || currentDay === "Sun") {
    document.write(`<h2>Q4</h2>It’s Fun day!<br><br>`);
} else {
    document.write(`<h2>Q4</h2>Not a Fun day.<br><br>`);
}

//  Q5: First or Last Days of Month
let date = currentDate.getDate();
if (date < 16) {
    document.write(`<h2>Q5</h2>First fifteen days of the month<br><br>`);
} else {
    document.write(`<h2>Q5</h2>Last days of the month<br><br>`);
}

//  Q6: Minutes Since Jan 1, 1970 
let milisec = currentDate.getTime();
let minutesSince1970 = Math.floor(milisec / (1000 * 60)); 
document.write(`<h2>Q6</h2>Minutes since Jan 1, 1970: ${minutesSince1970}<br><br>`);

//  Q7: AM or PM 
let hours = currentDate.getHours();
if (hours < 12) {
    document.write(`<h2>Q7</h2>It's AM<br><br>`);
} else {
    document.write(`<h2>Q7</h2>It's PM<br><br>`);
}

// Q8: Last Day of Last Month of 2020
let laterDate = new Date(2020, 11, 31);  
document.write(`<h2>Q8</h2>Later Date: ${laterDate}<br><br>`);

// Q9: Days Since 1st Ramadan (June 18, 2015) 
let ramadanDate = new Date("June 18, 2015");
let today = new Date();
let diffTime = today - ramadanDate;
let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.write(`<h2>Q9</h2>Days since 1st Ramadan (June 18, 2015): ${diffDays}<br><br>`);

// Q10: Seconds Between Date & Jan 1, 2015 
let refDate = new Date();
let start2015 = new Date("Jan 1, 2015");
let secondsPassed = Math.floor((refDate - start2015) / 1000);
document.write(`<h2>Q10</h2>Seconds passed since beginning of 2015: ${secondsPassed}<br><br>`);

// Q11: Add One Hour to Current Date
let dateObj = new Date();
document.write(`<h2>Q11</h2>Current Time: ${dateObj}<br>`);
dateObj.setHours(dateObj.getHours() + 1);
document.write(`After adding one hour: ${dateObj}<br><br>`);

// Q12: 100 Years Back 
let oldDate = new Date();
oldDate.setFullYear(oldDate.getFullYear() - 100);
alert(`Q12: 100 years back: ${oldDate}`);

// Q13: Ask Age & Show Birth Year
let age = +prompt("Enter your age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
document.write(`<h2>Q13</h2>Your birth year is: ${birthYear}<br><br>`);

// Q14: K-Electric Bill
let customerName = prompt("Enter Customer Name:");
let currentMonthBill = currentMonth;  
let units = +prompt("Enter number of units:");
let chargePerUnit = +prompt("Enter charges per unit:");
let netAmount = units * chargePerUnit;
let lateCharges = 500;
let grossAmount = netAmount + lateCharges;

document.write(`<h2>Q14 - K-Electric Bill</h2>`);
document.write(`Customer Name: ${customerName}<br>`);
document.write(`Current Month: ${currentMonthBill}<br>`);
document.write(`Number of Units: ${units}<br>`);
document.write(`Charges per Unit: ${chargePerUnit}<br>`);
document.write(`Net Amount Payable (within Due Date): ${netAmount.toFixed(2)}<br>`);
document.write(`Late Payment Surcharge: ${lateCharges.toFixed(2)}<br>`);
document.write(`Gross Amount Payable (after Due Date): ${grossAmount.toFixed(2)}<br>`);
