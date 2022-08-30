
var calcaulatorService = require('../services/calculate.service');

// *****************************************
// Division class - retrive division between 2 numbers.
// *****************************************

class Division{

    constructor(){
        console.log("Division");
    }

    calculate(number1,number2){
        return number1/number2;
    }
}

module.exports = Division