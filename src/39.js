function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error('除数不能为零');
  }
}

function square(x) {
  return x * x;
}

console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5
console.log(multiply(3, 4)); // 12
console.log(divide(10, 2)); // 5.0
console.log(square(3)); // 9
