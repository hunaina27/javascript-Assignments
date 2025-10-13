// Question 4
let scores = [320, 230, 480, 120];

document.write(`<b>Scores of Students:</b> ${scores}<br><br>`);

scores.sort((a, b) => a - b);

document.write(`<b>Ordered Scores of Students:</b> ${scores}`);


// Question 5
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write(`<b>Cities List:</b> ${cities}<br><br>`);

let selectedCities = cities.slice(1, 4);

document.write(`<b>Selected Cities List:</b> ${selectedCities}`);

// Question 6
let arr = ["This", "is", "my", "cat"];

document.write(`<b>Array:</b> ${arr}<br><br>`);

let singleString = arr.join(" ");

document.write(`<b>String:</b> ${singleString}`);


// Question 7
{let queue = [];
let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];

queue.push(...devices);

document.write(`<br><br><b>Devices List:</b> ${queue}<br><br>`);

for (let i = 0; i < devices.length; i++) {
  document.write(`<b>Out:<br></b> ${queue.shift()}<br>`);
}

}

// Question 8
let stack = [];
let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];

stack.push(...devices);

document.write(`<br><b>Devices List:</b> ${stack}<br><br>`);

for (let i = 0; i < devices.length; i++) {
  document.write(`<b>Out:<br></b> ${stack.pop()}`);
}

// Question 9
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<h3>Phone Manufacturers</h3>`);
document.write(`<select>`);

for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write(`<option>${phoneManufacturers[i]}</option>`);
}

document.write(`</select>`);
