// Question 5
    let num = prompt(`Enter a number for table`);

    if (num === null || num === "") {
        num = 5;
    }

    num = +num; 

    document.write(`<h2>Multiplication Table of ${num}</h2>`);

    let i = 1;

    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;
    document.write(`${num} x ${i} = ${num * i}<br>`); i++;

