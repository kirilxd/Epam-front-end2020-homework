function isBigger(first, second) {
  return first > second;
}
function getDifference(first, second) {
  return isBigger(first, second) ? first - second : second - first;
}
getDifference(5, 8);
