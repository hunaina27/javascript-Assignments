//Question 6

    let sub1 = prompt(`Enter your first subject name`);
    let sub2 = prompt(`Enter your second subject name`);
    let sub3 = prompt(`Enter your third subject name`);

    let sub1Marks = 100;
    let sub2Marks = 100;
    let sub3Marks = 100;

    let sub1Obtainedmarks = +prompt(`Enter obtained marks in ${sub1}`);
    let sub2Obtainedmarks = +prompt(`Enter obtained marks in ${sub2}`);
    let sub3Obtainedmarks = +prompt(`Enter obtained marks in ${sub3}`);

    // Subject-wise percentage
    let sub1Percent = (sub1Obtainedmarks / sub1Marks) * 100;
    let sub2Percent = (sub2Obtainedmarks / sub2Marks) * 100;
    let sub3Percent = (sub3Obtainedmarks / sub3Marks) * 100;

    // Total marks and overall percentage
    let totalMarks = sub1Marks + sub2Marks + sub3Marks; // 300
    let obtainedMarks = sub1Obtainedmarks + sub2Obtainedmarks + sub3Obtainedmarks;
    let overallPercent = (obtainedMarks / totalMarks) * 100;

    document.write(`
        <table border="1" cellspacing="0" cellpadding="8">
            <tr>
                <th>Subjects</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage</th>
            </tr>
            <tr>
                <td>${sub1}</td>
                <td>${sub1Marks}</td>
                <td>${sub1Obtainedmarks}</td>
                <td>${sub1Percent}%</td>
            </tr>
            <tr>
                <td>${sub2}</td>
                <td>${sub2Marks}</td>
                <td>${sub2Obtainedmarks}</td>
                <td>${sub2Percent}%</td>
            </tr>
            <tr>
                <td>${sub3}</td>
                <td>${sub3Marks}</td>
                <td>${sub3Obtainedmarks}</td>
                <td>${sub3Percent}%</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>${totalMarks}</th>
                <th>${obtainedMarks}</th>
                <th>${overallPercent}%</th>
            </tr>
        </table>
    `);
