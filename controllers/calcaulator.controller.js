
var calcaulatorService = require('../services/calculate.service');

//this function get 2 paramteres and operator and calculate the result.
exports.calculate = async (req, res) => {
    const { number1, number2, operator } = req.body ;
    let operatorInsance =  calcaulatorService.getOperatorInstance(operator);
    const result = operatorInsance.calculate(parseInt(number1),parseInt(number2));
    console.log(result)
    return res.status(200).send({result:result});
}

