

require('dotenv').config();
var DynamicClass = require('../classes/dynamic.class');
var classNameDicyonary;
var insatncesOperator = {};

getOperators = (insatncesOperator,classNameDicyonary) => {
    classNameDicyonary = JSON.parse(process.env.CLASSES_BY_CODE);
    Object.keys(classNameDicyonary).forEach(function(key) {
        insatncesOperator[key] = null //init instaces for each operator. 
    });
    return classNameDicyonary;
}
classNameDicyonary = getOperators(insatncesOperator,classNameDicyonary);


// arg  - operator like Addition/Subtraction/Multiply/Division
// this function get opertator and create new instace operator according to argumnet (singelton)
getOperatorInstance = (operator) => {
    console.log("insatncesOperator")
    console.log(insatncesOperator)
    if(insatncesOperator[operator])
       return insatncesOperator[operator];
    else
   {
    insatncesOperator[operator] = new DynamicClass(`${classNameDicyonary[operator]}`);
    return insatncesOperator[operator];        
   }
}


module.exports = {
    getOperatorInstance: getOperatorInstance
}