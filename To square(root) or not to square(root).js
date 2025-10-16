function squareOrSquareRoot(array) {
  return array.map((ele) => {
    let root = Math.sqrt(ele);
    if (Number.isInteger(root)) {
      return root;
    } else {
      return ele * ele;
    }
  });
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
