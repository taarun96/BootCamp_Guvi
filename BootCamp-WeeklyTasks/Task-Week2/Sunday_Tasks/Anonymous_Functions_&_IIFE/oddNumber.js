var output = function (arr) {
  let out = arr.filter((n) => n % 2 !== 0);
  console.log(out);
};
output([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
