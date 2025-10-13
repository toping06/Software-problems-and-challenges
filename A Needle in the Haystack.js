function findNeedle(haystack) {
  // your code here
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }

//    let find = haystack.indexOf("needle");
//   return `found the needle at position ${find}`;  
}
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
