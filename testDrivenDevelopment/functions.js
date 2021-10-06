const addOne = function(numbers) { 
  return numbers.map(number => number + 1) 
}

module.exports = addOne;



const getWordLengths = function(someWords) {
  return someWords.map(words => words.length)
}

module.exports = getWordLengths;



const findNeedle = function(words, index) {
  return words.indexOf(index)
};

module.exports = findNeedle;


