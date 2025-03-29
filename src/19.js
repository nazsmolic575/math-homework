function getRandomInt(min, max) {
    min = Math.ceil(Math.min(max, 100));
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(50, 200)); // Example usage: get a random number between 50 and 200
