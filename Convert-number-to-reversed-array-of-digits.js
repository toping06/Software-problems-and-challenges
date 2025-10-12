// we have random number not negtive
//return the number in new array with revers

function digitize(n) {
  let randomNumber = n.toString().split("").map((ele) => Number(ele)).reverse();
  return randomNumber;
}

console.log(digitize(30457));