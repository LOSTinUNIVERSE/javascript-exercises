

const convertToCelsius = function( fahrenheit) {
    let resultOfConvert = (fahrenheit - 32) * (5/9)
    let rounded = resultOfConvert.toFixed(1)
    let numbered = +rounded
    return numbered
  }

  console.log(convertToCelsius(-100));


const convertToFahrenheit = function( celsius) {
let Fresult = (celsius * (9/5) + 32)
let roundedF = Fresult.toFixed(1)
let numberedF = +roundedF
return numberedF
}
console.log(convertToFahrenheit(-10));
;


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
