function opposite(...number) {
  //your code here
  return number.map(function (ele) {
    return -ele;
  });
}

console.log(opposite([5]));
