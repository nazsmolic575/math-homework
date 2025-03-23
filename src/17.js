function multiply(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Invalid input: both numbers must be integers.');
  }

  return a * b;
}

function add(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Invalid input: both numbers must be integers.');
  }

  return a + b;
}
