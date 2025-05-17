function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error('Divide by zero error');
    }
    return a / b;
}

console.log(addNumbers(2, 3)); // Output: 5
console.log(subtractNumbers(10, 4)); // Output: 6
console.log(multiplyNumbers(7, 2)); // Output: 14
console.log(divideNumbers(8, 0)); // Output: Error
