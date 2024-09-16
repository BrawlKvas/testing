const sqrt = require("../src/sqrt");

describe("sqrt function tests", () => {
  test("calculates the square root of 2, 3, and 16", () => {
    expect(sqrt(4)).toBeCloseTo(2);
    expect(sqrt(3)).toBeCloseTo(1.732);
    expect(sqrt(16)).toBe(4);
  });

  test("throws an error for negative numbers -4 and -16", () => {
    expect(() => sqrt(-4)).toThrow(
      "Cannot calculate the square root of a negative number"
    );
    expect(() => sqrt(-16)).toThrow(
      "Cannot calculate the square root of a negative number"
    );
  });

  test("calculates the square root of 0", () => {
    expect(sqrt(0)).toBe(0);
  });

  test("calculates the square root of 2.25 and 0.25", () => {
    expect(sqrt(2.25)).toBeCloseTo(1.5);
    expect(sqrt(0.25)).toBe(0.5);
  });

  test("calculates the square root of 1e6 and 1e12", () => {
    expect(sqrt(1e6)).toBe(1000);
    expect(sqrt(1e12)).toBe(1e6);
  });

  test("throws an error when input is not a number", () => {
    expect(() => sqrt("string")).toThrow("The value must be a number");
    expect(() => sqrt({})).toThrow("The value must be a number");
    expect(() => sqrt([])).toThrow("The value must be a number");
    expect(() => sqrt(true)).toThrow("The value must be a number");
    expect(() => sqrt(null)).toThrow("The value must be a number");
    expect(() => sqrt(undefined)).toThrow("The value must be a number");
  });
});
