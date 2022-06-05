const stringReverse = require('./reverseString.js');

test('return a reversed string', () => {
  expect(stringReverse('hello')).toBe('olleh');
  expect(stringReverse("I'm here")).toBe("ereh m'I");
  expect(stringReverse('123456789')).toBe('987654321');
});
