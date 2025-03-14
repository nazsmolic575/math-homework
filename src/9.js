function getRandomJsCode() {
    // Math.random returns a number between 0 and 1
    const rand = Math.random();
    // This will generate a random number between 1 and 10
    const num = parseInt(rand * 10);
    return `The random number is ${num}`;
}
