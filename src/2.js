function getRandomMathCode() {
  let result = "";
  const operators = ["+", "-", "*", "/"];
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < 3; i++) {
    result += numbers[Math.floor(Math.random() * numbers.length)] + operators[Math.floor(Math.random() * operators.length)];
  }
  return result;
}
