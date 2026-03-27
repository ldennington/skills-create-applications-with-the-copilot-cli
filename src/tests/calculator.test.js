const { add, subtract, multiply, divide, modulo, exponentiate, squareRoot } = require("../calculator");

// Tests based on image examples: 2+3, 10-4, 45*2, 20/5

describe("add", () => {
  test("2 + 3 = 5 (image example)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds negative numbers", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

describe("subtract", () => {
  test("10 - 4 = 6 (image example)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test("subtracts a number from itself", () => {
    expect(subtract(42, 42)).toBe(0);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe("multiply", () => {
  test("45 * 2 = 90 (image example)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies by one", () => {
    expect(multiply(99, 1)).toBe(99);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(3, -7)).toBe(-21);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

describe("divide", () => {
  test("20 / 5 = 4 (image example)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test("divides a negative by a positive", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("divides two negative numbers", () => {
    expect(divide(-20, -4)).toBe(5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one", () => {
    expect(divide(42, 1)).toBe(42);
  });

  test("division by zero returns an error message", () => {
    expect(divide(10, 0)).toBe("Error: Division by zero is not allowed.");
  });

  test("division of negative number by zero returns an error message", () => {
    expect(divide(-5, 0)).toBe("Error: Division by zero is not allowed.");
  });

  test("division of zero by zero returns an error message", () => {
    expect(divide(0, 0)).toBe("Error: Division by zero is not allowed.");
  });
});

describe("modulo", () => {
  test("10 % 3 = 1", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(20, 5)).toBe(0);
  });

  test("modulo with negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("modulo with negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("modulo with decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("modulo of zero by a number is zero", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("modulo by zero returns an error message", () => {
    expect(modulo(10, 0)).toBe("Error: Modulo by zero is not allowed.");
  });

  test("modulo of zero by zero returns an error message", () => {
    expect(modulo(0, 0)).toBe("Error: Modulo by zero is not allowed.");
  });
});

describe("exponentiate", () => {
  test("2 ** 3 = 8", () => {
    expect(exponentiate(2, 3)).toBe(8);
  });

  test("raises a number to the power of zero", () => {
    expect(exponentiate(5, 0)).toBe(1);
  });

  test("raises a number to the power of one", () => {
    expect(exponentiate(7, 1)).toBe(7);
  });

  test("raises a negative number to an even power", () => {
    expect(exponentiate(-3, 2)).toBe(9);
  });

  test("raises a negative number to an odd power", () => {
    expect(exponentiate(-2, 3)).toBe(-8);
  });

  test("raises a number to a fractional power", () => {
    expect(exponentiate(4, 0.5)).toBeCloseTo(2);
  });

  test("raises a decimal to a power", () => {
    expect(exponentiate(2.5, 2)).toBeCloseTo(6.25);
  });

  test("zero to the power of zero is one", () => {
    expect(exponentiate(0, 0)).toBe(1);
  });
});

describe("squareRoot", () => {
  test("square root of 9 is 3", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("square root of 4 is 2", () => {
    expect(squareRoot(4)).toBe(2);
  });

  test("square root of 2 is approximately 1.414", () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test("square root of 0 is 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of 1 is 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("square root of a decimal number", () => {
    expect(squareRoot(0.25)).toBeCloseTo(0.5);
  });

  test("square root of a large number", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  test("square root of a negative number returns an error message", () => {
    expect(squareRoot(-1)).toBe("Error: Square root of a negative number is not allowed.");
  });

  test("square root of a negative decimal returns an error message", () => {
    expect(squareRoot(-4.5)).toBe("Error: Square root of a negative number is not allowed.");
  });
});
