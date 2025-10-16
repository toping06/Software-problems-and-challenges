function basicOp(operation, value1, value2) {
  //Code
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  } else {
    return `This is net Operation vaield`;
  }
}

console.log(basicOp("+", 5, 5));
