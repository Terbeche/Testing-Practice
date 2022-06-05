function capitalize(string) {
  if (string[0] >= 'A' && string[0] <= 'Z') {
    throw new Error('Your string is already capitalized!');
  } else if (!(string[0] >= 'a' && string[0] <= 'z')) {
    throw new Error('Please enter a valide string');
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

module.exports = capitalize;
