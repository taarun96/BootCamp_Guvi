var array1 = [1, 2, 3, 4, 5],
  array2 = [6, 7, 8, 9, 10];
(() => {
  var sortedarray = array1.concat(array2).sort((x, y) => x - y);
  var mid = +(sortedarray.length / 2);
  var output =
    sortedarray.length % 2 === 0
      ? +((sortedarray[mid - 1] + sortedarray[mid]) / 2)
      : sortedarray[mid];
  console.log(output);
})();
