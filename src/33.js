function randomFunction() {
  // This is just an example of how to randomly choose a function.
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return "add";
  } else if (randomNumber >= 0.5 && randomNumber <= 0.8) {
    return "subtract";
  } else if (randomNumber > 0.8) {
    return "multiply";
  }
}

function randomOperation() {
  const operator = randomFunction();
  
  switch(operator) {
    case 'add':
      console.log('Adding 1 + 2');
      break;
    case 'subtract':
      console.log('Subtracting 3 - 4');
      break;
    case 'multiply':
      console.log('Multiplying 5 * 6');
      break;
    default:
      console.log(`Unknown operator: ${operator}`);
  }
}

randomOperation();
