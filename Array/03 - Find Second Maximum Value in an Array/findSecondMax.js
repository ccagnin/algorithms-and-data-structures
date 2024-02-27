function findSecondMaximum(arr) {
  let max = arr[0];
  let secondMax = arr[0];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    }
    if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

console.log(findSecondMaximum([33, 45, 23, 56, 78, 90]));
