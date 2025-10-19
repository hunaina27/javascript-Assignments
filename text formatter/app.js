let currentText = "";  // user text
let isBold = false;
let isItalic = false;
let isUnderline = false;

function updateResult() {
    let formatted = currentText;

    if (isBold) formatted = `<b>${formatted}</b>`;
    if (isItalic) formatted = `<i>${formatted}</i>`;
    if (isUnderline) formatted = `<u>${formatted}</u>`;

    document.getElementById("result").innerHTML = formatted;
}

// lower case
function toLowerCaseText() {
    let text = document.getElementById("text").value;
    currentText = text.toLowerCase();
    updateResult();
}

// upper case
function toUpperCaseText() {
    let text = document.getElementById("text").value;
    currentText = text.toUpperCase();
    updateResult();
}

// capitalize
function toCapitalizeText() {
    let text = document.getElementById("text").value.toLowerCase();
    let words = text.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i]) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    result = words.join(" ");
    currentText = result;
    updateResult();
}


// bold toggle
function toBoldText() {
    isBold = !isBold;
    updateResult();
}

// italic toggle
function toItalicText() {
    isItalic = !isItalic;
    updateResult();
}

// underline toggle
function toUnderlineText() {
    isUnderline = !isUnderline;
    updateResult();
}
