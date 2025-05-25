function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function calculateResult(...args) {
  const result = args.reduce((acc, current) => acc + current, 0);
  console.log(result);
}
