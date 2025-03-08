const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
function generateCode() {
  const code = [];
  for (let i = 0; i < 20; i++) {
    code.push(`const ${getRandomArbitrary(97, 123)} = ${getRandomArbitrary(1, 10)};`);
  }
  return code.join("");
}
generateCode();
