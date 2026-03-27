/**
 * Node.js CLI Calculator
 *
 * Supported operations (as shown on the calculator):
 *   + Addition       – adds two numbers
 *   - Subtraction    – subtracts the second number from the first
 *   * Multiplication – multiplies two numbers
 *   / Division       – divides the first number by the second
 *                      (division by zero is handled gracefully)
 *   % Modulo         – returns the remainder of division
 *   ** Exponentiation – raises the first number to the power of the second
 *   sqrt Square root – returns the square root of a number
 */

const readline = require("readline");

function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// Addition: adds two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: subtracts b from a
function subtract(a, b) {
  return a - b;
}

// Multiplication: multiplies two numbers
function multiply(a, b) {
  return a * b;
}

// Division: divides a by b with division-by-zero check
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a % b;
}

// Exponentiation: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: returns the square root of n with error handling for negatives
function squareRoot(n) {
  if (n < 0) {
    return "Error: Cannot calculate the square root of a negative number.";
  }
  return Math.sqrt(n);
}

async function main() {
  const rl = createInterface();
  console.log("=== Node.js CLI Calculator ===");
  console.log("Supported operations: +, -, *, /, %, **, sqrt\n");

  const num1 = parseFloat(await ask(rl, "Enter the first number: "));
  if (isNaN(num1)) {
    console.log("Error: Invalid number.");
    rl.close();
    return;
  }

  const operator = (await ask(rl, "Enter an operator (+, -, *, /, %, **, sqrt): ")).trim();
  if (!["+", "-", "*", "/", "%", "**", "sqrt"].includes(operator)) {
    console.log("Error: Invalid operator. Please use +, -, *, /, %, **, or sqrt.");
    rl.close();
    return;
  }

  // Square root only needs one number
  if (operator === "sqrt") {
    const result = squareRoot(num1);
    console.log(`\nResult: sqrt(${num1}) = ${result}`);
    rl.close();
    return;
  }

  const num2 = parseFloat(await ask(rl, "Enter the second number: "));
  if (isNaN(num2)) {
    console.log("Error: Invalid number.");
    rl.close();
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
  }

  console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}`);
  rl.close();
}

// Export functions for testing; run CLI when executed directly
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
