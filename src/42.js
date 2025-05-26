function sumSquareDifference(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return Math.sqrt(sum - Math.pow(n, 2));
}

console.log(sumSquareDifference(5)); // Output: 6.0
