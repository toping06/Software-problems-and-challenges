function doubleChar(str) {
  return str
    .split("")
    .map((ele) => ele + ele)
    .join("");
}
console.log(doubleChar("Hello World"));
