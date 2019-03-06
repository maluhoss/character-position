function countLetters(phrase) {
var lettersCount = {}
for (i = 0; i < phrase.length; i++) {
  var letter = phrase[i];
  //console.log("letter", i, " is ", letter);
  if (lettersCount[letter] === undefined) {
      lettersCount[letter] = [i];
  } else {
    lettersCount[letter].push(i); // lettersCount[letter] = lettersCount[letter] + 1
  }
  //console.log("lettersCount is now", lettersCount);
}
delete lettersCount[" "]
return lettersCount;
}console.log(countLetters("lighthouse in the house"));