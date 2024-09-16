function sqrt(number) {
  if (typeof number !== "number") {
    throw new Error("The value must be a number");
  }

  if (number < 0) {
    throw new Error("Cannot calculate the square root of a negative number");
  }

  return Math.sqrt(number);
}

module.exports = sqrt;
