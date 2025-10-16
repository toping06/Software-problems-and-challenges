function sumArray(array) {
  let container = array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((first, second) => first + second);
  return container;
}

console.log(sumArray([10, 15, 5, 6, 7, 4]));
