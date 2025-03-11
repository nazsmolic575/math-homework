const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const solveEquation = (a, b, c) => {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant > 0) {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  } else if (discriminant === 0) {
    return [(2 * c) / b, (2 * c) / b];
  } else {
    return [];
  }
};
