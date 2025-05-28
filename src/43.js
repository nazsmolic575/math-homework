function addNumbers(a, b) {
  return a + b;
}

function calculateSum() {
  const num1 = parseInt(prompt("Enter first number: "), 10);
  const num2 = parseInt(prompt("Enter second number: "), 10);
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter valid numbers.");
    return;
  }
  
  const sum = addNumbers(num1, num2);
  document.getElementById('result').innerText = `The sum is: ${sum}`;
}

calculateSum();
