function getRandomMathHomeworkProblem() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  return `What is ${num1} x ${num2}`;
}
