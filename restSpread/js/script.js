const optellenRest = function(...args) {
    return args.reduce((acc,item) => {
            return acc + item;
    })
}

console.log(optellenRest(1,2,3,4,5,6)); // verwachte uitkomst: 21



const optellenSpread = function(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  const cijfers = [1, 2, 3];
  
  console.log(optellenSpread(...cijfers));
  // verwachte uitkomst: 6