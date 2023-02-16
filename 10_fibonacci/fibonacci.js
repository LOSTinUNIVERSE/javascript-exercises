const fibonacci = function(num) {
    num = Number(num)
    if (num < 1){
        return "OOPS"
    }
let num1=0, num2=1, numC = num;
for (let i =2; i <=num; i++){
numC = num1 + num2, 
num1 = num2,
num2 = numC
}      
return numC
};
console.log(fibonacci("21"));

// Do not edit below this line
module.exports = fibonacci;
