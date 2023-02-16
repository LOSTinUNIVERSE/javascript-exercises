let sumoOfTwo = 0
const add = function(a,b) {
return sumoOfTwo = a + b	
};

console.log(add(2,6));

const subtract = function(a,b) {
	let result = 0
   result = a - b
  return result
  };
 console.log(subtract(10,4))

const sum = function([...array]) {
  let result = 0
  for(let item of array){
     result += item
    }
    return result
};
console.log(sum ([1,3,5,7,9]))

const multiply = function(array) {
 let summary = array.reduce ((accumulator, currentValue) =>
 accumulator * currentValue, 1 )  
 return summary
};
console.log(multiply([2,4,6,8,10,12,14]));

const power = function(a, b) {
  let init = 0
  init = Math.pow(a, b)
	return init
};
console.log(power(4,3));

const factorial = function(a) {
let result = 1
  for (let i = a -1 ; i >= 1; i-- ){
    result += result * i
  }
  return result 
}
console.log(factorial(10));
//   let array = []
//   for (let i = a ; i >= 1; i-- ){
//     array += i
// }; 
// console.log(array);
// return array 

  // Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
