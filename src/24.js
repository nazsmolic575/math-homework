function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
let randomNumber = getRandomInt(10, 20);
console.log(randomNumber); // Output: A random number between 10 and 20
