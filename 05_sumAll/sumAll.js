const sumAll = function(num1, num2) {
        let sum = 0
        if (num1 !== Number(num1) || num2 !== Number(num2)){
            return "ERROR"
        }
        if (num1 < 0 || num2 < 0){
            return "ERROR"
        }
        if (num1 > num2){
            for(let i= num2 ; i <= num1; i++) {
            sum += i }
        } 
        for(let i= num1 ; i <= num2; i++) {
            sum += i }
        return sum
        
};
console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
