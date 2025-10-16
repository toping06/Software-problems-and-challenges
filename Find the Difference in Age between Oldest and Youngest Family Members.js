function differenceInAges(ages) {
  let minValue = Math.min(...ages);
  let maxValue = Math.max(...ages);
  let content = maxValue - minValue;
  return [
    `The Old Is ${maxValue} -- The Min Is ${minValue} -- The Defrnce Is ${content}`,
  ];
}

console.log(differenceInAges([34, 5, 76, 2, 45]));
