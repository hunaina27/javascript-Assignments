// Question 1: Display current date & time
function showDateTime() {
    let now = new Date();
    document.write(`Current Date & Time: ${now}`);
}

// Question 2: Greet user with full name
function greetUser(firstName, lastName) {
    document.write(`Hello, ${firstName} ${lastName}! Welcome!`);
}

// Question 3: Add two numbers
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

// Question 4: Calculator function
function calculator(num1, num2, operator) {
    let result;
    if(operator === '+') result = num1 + num2;
    else if(operator === '-') result = num1 - num2;
    else if(operator === '*') result = num1 * num2;
    else if(operator === '/') result = num1 / num2;
    else result = "Invalid operator";
    document.write(`Result: ${result}`);
}

// Question 5: Square of a number
function square(num) {
    return num * num;
}

// Question 6: Factorial of a number
function factorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Question 7: Display counting from start to end
function counting(start, end) {
    for(let i = start; i <= end; i++) {
        document.write(`${i} <br>`);
    }
}

// Question 8: Compute hypotenuse using nested function
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}

// Question 9: Area of rectangle
// i. Arguments as value
function areaRectangleValue(width, height) {
    return width * height;
}
// ii. Arguments as variables
function areaRectangleVariables() {
    let width = 5;
    let height = 10;
    return width * height;
}

// Question 10: Check palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed ? "It is a palindrome" : "Not a palindrome";
}

// Question 11: Capitalize first letter of each word
function titleCase(str) {
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// Question 12: Find longest word in string
function longestWord(str) {
    let words = str.split(' ');
    let maxWord = '';
    for(let word of words) {
        if(word.length > maxWord.length) maxWord = word;
    }
    return maxWord;
}

// Question 13: Count occurrences of a letter
function countLetter(str, letter) {
    let count = 0;
    for(let char of str) {
        if(char.toLowerCase() === letter.toLowerCase()) count++;
    }
    return count;
}

// Question 14: Geometrizer
// Circumference
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.write(`The circumference is ${circumference.toFixed(2)} <br>`);
}
// Area
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.write(`The area is ${area.toFixed(2)} <br>`);
}
// Question 1: Display current date & time
function showDateTime() {
    let now = new Date();
    document.write(`Current Date & Time: ${now}`);
}

// Question 2: Greet user with full name
function greetUser(firstName, lastName) {
    document.write(`Hello, ${firstName} ${lastName}! Welcome!`);
}

// Question 3: Add two numbers
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

// Question 4: Calculator function
function calculator(num1, num2, operator) {
    let result;
    if(operator === '+') result = num1 + num2;
    else if(operator === '-') result = num1 - num2;
    else if(operator === '*') result = num1 * num2;
    else if(operator === '/') result = num1 / num2;
    else result = "Invalid operator";
    document.write(`Result: ${result}`);
}

// Question 5: Square of a number
function square(num) {
    return num * num;
}

// Question 6: Factorial of a number
function factorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Question 7: Display counting from start to end
function counting(start, end) {
    for(let i = start; i <= end; i++) {
        document.write(`${i} <br>`);
    }
}

// Question 8: Compute hypotenuse using nested function
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}

// Question 9: Area of rectangle
// i. Arguments as value
function areaRectangleValue(width, height) {
    return width * height;
}
// ii. Arguments as variables
function areaRectangleVariables() {
    let width = 5;
    let height = 10;
    return width * height;
}

// Question 10: Check palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed ? "It is a palindrome" : "Not a palindrome";
}

// Question 11: Capitalize first letter of each word
function titleCase(str) {
    let words = str.split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// Question 12: Find longest word in string
function longestWord(str) {
    let words = str.split(' ');
    let maxWord = '';
    for(let word of words) {
        if(word.length > maxWord.length) maxWord = word;
    }
    return maxWord;
}

// Question 13: Count occurrences of a letter
function countLetter(str, letter) {
    let count = 0;
    for(let char of str) {
        if(char.toLowerCase() === letter.toLowerCase()) count++;
    }
    return count;
}

// Question 14: Geometrizer
// Circumference
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    document.write(`The circumference is ${circumference.toFixed(2)} <br>`);
}
// Area
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    document.write(`The area is ${area.toFixed(2)} <br>`);
}
