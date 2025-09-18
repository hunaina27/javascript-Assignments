// Question 1
{

let a = 10;

document.write(`Result:`);
document.write(`<br/>The value of a is: ${a}`);

// pre-increment
document.write(`<br/><br/>The value of ++a is: ${++a}`);
document.write(`<br/>Now the value of a is: ${a}`);

// post-increment
document.write(`<br/><br/>The value of a++ is: ${a++}`);
document.write(`<br/>Now the value of a is: ${a}`);

// pre-decrement
document.write(`<br/><br/>The value of --a is: ${--a}`);
document.write(`<br/>Now the value of a is: ${a}`);

// post-decrement
document.write(`<br/><br/>The value of a-- is: ${a--}`);
document.write(`<br/>Now the value of a is: ${a}`);

}

// Question 2
{

let a = 2, b = 1;
let result = --a - --b + ++b + b--;

document.write(`<br/><br/> a is: ${a} <br/>`);
document.write(` b is: ${b} <br/>`);
document.write(` result is: ${result}`);

}

// Question 3
{
    let userName = prompt(" Enter your name ");
    alert(`Welcome to my website, ${userName}`);
}

// Question 4
{
    let num = +prompt(" Enter a number ");
}


