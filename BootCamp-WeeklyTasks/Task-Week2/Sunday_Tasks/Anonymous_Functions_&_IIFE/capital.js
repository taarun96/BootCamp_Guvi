var output = function (arr) {
  var array2 = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  console.log(array2);
};

output(["where", "there", "is", "a", "will", "there", "is", "a", "way"]);
