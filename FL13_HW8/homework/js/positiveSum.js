function positiveSum(arr) {
  return arr.filter((element) => element > 0).reduce((a, b) => a + b);
}
positiveSum([0, -3, 5, 7]);
