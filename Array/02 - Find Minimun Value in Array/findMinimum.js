function findMinimunValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMinimunValue([8, 5, 6, 0, 8, 9, 3]));
