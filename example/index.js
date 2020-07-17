"use strict";

var {
    Expression,
    getSumOfExpressions
} = require("../");

var expression1 = Expression();
expression1.insert(1, 3);
expression1.insert(2, 5);

var expression2 = Expression();
expression2.insert(3, 1);
expression2.insert(3, 3);

var result = getSumOfExpressions(expression1, expression2);

console.log(String(result));