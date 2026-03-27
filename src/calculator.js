/**
 * Node.js CLI Calculator
 *
 * Supported operations (as shown on the calculator):
 *   + Addition       – adds two numbers
 *   - Subtraction    – subtracts the second number from the first
 *   * Multiplication – multiplies two numbers
 *   / Division       – divides the first number by the second
 *                      (division by zero is handled gracefully)
 *   % Modulo         – returns the remainder of dividing a by b
 *                      (modulo by zero is handled gracefully)
 *   ** Exponentiation – raises a to the power of b
 *   sqrt Square Root  – returns the square root of a number
 *                       (negative numbers are handled gracefully)
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
    return "Error: Modulo by zero is not allowed.";
  }
  return a % b;
}

// Exponentiation: raises a to the power of b
function exponentiate(a, b) {
  return Math.pow(a, b);
}

// Square root: returns the square root of a number
function squareRoot(a) {
  if (a < 0) {
    return "Error: Square root of a negative number is not allowed.";
  }
  return Math.sqrt(a);
}

async function main() {
  const rl = createInterface();
  console.log("=== Node.js CLI Calculator ===");
  console.log("Supported operations: +, -, *, /, %, **, sqrt\n");

  const input = (await ask(rl, "Enter expression (e.g. 2 + 3) or sqrt <num>: ")).trim();

  // Handle sqrt as a unary operation
  if (input.toLowerCase().startsWith("sqrt")) {
    const num = parseFloat(input.slice(4).trim());
    if (isNaN(num)) {
      console.log("Error: Invalid number.");
      rl.close();
      return;
    }
    const result = squareRoot(num);
    console.log(`\nResult: sqrt(${num}) = ${result}`);
    rl.close();
    return;
  }

  const num1 = parseFloat(await ask(rl, "Enter the first number: "));
  if (isNaN(num1)) {
    console.log("Error: Invalid number.");
    rl.close();
    return;
  }

  const operator = (await ask(rl, "Enter an operator (+, -, *, /, %, **): ")).trim();
  if (!["+", "-", "*", "/", "%", "**"].includes(operator)) {
    console.log("Error: Invalid operator. Please use +, -, *, /, %, or **.");
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
      result = exponentiate(num1, num2);
      break;
  }

  console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}`);
  rl.close();
}

// Export functions for testing; run CLI when executed directly
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, squareRoot };
