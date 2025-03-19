
function getRandomCode() {
  let code = '';
  const minLength = 5;
  const maxLength = 10;

  // generate a random length for the code
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  // generate a random string of characters
  for (let i = 0; i < length; i++) {
    code += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  return code;
}