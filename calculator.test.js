const Calculator = require('./calculator.js');

const calculator = new Calculator();

describe('my calculator', () => {
  test('adding', () => {
    expect(calculator.add(5, 6)).toBe(11);
    expect(calculator.add(0, -5)).toBe(-5);
    expect(calculator.add(-5, -6)).toBe(-11);
  });

  test('substracting', () => {
    expect(calculator.substract(5, 6)).toBe(-1);
    expect(calculator.substract(0, -5)).toBe(5);
    expect(calculator.substract(-5, -6)).toBe(1);
  });

  test('dividing', () => {
    expect(calculator.divide(5, 6)).toBeCloseTo(0.83);
    expect(calculator.divide(0, -5)).toBe(-0);
    expect(calculator.divide(-5, 2)).toBe(-2.5);
  });

  test('multiplying', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
    expect(calculator.multiply(0, -5)).toBe(-0);
    expect(calculator.multiply(-5, 2)).toBe(-10);
  });
});
