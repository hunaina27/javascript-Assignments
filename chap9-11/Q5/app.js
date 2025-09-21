
// Question 5
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true"); //Condition: 5 === 5 true
}
var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true"); // Condition: 82 === 83 false
}
var c = 12;
if (c++ === 13){
  alert("condition 1 is true"); //false
}
if (c === 13){
  alert("condition 2 is true"); //true
}
if (++c < 14){
  alert("condition 3 is true"); //fale
}
if(c === 14){
  alert("condition 4 is true"); //true
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals"); //Condition true
}
if (true){
  alert("True"); //true
}
if (false){
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat"); //true
}
