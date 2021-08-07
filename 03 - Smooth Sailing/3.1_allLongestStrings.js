// Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(inputArray) {
  const new_array = [];
  let max = 0;
  inputArray.forEach((element) => {
    if (element.length > max) max = element.length;
  });
  inputArray.forEach((element) => {
    if (element.length === max) new_array.push(element);
  });
  return new_array;
}

const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(inputArray));
