// Question 7
    let time = +prompt("Enter time in 24 hours format (e.g. 1900 for 7PM):");

    if (time >= 0 && time < 1200) {
      alert("Good Morning! Time is " + time + " = " + (time/100) + " AM");
    } 
    else if (time >= 1200 && time < 1700) {
      alert("Good Afternoon! Time is " + time + " = " + ((time-1200)/100) + " PM");
    } 
    else if (time >= 1700 && time < 2100) {
      alert("Good Evening! Time is " + time + " = " + ((time-1200)/100) + " PM");
    } 
    else if (time >= 2100 && time <= 2359) {
      alert("Good Night! Time is " + time + " = " + ((time-1200)/100) + " PM");
    } 
    else {
      alert("Invalid time format! Please enter between 0000 and 2359.");
    }
 
