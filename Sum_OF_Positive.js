// Sum Of Positive
function positiveSum(arr) {
  let container = arr
    .filter((ele) => ele > 0)
    .reduce((first, second) => first + second);
  return container;
}

console.log(positiveSum([10, -20, 10, -2]));
