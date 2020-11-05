// Problem 6 (10 mins):
// Parsing a list of lists and convert into a JSON object:
// Write a function called “transformGeekData” that transforms some set of data from one format to another.
// Input (Array):
// var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
// Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]
// Sample Function proto:
var array = [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];

function transformEmployeeData(arr) {
  var transformEmployeeList = [];

  var newObject = {};

  for (let i in array) {
    let newObject = {};
    let subArray = array[i];
    //console.log(`subArray: ${i} ${subArray}`);
    for (let j in subArray) {
      let newArray = subArray[j];
      //  console.log(`newArray: ${j} ${newArray} `);
      newObject[newArray[0]] = newArray[1];
      //console.log(newObject);
    }
    transformEmployeeList.push(newObject);
  }
  console.log(transformEmployeeList);
}

transformEmployeeData(array);
