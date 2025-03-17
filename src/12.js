function getRandomMathHomeworkCode() {
  const operations = ['+', '-', '*', '/'];
  const numbers = [10, 20, 30, 40];
  const mathProblems = [];
  for (let i = 0; i < 5; i++) {
    mathProblems.push(`${numbers[i]} ${operations[i % 4]} ${numbers[(i + 1) % 4]}`);
  }
  return mathProblems[Math.floor(Math.random() * mathProblems.length)];
}
