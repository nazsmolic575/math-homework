function solveEquation(a, b, c) {
  const determinant = Math.sqrt(b ** 2 - 4 * a * c);
  if (determinant < 0) {
    return "No solution";
  } else {
    return [(-b + determinant) / (2 * a), (-b - determinant) / (2 * a)];
  }
}
