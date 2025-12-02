
// Question 1: Alert on link click
function linkAlert() {
    alert("You clicked the Mobile Phone lookup link!");
}

// Question 2: Alert on image click
function purchaseAlert(phoneName) {
    alert(`Thanks for purchasing ${phoneName} from us!`);
}

// Question 3: Delete a row from table
function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row); // deletes the row
}

// Question 4: Change image on mouseover and mouseout
        function changeImage() {
            document.getElementById("myImage").src = "car2.webp";
        }

        function resetImage() {
            document.getElementById("myImage").src = "car1.avif";
        }

// Question 5: Counter
let counter = 0;
function increaseCounter() {
    counter++;
    document.getElementById('counterValue').innerText = counter;
}
function decreaseCounter() {
    counter--;
    document.getElementById('counterValue').innerText = counter;
}
