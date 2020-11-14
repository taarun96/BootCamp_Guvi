var output = function (arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(arr.reduce(reducer));
};

output([1, 2, 3, 4]);
