
// *****************************************
// ResultColor class - retrive response with color
// *****************************************

class ResultColor {

    constructor() {
        console.log("ResultColorClass");
    }
    result(number) {
        return { result: number, color: number % 2 == 0 ? 'green' : 'red' }
    }

}

module.exports = ResultColor