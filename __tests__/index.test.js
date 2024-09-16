// solveQuadraticEquation.test.js
const solveQuadraticEquation = require("../src/index");

describe("solveQuadraticEquation", () => {
  test("Должен вернуть одинаковые значения корней, если дискриминант равер 0", () => {
    const result = solveQuadraticEquation(1, -2, 1);
    expect(result.x1).toBe(1);
    expect(result.x2).toBe(1);
  });

  test("Должен вернуть null для обоих корней, если любой аргумент не является числом", () => {
    const result = solveQuadraticEquation("asds", 2, 3);
    expect(result.x1).toBeNull();
    expect(result.x2).toBeNull();
  });

  test("Должен вернуть два действительных корня, если дискриминант положительный", () => {
    const result = solveQuadraticEquation(1, -3, 2);
    expect(result.x1).toBe(2);
    expect(result.x2).toBe(1);
  });

  test("Должен вернуть null для обоих корней, если дискриминант отрицательный", () => {
    const result = solveQuadraticEquation(1, 2, 3);
    expect(result.x1).toBeNull();
    expect(result.x2).toBeNull();
  });
});
