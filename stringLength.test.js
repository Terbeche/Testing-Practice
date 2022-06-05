const stringLength = require('./stringLength.js');

test('return a string length', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength("I'm here")).toBe(8);
  expect(() => stringLength('')).toThrow('string length is less out of range!');
  expect(() => stringLength('This string is too long')).toThrow('string length is less out of range!');
});
