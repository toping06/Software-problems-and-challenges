function repeatStr(n, s) {
  let empty = "";
  for (let i = 0; i < n; i++) {
    empty += s;
  }
  return empty;
}
console.log(repeatStr(6, "i"));
