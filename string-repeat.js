// Make function take tow parameters => string & number
//the number just be Not negative
// make loop of string
// retrun string * n
function repeatStr(n, s) {
    let empty = ''
  for (let i = 0; i < n; i++) {
    empty += s
  }
  return empty;
}
console.log(repeatStr(6, "i"));
