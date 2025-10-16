// we have random number not negtive
//return the number in new array with revers

function digitize(n) {
  let randomNumber = n.toString().split("").map((ele) => Number(ele)).reverse();
  return randomNumber;
 /*
 الخطوات 
 1:تحويل القيمة الرقمية الى نصية 
 2: تحويل النص الى مصفوفة 
 3: عمل map
 4: تحويل القيمة النصية الى رقمية باستعمال Number
 5: عكس المصفوفة باستخدام reverse
 */
}

console.log(digitize(30457));