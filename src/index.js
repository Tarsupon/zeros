module.exports = function getZerosCount(number) {
  // your implementation
  let zeroCount = 0;
  for (var i = 5; number / i >= 1; i = i * 5)
    zeroCount += Math.floor(number/i);
  return zeroCount;
}
