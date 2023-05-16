var isSquare = function (n) {
  for (var x = 0; x <= n; x++) {
    if (x * x == n) return true;
  }
  return false;
};
