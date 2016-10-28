function crazycase(str) {
  if (typeof str !== 'string') throw new Error('Input must be string.');

  return str.toLowerCase().split('').map((char, i) => {
    return i % 2 ? char.toUpperCase() : char;
  }).join('');
}

module.exports = crazycase;
