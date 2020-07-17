"use strict";

var {
    Expression
} = require("..");

describe("Expression as linked list data structure tests", () => {
    var expression;

    beforeEach(() => {
        expression = Expression();
    });

    test("Insert exponents in descending order", () => {
        expression.insert(1, 3);
        expression.insert(4, 2);
        expression.insert(3, 1);

        var result = expression.toArray();
        var expected = [[1, 3], [4, 2], [3, 1]];

        expect(result).toEqual(expected);
    });

    test("Insert exponents in ascending order", () => {
        expression.insert(3, 1);
        expression.insert(4, 2);
        expression.insert(1, 3);

        var result = expression.toArray();
        var expected = [[1, 3], [4, 2], [3, 1]];

        expect(result).toEqual(expected);
    });

    test("Insert at least once exponent of the same value as head's exponent", () => {
        expression.insert(3, 1);
        expression.insert(5, 1);
        expression.insert(2, 2);

        var result = expression.toArray();
        var expected = [[2, 2], [5, 1]];

        expect(result).toEqual(expected);
    });

    test("Insert at least once copy of exponent other than head's", () => {
        expression.insert(3, 10);
        expression.insert(5, 2);
        expression.insert(2, 2);

        var result = expression.toArray();
        var expected = [[3, 10], [2, 2]];

        expect(result).toEqual(expected);
    });

    test("Insert at least one coefficient equal 0", () => {
        expression.insert(5, 3);
        expression.insert(3, 1);
        expression.insert(0, 4);

        var result = expression.toArray();
        var expected = [[5, 3], [3, 1]];

        expect(result).toEqual(expected);
    });

    test("Insert coefficient or exponent other than number or equal NaN", () => {
        expression.insert("five", 5);
        expression.insert(4, { numb: 5 });
        expression.insert(true, NaN);
        expression.insert(NaN, 1);
        expression.insert(1, 2);
        expression.insert(3, 5);

        var result = expression.toArray();
        var expected = [[3, 5], [1, 2]];

        expect(result).toEqual(expected);
    });
});