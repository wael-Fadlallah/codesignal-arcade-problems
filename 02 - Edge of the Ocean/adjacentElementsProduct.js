// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// solution
function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  let pair = [];
  for (let i = 0; i < inputArray.length; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > max) {
      max = product;
    }
  }

  return max;
}
