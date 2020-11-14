// prints all the pallindromes
var array = [12, 11, 33, 45, 678, 121, "pop", "hello"];
(() => {
  var b = array.reduce((accumulator, item) => {
    let val = item.toString();
    let i = 0,
      j = val.length - 1;
    while (i <= j) {
      if (val[i] !== val[j]) return accumulator;
      i++;
      j--;
    }
    accumulator.push(item);
    return accumulator;
  }, []);
  console.log(b);
})();
