//Give me string
// make new string while every word double
// the uppercase be upercase
// the lowercase be lowercase

function doubleChar(str) {
  // Your code here
  //First
  //   let newString = "";
  //   let doubleSplit = str.split("")
  //   for (let i = 0; i < doubleSplit.length; i++ ) {
  //     doubleSplit[i] += doubleSplit[i]
  //   }
  //   return doubleSplit.join("");

  // Second

  return str
    .split("")
    .map((ele) => ele + ele)
    .join("");
}
console.log(doubleChar("Hello World"));
