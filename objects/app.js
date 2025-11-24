// Q1
var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
];

var totalAllItems = 0;

for (var i = 0; i < itemsArray.length; i++) {
    var itemPrice = Number(itemsArray[i].price);
    var itemQty   = Number(itemsArray[i].quantity);

    var totalItemPrice = itemPrice * itemQty;
    console.log(itemsArray[i].name + " total price = " + totalItemPrice);

    totalAllItems = totalAllItems + totalItemPrice;
}

console.log("Total price of ALL items = " + totalAllItems);

// Q2
var user = {
    name: "Ali",
    email: "ali@example.com",
    password: "12345",
    age: 22,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
};

console.log(`Age property exists?  ${"age" in user}`);
console.log(`Country property exists?  ${"country" in user}`);
console.log(`firstName exists?  ${"firstName" in user}`);
console.log(`lastName exists?  ${"lastName" in user}`);

// Q3
function Student(name, age, gender, city) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
}

var s1 = new Student("Ali", 20, "Male", "Karachi");
var s2 = new Student("Sara", 22, "Female", "Lahore");
var s3 = new Student("Hamza", 19, "Male", "Islamabad");

console.log(`Student 1: ${s1.name}, ${s1.age}, ${s1.gender}, ${s1.city}`);
console.log(`Student 2: ${s2.name}, ${s2.age}, ${s2.gender}, ${s2.city}`);
console.log(`Student 3: ${s3.name}, ${s3.age}, ${s3.gender}, ${s3.city}`);

// Q4
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function saveData() {
    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let profession = document.getElementById("profession").value;

    let person = new Person(name, gender, address, education, profession);

    let record = `${person.name} | ${person.gender} | ${person.address} | ${person.education} | ${person.profession}\n`;
    let oldData = localStorage.getItem("people") || "";
    oldData += record;
    localStorage.setItem("people", oldData);

    showData();
}

function showData() {
    let data = localStorage.getItem("people") || "No data found yet!";
    document.getElementById("display").innerText = data;
}

showData();

