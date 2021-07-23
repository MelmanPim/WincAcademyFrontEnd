const addTheWordCool = ["nice", "awesome", "tof"];
addTheWordCool.push("cool");

console.log("Add cool:", addTheWordCool);
// resultaat: ["nice", "awesome", "tof", "cool"]


const fruits = ['appels', 'peren', 'citroenen']
console.log(fruits.length) // 3


const selectBelgiumFromBenelux = ['Belgie', 'Nederland', 'Luxemburg']
console.log(selectBelgiumFromBenelux[0]);
// resultaat: "Belgie"

const animals = ["Haas", "Cavia", "Kip", "Schildpad"];

console.log(animals[animals.length - 1]);
// resultaat: "Schildpad"


const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    console.log(presidents.slice(1));
}

const impeachTrumpSplice = function (array) {
    console.log(presidents.splice(1, 3));
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


const stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];

console.log(stringsTogether.join(" "));
//resultaat: "Winc Academy is leuk ;-}"

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1.concat(array2));
  // resultaat: [1,2,3,4,5,6]
