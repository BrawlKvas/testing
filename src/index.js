function solveQuadraticEquation(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return { x1: null, x2: null };
  }
  const d = b * b - 4 * a * c;
  if (d < 0) {
    return { x1: null, x2: null };
  }
  const sqrtD = Math.sqrt(d);
  const x1 = (-b + sqrtD) / (2 * a);
  const x2 = (-b - sqrtD) / (2 * a);
  return { x1, x2 };
}

module.exports = solveQuadraticEquation;
