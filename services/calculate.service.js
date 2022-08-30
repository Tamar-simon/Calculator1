

var DynamicClass = require('../classes/dynamic.class');
var insatncesOperator = {"Addition":null ,"Subtraction":null, "Multiply":null,"Division":null};

// arg  - operator like Addition/Subtraction/Multiply/Division
// this function get opertator and create new instace operator according to argumnet (singelton)
getOperatorInstance = (operator) => {
    if(insatncesOperator[operator])
       return insatncesOperator[operator];
    else
   {
    insatncesOperator[operator] = new DynamicClass(`${operator}Class`);
    return insatncesOperator[operator];        
   }

}

module.exports = {
    getOperatorInstance: getOperatorInstance
}