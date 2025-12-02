
let results = document.getElementById("results");

// 1.i Get element of id “main-content” and assign them in a variable 
let mainContent = document.getElementById("main-content");
results.innerHTML += "<b>1.i Main content element:</b> " + mainContent.id + "<br>";

// 1.ii Display all child elements of “main-content” 
results.innerHTML += "<b>1.ii Child elements of main-content:</b><br>";
Array.from(mainContent.children).forEach(child => {
    results.innerHTML += child.outerHTML + "<br>";
});

// 1.iii Get all elements of class “render” and show their innerHTML
let renders = document.getElementsByClassName("render");
results.innerHTML += "<b>1.iii InnerHTML of elements with class 'render':</b><br>";
Array.from(renders).forEach(el => {
    results.innerHTML += el.innerHTML + "<br>";
});

// 1.iv Fill input value whose element id first-name 
document.getElementById("first-name").value = "Alex";

// 1.v Repeat for last-name and email 
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

//  2.i Node type of element having id “form-content” 
let formContent = document.getElementById("form-content");
results.innerHTML += "<b>2.i Node type of form-content:</b> " + formContent.nodeType + "<br>";

//  2.ii Node type of element having id “lastName” and its child node
let lastNameEl = document.getElementById("lastName");
results.innerHTML += "<b>2.ii Node type of lastName element:</b> " + lastNameEl.nodeType + "<br>";
results.innerHTML += "<b>2.ii Node type of lastName child node:</b> " + lastNameEl.firstChild.nodeType + "<br>";

//  2.iii Update child node of element having id “lastName”
lastNameEl.firstChild.nodeValue = "Last Name: Khan";
results.innerHTML += "<b>2.iii Updated lastName:</b> " + lastNameEl.innerHTML + "<br>";

// 2.iv Get first and last child of id “main-content” 
results.innerHTML += "<b>2.iv First child of main-content:</b> " + mainContent.firstElementChild.innerHTML + "<br>";
results.innerHTML += "<b>2.iv Last child of main-content:</b> " + mainContent.lastElementChild.innerHTML + "<br>";

// 2.v Get next and previous siblings of id “lastName” 
results.innerHTML += "<b>2.v Next sibling of lastName:</b> " + lastNameEl.nextElementSibling.innerHTML + "<br>";
results.innerHTML += "<b>2.v Previous sibling of lastName:</b> " + lastNameEl.previousElementSibling.innerHTML + "<br>";

//  2.vi Get parent node and node type of element having id “email” 
let emailEl = document.getElementById("email");
results.innerHTML += "<b>2.vi Parent node of email element:</b> " + emailEl.parentNode.id + "<br>";
results.innerHTML += "<b>2.vi Node type of email element:</b> " + emailEl.nodeType + "<br>";