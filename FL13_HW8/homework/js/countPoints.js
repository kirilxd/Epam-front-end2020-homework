function isBigger(first, second) {
  return first > second;
}

function countPoints(arr) {
  let score = 0;
  arr.forEach((element) => {
    let matchResult = element.split(':');
    if (isBigger(matchResult[0], matchResult[1])) {
      score += 3;
    } else if (matchResult[0] === matchResult[1]) {
      score += 1;
    } else {
      score += 0;
    }
  });
  return score;
}
countPoints([
  '3:1',
  '1:0',
  '0:0',
  '1:2',
  '4:0',
  '2:3',
  '1:1',
  '0:1',
  '2:1',
  '1:0',
]); //=>17
