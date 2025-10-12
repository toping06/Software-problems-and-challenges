// Check if Empty Value Return 0
// Find the Heighes Number
// Find the Lowest Number
// Filter the Array
// Sum all Numbers in the Array



 //This Is Wrong
  //   if (array === null) return 0;
  //   return array
  //     .filter((ele) => ele !== Math.max(...array) && ele !== Math.min(...array))
  //     .reduce((first, second) => first + second);

  // let maxValue = Math.max(...array);
  // let minValue = Math.min(...array);
  // let filterValueNumber = array
  //   .filter((ele) => ele !== maxValue && ele !== minValue)
  //   .reduce((first, second) => first + second);
  // return filterValueNumber;

function sumArray(array) {
  let container = array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((first, second) => first + second);
  return container;
 
}

console.log(sumArray([10, 15, 5, 6, 7, 4]));
