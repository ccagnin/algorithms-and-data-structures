function findMissingNumber(arr) {
  let lastNumber = arr.length + 1; // o último número do array sempre será o tamanho do array + 1
  let sum = (lastNumber * (lastNumber + 1)) / 2; // a soma de todos os números de 1 até n é n * (n + 1) / 2

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i]; // subtrai cada número do array da soma
  }

  return sum; // o que sobrar será o número faltante
}

console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // 6
