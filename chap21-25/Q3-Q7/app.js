// Question 3
{let word = "Pakistani"
let index = word.indexOf("n")
document.write(`String: ${word} <br> Index of 'n': ${index}`);
}
// Question 4
{let word = "Hello World"
let index = word.lastIndexOf("l")
document.write(`<br> <br> String: ${word} <br> Index of 'l': ${index}`);
}
// Question 5
{let word = "Pakistani"
let index = word.charAt("3")
document.write(`<br> <br> String: ${word} <br> Character at Index 3: ${index}`);
}

// Question 6 
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName.concat(" ", lastName);
alert(`Hello, ${fullName }! Welcome!`);

// Question 7
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");

document.write(`<br> <br>City: ${city} <br> After replacement: ${newCity}`);


