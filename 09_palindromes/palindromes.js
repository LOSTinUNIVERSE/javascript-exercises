const palindromes = function (string) {
let regExp = /[^A-Za-z0-9]/g
let lowRegExp = string.toLowerCase().replace(regExp,'')

let reverseString = lowRegExp.split('').reverse().join('')
return reverseString === lowRegExp
};
console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
