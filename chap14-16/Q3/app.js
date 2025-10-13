//Question 3
let colors = ["Red", "Green", "Blue", "Yellow"];
document.write(`<b>Initial Colors:</b> ${colors}<br><br>`);

let addStart = prompt("Which color do you want to add to the beginning?");
colors.unshift(addStart);
document.write(`<b>After adding at beginning:</b> ${colors}<br><br>`);

let addEnd = prompt("Which color do you want to add to the end?");
colors.push(addEnd);
document.write(`<b>After adding at end:</b> ${colors}<br><br>`);

colors.unshift("Pink", "Purple");
document.write(`<b>After adding two more at beginning:</b> ${colors}<br><br>`);

colors.shift();
document.write(`<b>After deleting first color:</b> ${colors}<br><br>`);

colors.pop();
document.write(`<b>After deleting last color:</b> ${colors}<br><br>`);

let addIndex = +prompt("At which index do you want to add a color?");
let colorName = prompt("Enter the color name to add:");
colors.splice(addIndex, 0, colorName);
document.write(`<b>After adding color at index ${addIndex}:</b> ${colors}<br><br>`);

let delIndex = +prompt("At which index do you want to delete color(s)?");
let delCount = +prompt("How many colors do you want to delete?");
colors.splice(delIndex, delCount);
document.write(`<b>After deleting from index ${delIndex}:</b> ${colors}<br><br>`);
