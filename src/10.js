const getRandomMathProblem = () => {
  const numbers = [2, 5, 10];
  const operators = ["+", "-"];
  const problem = `${numbers[0]} ${operators[0]} ${numbers[1]}`;
  return problem;
};
