var array = [1, 2, 3, 4, 5, 6],
  k = 3;
(() => {
  for (let i = 1; i <= k; i++) {
    array.unshift(array.pop());
  }
  console.log(array);
})();
