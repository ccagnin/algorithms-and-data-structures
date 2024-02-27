function moveZerosToEnd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      arr.push(0)
    }
  }
  return arr
}

console.log(moveZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]))


function moveNumWithoutSpliceMethod(arr, num) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== num) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = num;
  }

  return arr;
}

console.log(moveNumWithoutSpliceMethod([1, 2, 0, 4, 3, 0, 5, 0, 3, 6, 7, 8], 3))
