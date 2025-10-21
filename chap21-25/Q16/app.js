// Question 16
let university = "University of Karachi";
let uniArray = university.split("");

document.write(`String: ${university} <br><br>Array Elements:<br>`);

for (let i = 0; i < uniArray.length; i++) {
    document.write(`${uniArray[i]} <br>`);
}

// Question 17
let userInput = prompt("Enter any text:");
let lastChar = userInput.charAt(userInput.length - 1);

document.write(` <br>  <br> User Input: ${userInput} <br> Last Character: ${lastChar}<br><br>`);

// Question 18
let text = "The quick brown fox jumps over the lazy dog";

let lowerText = text.toLowerCase();

let words = lowerText.split(" ");

let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

document.write(`Text: ${text} <br>There are ${count} occurrence(s) of the word "the".`);
