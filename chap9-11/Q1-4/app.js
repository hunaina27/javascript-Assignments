// Question 1

let city = prompt("Enter your city name");

if (city === "karachi") {
    alert("Welcome to the city of  lights");
}

// Question 2

let gender = prompt("What's your gender");

if (gender === "male") {
    alert("Good Morning Sir");
}
else if (gender === "female") {
    alert("Good Morning Ma'am");
}
else {
    alert("Good Morning");
}

// Question 3
let signalColor = prompt("What's your color");

if (signalColor === "red") {
    alert("Must stop");
}
else if (signalColor === "yellow") {
    alert("Ready to move");
}
else if (signalColor === "green"){
    alert("Move now")
}
else{
    alert ("keep waiting");
}

// Question 4

let fuel = +prompt("Enter remaining fuel in your car (in litres):");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else {
    alert("You have enough fuel");
}
