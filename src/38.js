function calculateSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function sortArray(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}
