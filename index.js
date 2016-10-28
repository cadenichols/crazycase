function crazycase(str) {
  return str.toLowerCase().split('').map((char, i) => {
    return i % 2 ? char.toUpperCase() : char;
  }).join('');
}

module.exports = crazycase;
