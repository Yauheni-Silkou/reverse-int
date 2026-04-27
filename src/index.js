module.exports = function reverse(n) {
  const num = n < 0 ? -n : n;
  return +[...`${num}`].reverse().join('');
};
