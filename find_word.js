function findLongestWord(str) {
  var words = str.split(/\W+/);
  var largest = words.sort((a,b) => b.length-a.length);
  return largest[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");