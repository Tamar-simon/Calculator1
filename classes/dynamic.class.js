

// *****************************************
// DynamicClass class - get parameter name of class and return instance of specific class.
// *****************************************
var DivisionClass = require('../../Calculator/classes/division.class');
var SubtractionClass = require('../../Calculator/classes/subtraction.class');
var MultiplyClass = require('../../Calculator/classes/multiply.class');
var AdditionClass = require('../../Calculator/classes/addition.class');
var ResultNumberClass = require('../../Calculator/results/resultNumber.class');
var ResultColorClass = require('../../Calculator/results/resultColor.class');

const classes = {
    AdditionClass,
    SubtractionClass,
    MultiplyClass,
    DivisionClass,
    ResultNumberClass,
    ResultColorClass
};

// Use ES6 Object Literal Property Value Shorthand to maintain a map
// where the keys share the same names as the classes themselves

class DynamicClass {

    constructor(className){
        console.log(className);
        return new classes[className];
    }

}

module.exports = DynamicClass