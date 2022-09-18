
var calcaulatorService = require('../services/calculate.service');
var requestDtoService = require('../dto/requsetDTO.dto');

//this function get 2 paramteres and operator and calculate the result.
exports.calculate = async (req, res) => {
    let requestDto = requestDtoService.requestDto(req.body);
    let operatorInsance =  calcaulatorService.getOperatorInstance(requestDto.operator);
    const result = operatorInsance.calculate(requestDto.number1,requestDto.number2);
    console.log(result)
    return res.status(200).send({result:result});
}

