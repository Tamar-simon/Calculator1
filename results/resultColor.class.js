
// *****************************************
// ResultColor class - retrive response with color
// *****************************************

class ResultColor {

    constructor() {
        console.log("ResultColorClass");
    }
    result(number) {
        return { result: number, color: 'red' }
    }

}

module.exports = ResultColor