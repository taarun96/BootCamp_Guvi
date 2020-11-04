// Problem 2(5 mins) :
// Parsing an JSON object’s Keys:
// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
// Example Input:
// {name : ‘RajiniKanth’, age : 25, hasPets : true}
// Example Output:
// [‘name’, ‘age’, ‘hasPets’]
// Sample Function proto:

var obj = { name: "RajiniKanth", age: 33, hasPets: false };
function printAllKeys(obj) {
  // your code here
  let array = [];
  for (i = 0; i < Object.keys(obj).length; i++) {
    array.push(Object.keys(obj)[i]);
  }
  console.log(array);
}

printAllKeys(obj);
