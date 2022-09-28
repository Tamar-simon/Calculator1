
var calcaulatorService = require('../services/calculate.service');
var requestDtoService = require('../dto/requsetDTO.dto');
var DynamicClass = require('../classes/dynamic.class');
var responseDicyonary = {"number":"ResultNumberClass","color":"ResultColorClass"};


//this function get 2 paramteres and operator and calculate the result.
exports.calculate = async (req, res) => {
    let requestDto = requestDtoService.requestDto(req.body);
    let operatorInsance =  calcaulatorService.getOperatorInstance(requestDto.operator);
    const result = operatorInsance.calculate(requestDto.number1,requestDto.number2);
    const response = new DynamicClass(`${responseDicyonary[requestDto.structure]}`);
    return res.status(200).send({result:response.result(result)});
}

