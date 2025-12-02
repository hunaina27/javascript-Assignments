
//  1. Signup Form 
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("display").innerHTML =
        `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Password: ${password}</p>`;

    document.getElementById("signupForm").reset();
});

//  2. Read More
function readMore() {
    let moreText = document.getElementById("more");
    let btn = document.getElementById("readBtn");
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.innerText = "Read More";
    }
}

//  3. Student Table 
let editRow = null;

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("sName").value;
    let age = document.getElementById("sAge").value;
    let grade = document.getElementById("sGrade").value;

    let table = document.getElementById("studentTable");
    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = grade;

    // Actions
    let actions = row.insertCell(3);
    actions.innerHTML = `<button onclick="editRowFunc(this)">Edit</button> 
                                 <button onclick="deleteRow(this)">Delete</button>`;

    document.getElementById("studentForm").reset();
});

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
}

function editRowFunc(btn) {
    editRow = btn.parentNode.parentNode;
    document.getElementById("editForm").style.display = "block";
    document.getElementById("editHeading").style.display = "block";
    document.getElementById("editName").value = editRow.cells[0].innerText;
    document.getElementById("editAge").value = editRow.cells[1].innerText;
    document.getElementById("editGrade").value = editRow.cells[2].innerText;
}

function saveEdit() {
    editRow.cells[0].innerText = document.getElementById("editName").value;
    editRow.cells[1].innerText = document.getElementById("editAge").value;
    editRow.cells[2].innerText = document.getElementById("editGrade").value;

    document.getElementById("editForm").style.display = "none";
    document.getElementById("editHeading").style.display = "none";
}
