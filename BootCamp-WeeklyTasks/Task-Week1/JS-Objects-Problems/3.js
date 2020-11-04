// Problem 3( 7–9 mins):
// Parsing an JSON object and convert it to a list:
// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
// Input (Object):
// var object = {name: “ISRO”, age: 35, role: “Scientist”};
// Output:
// [[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]
// Sample Function proto:

var obj = { name: "ISRO", age: 35, role: "Scientist" };
function convertListToObject(obj) {
  // your code here
  let array = [];
  for (let i of Object.entries(obj)) {
    array.push(i);
  }
  console.log(array);
}
convertListToObject(obj);
