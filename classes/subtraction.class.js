
var calcaulatorService = require('../services/calculate.service');

// *****************************************
// Subtraction class - retrive subtraction between 2 numbers.
// *****************************************

class Subtraction{

    constructor(){
        console.log("Subtraction");
    }
    calculate(number1,number2){
        return number1 - number2;
    }

}

module.exports = Subtraction