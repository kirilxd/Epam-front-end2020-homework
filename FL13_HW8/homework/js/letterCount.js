function letterCount(word, matchString) {
  return (word.match(new RegExp(matchString, 'gi')) || []).length;
}
letterCount('Maggy', 'g');
