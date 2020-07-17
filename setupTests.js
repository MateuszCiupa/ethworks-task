var { 
    Expression
} = require(".");

global.getRandExpression = getRandExpression;
global.getExpressionFromArray = getExpressionFromArray;
global.getRandArray = getRandArray;
global.getBruteSumOfArrays = getBruteSumOfArrays;

// **********
// "Array" is meant to be "array of tuples where tuple consists of constant (coefficient) and exponent".

function getRandExpression({
    length = 1000,
    max = 100,
    min = 0
} = {}) {
    var exp = getExpressionFromArray(getRandArray({
        length,
        max,
        min
    }));
    return exp;
}

function getExpressionFromArray(arr = getRandArray()) {
    var exp = Expression();

    for ([constant, exponent] of arr) {
        exp.insert(constant, exponent);
    }

    return exp;
}

function getRandArray({
    length = 1000,
    max = 100,
    min = 0
} = {}) {
    var arr = [];

    for (let i = 0; i < length; i++) {
        arr.push([getRandRealNumber(min, max), getRandRealNumber(min, max)]);
    }

    return arr;
}

function getBruteSumOfArrays(arr1 = [], arr2 = []) {
    var result = [];

    arr1 = arr1.sort(compareTuplesDesc);
    arr2 = arr2.sort(compareTuplesDesc);

    while (arr1.length > 0 && arr2.length > 0) {
        let [const1, exp1] = arr1[0];
        let [const2, exp2] = arr2[0];
    
        if (exp1 > exp2) {
            if (!!const1) {
                result.push([const1, exp1]);
            }
            arr1.shift();
        }
        else if (exp1 < exp2) {
            if (!!const2) {
                result.push([const2, exp2]);
            }
            arr2.shift();
        }
        else {
            if (!!(const1 + const2)) {
                result.push([const1 + const2, exp1]);
            }
            arr1.shift();
            arr2.shift();
        }
    }

    if (arr1.length > 0) {
        var tail = arr1;
    }
    else {
        var tail = arr2;
    }

    while (tail.length > 0) {
        let [constant, exponent] = tail[0];
        result.push([constant, exponent]);
        tail.shift();
    }

    return result;

    // **********

    function compareTuplesDesc(tpl1, tpl2) {
        var [, exp1] = tpl1;
        var [, exp2] = tpl2;

        return exp2 - exp1;
    }
}

function getRandRealNumber(min = 0, max = 100) {
    return min + (max - min) * Math.random();
}