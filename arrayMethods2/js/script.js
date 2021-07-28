const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie
const findSpiderMan = function (superheroes) {
    return superheroes.find(function (person) {
        return person.name === "Spiderman";
    });
};
console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


const doubleArrayValues = function (array) {
    let newArray = [];
    array.forEach(num => {
        newArray.push(num * 2);
    });
    return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

const containsNumberBiggerThan10 = function (array) {
    return array.some(num => {
        return num > 10;
    });

}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false


const isItalyInTheGreat7 = function (countries) {
    return countries.includes("Italy");
};

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true


const tenfold = function (array) {
    let newArray = [];
    array.forEach(num => {
        newArray.push(num * 10);
    });
    return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]


const isBelow100 = function (array) {
    return array.every(num => {
        return num < 100;
    });

}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false


const bigSum = function (array) {
    return array.reduce((addedNumber, nextNumber) => {
        return addedNumber + nextNumber;
    });
};

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118