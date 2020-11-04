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
// var array = [
//   [
//     ["firstName", "Vasanth"],
//     ["lastName", "Raja"],
//     ["age", 24],
//     ["role", "JSWizard"],
//   ],
//   [
//     ["firstName", "Sri"],
//     ["lastName", "Devi"],
//     ["age", 28],
//     ["role", "Coder"],
//   ],
// ];

// function transformEmployeeData(arr) {
//   var transformEmployeeList = [];

//   var newObject = {};

//   for (i = 0; i < array; i++) {
//     for (j = 0; j < i; j++) {
//       newObject = {};
//       newObject[array[i][j][0]] = array[i][j][1];

//       //console.log(arr[i][j][0], arr[i][j][1]);
//       transformEmployeeList.push(newObject);
//     }
//   }
//   console.log(transformEmployeeList);
// }

// transformEmployeeData(array);
