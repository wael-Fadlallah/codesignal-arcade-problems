// Given the string, check if it is a palindrome.
// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;

// solution
function checkPalindrome(inputString) {
  let reverse = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reverse += inputString[i];
  }

  return reverse === inputString;
}
