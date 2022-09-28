
// *****************************************
// ResultNumber class - retrive response only with number
// *****************************************

class ResultNumber {

    constructor() {
        console.log("ResultNumberClass");
    }
    result(number) {
        return { result: number }
    }

}

module.exports = ResultNumber