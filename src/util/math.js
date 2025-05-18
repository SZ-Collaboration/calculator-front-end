export function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("Both parameters must be numbers");
  }
  return x + y;
}

export function subtract(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("Both parameters must be numbers");
  }
  return x - y;
}

export function multiply(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("Both parameters must be numbers");
  }
  return x * y;
}

export function divide(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("Both parameters must be numbers");
  }
  return x / y;
}
