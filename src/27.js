function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(11)); // Output: true
console.log(isPrime(14)); // Output: false
