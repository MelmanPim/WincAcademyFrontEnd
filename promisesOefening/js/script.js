const testNum = num => {
    return new Promise((resolve, reject) => {
      if (num > 10) {
        resolve(num + ' is greater than 10');
      } else {
        reject(num + ' is less than 10');
      }
    });
};

testNum(9)
.then(result => console.log(result))
.catch(error => console.log(error));
  
testNum(11)
.then(result => console.log(result))
.catch(error => console.log(error));



const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if (
      words.every(word => {
        return typeof word === 'string';
      })
    ) {
      resolve(
        sortWords(
          words.map(word => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject('Not a string!');
    }
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject('strings only!');
    }
  });
};

const theseAreWords = ['cucumber', 'tomatos', 'avocado'];

makeAllCaps(theseAreWords)
  .then(sortWords(theseAreWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

const theseAreNotWords = ['cucumber', 44, true];

makeAllCaps(theseAreNotWords)
  .then(sortWords(theseAreNotWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));
