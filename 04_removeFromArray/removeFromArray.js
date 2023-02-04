

const removeFromArray = function(numbers, ...Arg) {
return numbers.filter(x => !Arg.includes(x))}

console.log(removeFromArray ([1, 2, 3], "1", 3)) 

// Do not edit below this line
module.exports = removeFromArray;
