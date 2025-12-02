// Question 1: Custom function to calculate a^b
function power(a, b) {
    let result = 1;
    let i = 0;
    while (i < b) { 
        result *= a;
        i++;
    }
    return result;
}

// Question 2: Check if year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

// Question 3: Area of triangle using two functions
function triangleArea(a, b, c) {
    function semiPerimeter(a, b, c) {
        return (a + b + c) / 2;
    }
    let S = semiPerimeter(a, b, c);
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

// Question 4: Average and percentage of marks using three functions
function mainFunction(m1, m2, m3) {
    function average(m1, m2, m3) {
        return (m1 + m2 + m3) / 3;
    }
    function percentage(m1, m2, m3) {
        return ((m1 + m2 + m3) / 300) * 100;
    }
    let avg = average(m1, m2, m3);
    let perc = percentage(m1, m2, m3);
    return `Average: ${avg.toFixed(2)}, Percentage: ${perc.toFixed(2)}%`;
}

// Question 5: Custom indexOf function for a single character
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1; // not found
}

// Question 6: Delete all vowels from a sentence
function removeVowels(sentence) {
    let result = '';
    for (let char of sentence) {
        if (!'aeiouAEIOU'.includes(char)) result += char;
    }
    return result;
}

// Question 7: Count occurrences of two vowels in succession using switch
function countDoubleVowels(sentence) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < sentence.length - 1; i++) {
        switch (true) {
            case vowels.includes(sentence[i]) && vowels.includes(sentence[i + 1]):
                count++;
                break;
        }
    }
    return count;
}

// Question 8: Convert distance between cities
function convertDistance(km) {
    function toMeters(km) { return km * 1000; }
    function toFeet(km) { return km * 3280.84; }
    function toInches(km) { return km * 39370.1; }
    function toCentimeters(km) { return km * 100000; }

    document.write(`Distance in meters: ${toMeters(km)}<br>`);
    document.write(`Distance in feet: ${toFeet(km)}<br>`);
    document.write(`Distance in inches: ${toInches(km)}<br>`);
    document.write(`Distance in centimeters: ${toCentimeters(km)}<br>`);
}

// Question 9: Calculate overtime pay
function overtimePay(hoursWorked) {
    let overtime = hoursWorked > 40 ? hoursWorked - 40 : 0;
    let pay = overtime * 12;
    return `Overtime pay: Rs. ${pay}`;
}

// Question 10: Currency notes
function currencyNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    let remainder = amount % 100;
    let fifties = Math.floor(remainder / 50);
    remainder = remainder % 50;
    let tens = Math.floor(remainder / 10);
    return `100s: ${hundreds}, 50s: ${fifties}, 10s: ${tens}`;
}
