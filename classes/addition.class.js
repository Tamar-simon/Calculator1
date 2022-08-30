
var calcaulatorService = require('../services/calculate.service');

// *****************************************
// Addition class - retrive Addition between 2 numbers.
// *****************************************

class Addition{

    constructor(){
        console.log("Addition");
    }

    calculate(number1,number2){
        return number1 + number2;
    }
}

module.exports = Addition