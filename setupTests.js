var { 
    Expression, 
    getSumOfExpressions 
} = require("./index");

global.Expression = Expression;
global.getSumOfExpressions = getSumOfExpressions;
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

function getBruteSumOfArrays(arr1, arr2) {
    var result = [];

    
}

function getRandRealNumber(min = 0, max = 100) {
    return min + (max - min) * Math.random();
}