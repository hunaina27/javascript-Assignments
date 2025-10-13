// Question 1
{
    let studentNames = [];
    let studentNamesObj = new Array();
    let stringArray = ["Apple", "Banana", "Mango", "Orange"];
    let numbersArray = [10, 20, 30, 40, 50];
    let booleanArray = [true, false, true, false];
    let mixedArray = ["Hunaina", 17, true, 5.8, "Karachi"];

    let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
    document.write(`<h2>Education Qualifications in Pakistan:</h2>`);

    for (let i = 0; i < educationQualifications.length; i++) {
        document.write(`${i + 1}) ${educationQualifications[i]} <br>`);
    }
}

// Question 2
{
let studentNames = ["Ali", "Sara", "Ahmed"];
let studentScores = [420, 200,360]
let totalMarks=500;

document.write(`<h2> Students Scores and Percntage </h2>`)
for (let i=0; i<studentNames.length; i++){
    let percentage =(studentScores[i]/totalMarks)*100;

    document.write(`${studentNames[i]} scored ${studentScores[i]} out of ${totalMarks}. Percentage: ${percentage}% <br>`);
}
}