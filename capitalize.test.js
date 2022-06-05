const capitalize = require('./capitalize');

test('return a reversed string', () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("i'm here")).toBe("I'm here");
  expect(() => capitalize("123456789")).toThrow('Please enter a valide string');
  expect(() => capitalize("Hello")).toThrow('Your string is already capitalized!');
  expect(() => capitalize("_hello")).toThrow('Please enter a valide string');
  expect(() => capitalize(" hello")).toThrow('Please enter a valide string');

});
