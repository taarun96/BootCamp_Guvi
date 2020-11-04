// Problem 4( 5 mins):
// Parsing a list and transform the first and last elements of it:
// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.
// Input (Array):
// var array = [“GUVI”, “I”, “am”, “Geek”];
// Output:
// var object = {
// GUVI : “Geek”
// }
// Sample Function proto:

var array = ["GUVI", "I", "am", "a geek"];

function transformFirstAndLast(arr) {
  newObject = {};
  let a = array[array.length - 1].split(" ");
  newObject[array[0]] = a[1];
}
transformFirstAndLast(array);
console.log(newObject);
