function reverseArray(array) {
  const size = array.length;
  const reversedArray = [];

  for (let i = size - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

function reverseArrInPlace(array) {
  const size = array.length;

  for (let i = 0; i < size / 2; i++) {
    const temp = array[i];
    array[i] = array[size - 1 - i];
    array[size - 1 - i] = temp;
  }

  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrInPlace([1, 2, 3, 4, 5]));

