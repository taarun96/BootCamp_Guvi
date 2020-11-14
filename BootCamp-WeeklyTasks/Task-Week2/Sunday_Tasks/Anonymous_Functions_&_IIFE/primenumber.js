var output = function (array) {
  let i = 0;
  let num = 0;
  let prime = "";
  for (i = 1; i < array.length; i++) {
    let counter = 0;
    for (num = array[i]; num >= 1; num--) {
      if (array[i] % num === 0 && counter < 3) {
        counter = counter + 1;
      }
    }
    if (counter === 2) {
      prime = prime + array[i] + " ";
    }
  }

  console.log(prime);
};

output([4, 5, 6, 7, 8, 9, 22, 23, 25, 43]);
