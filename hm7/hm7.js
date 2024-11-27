//Task 1
function removeSpaces(text) {
  return text.replace(/^\s+|\s+$/g, "");
}

console.log(removeSpaces("   textWithSpaces   "));
console.log(removeSpaces("   more text with spaces   "));

//Task 2
function findCapitalWords(sentence) {
  const regex = /\b[A-Z][a-z]*\b/g;
  const capitalWords = sentence.match(regex);
  return capitalWords || [];
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
console.log(findCapitalWords("no capital letter here"));

//Task 3
function getLetterCount(text) {
  const letterCount = {};
  const letters = text.toLowerCase().match(/[a-z]/g);

  if (letters) {
    for (const letter of letters) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }

  return letterCount;
}

console.log(getLetterCount("banana"));
console.log(getLetterCount("The short text"));
