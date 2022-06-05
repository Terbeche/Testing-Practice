function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('string length is less out of range!');
  } else {
    return string.length;
  }
}
module.exports = stringLength;
