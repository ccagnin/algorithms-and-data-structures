function checkIfStringIsPolindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(checkIfStringIsPolindrome('madam')); // true

function checkIfStringIsPolindromeWithoutReverseMethod(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(checkIfStringIsPolindromeWithoutReverseMethod('madam')); // true


function checkIfStringIsPolindromeWithoutReverseMethod2(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(checkIfStringIsPolindromeWithoutReverseMethod2('madam')); // true
