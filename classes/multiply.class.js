
var calcaulatorService = require('../services/calculate.service');

// *****************************************
// Division class - retrive multiply between 2 numbers.
// *****************************************

class Multiply{

    constructor(){
        console.log("Multiply");
    }

    calculate(number1,number2){
        return number1 * number2;
    }
}

module.exports = Multiply
