

var DynamicClass = require('../classes/dynamic.class');
var insatncesOperator = {"+":null ,"-":null, "*":null,"/":null};//map instaces via operator.
var classNameDicyonary = {"+":"AdditionClass" ,"-":"SubtractionClass", "*":"MultiplyClass","/":"DivisionClass"};// map classNAme via operator

// arg  - operator like Addition/Subtraction/Multiply/Division
// this function get opertator and create new instace operator according to argumnet (singelton)
getOperatorInstance = (operator) => {
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