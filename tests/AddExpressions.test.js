"use strict";

var { 
    Expression, 
    getSumOfExpressions 
} = require("..");

describe("Add Expressions unit tests", () => {
    var exp1, exp2;

    beforeEach(() => {
        exp1 = Expression();
        exp2 = Expression();
    });

    describe("Null cases", () => {
        describe("Expressions are null", () => {
            test("First Expression is null", () => {
                exp1 = null;
    
                exp2.insert(1, 1);
                exp2.insert(2, 2);
                exp2.insert(3, 3);
    
                var result = getSumOfExpressions(exp1, exp2).toArray();
                var expected = [[3, 3], [2, 2], [1, 1]];
    
                expect(result).toEqual(expected);
            });
    
            test("Second Expression is null", () => {
                exp2 = null;
    
                exp1.insert(1, 1);
                exp1.insert(2, 2);
                exp1.insert(3, 3);
    
                var result = getSumOfExpressions(exp1, exp2).toArray();
                var expected = [[3, 3], [2, 2], [1, 1]];
    
                expect(result).toEqual(expected);
            });
    
            test("Both Expressions are null", () => {
                exp1 = null;
                exp2 = null;
    
                var result = getSumOfExpressions(exp1, exp2).toArray();
                var expected = [];
    
                expect(result).toEqual(expected);
            });
        });
    
        describe("Heads of Expressions are null", () => {
            test("Head of first Expression is null", () => {
                exp2.insert(1, 1);
                exp2.insert(2, 2);
                exp2.insert(3, 3);
        
                var result = getSumOfExpressions(exp1, exp2).toArray();
                var expected = [[3, 3], [2, 2], [1, 1]];
        
                expect(result).toEqual(expected);
            });
        
            test("Head of second Expression is null", () => {
                exp1.insert(1, 1);
                exp1.insert(2, 2);
                exp1.insert(3, 3);
        
                var result = getSumOfExpressions(exp1, exp2).toArray();
                var expected = [[3, 3], [2, 2], [1, 1]];
        
                expect(result).toEqual(expected);
            });
        
            test("Heads of both Expressions are null", () => {
                var result = getSumOfExpressions(exp1, exp2).toArray();
                var expected = [];
        
                expect(result).toEqual(expected);
            });
        });
    });

    describe("Standard cases", () => {
        test("Both expressions have at least one equal exponent", () => {
            exp1.insert(1, 1);
            exp1.insert(2, 2);
            exp2.insert(2, 2);
            exp2.insert(3, 3);

            var result = getSumOfExpressions(exp1, exp2).toArray();
            var expected = [[3, 3], [4, 2], [1, 1]];

            expect(result).toEqual(expected);
        });

        test("Expressions do not have equal exponents", () => {
            exp1.insert(4, 4);
            exp1.insert(2, 2);
            exp2.insert(3, 3);
            exp2.insert(1, 1);

            var result = getSumOfExpressions(exp1, exp2).toArray();
            var expected = [[4, 4], [3, 3], [2, 2], [1, 1]];

            expect(result).toEqual(expected);
        });

        test("All exponents from one Expression are greater than other's", () => {
            exp1.insert(1, 1);
            exp1.insert(2, 2);
            exp2.insert(3, 3);
            exp2.insert(4, 4);

            var result = getSumOfExpressions(exp1, exp2).toArray();
            var expected = [[4, 4], [3, 3], [2, 2], [1, 1]];

            expect(result).toEqual(expected);
        });

        test("All coefficients from one Expression are equal 0", () => {
            exp1.insert(1, 1);
            exp1.insert(2, 2);
            exp2.insert(0, 6);
            exp2.insert(0, 10432);

            var result = getSumOfExpressions(exp1, exp2).toArray();
            var expected = [[2, 2], [1, 1]];

            expect(result).toEqual(expected);
        });

        test("All coefficients from both Expressions are equal 0", () => {
            exp1.insert(0, 1);
            exp1.insert(0, 2);
            exp2.insert(0, 6);
            exp2.insert(0, 10432);

            var result = getSumOfExpressions(exp1, exp2).toArray();
            var expected = [];

            expect(result).toEqual(expected);
        });

        test("All coefficients and exponents from both Expressions as random real numbers", () => {
            var arr1 = getRandArray({
                length: 5000,
                max: 1000,
                min: -1000
            });
            var arr2 = getRandArray({
                length: 6000,
                max: 1000,
                min: -1000
            });

            exp1 = getExpressionFromArray(arr1);
            exp2 = getExpressionFromArray(arr2);

            var result = getSumOfExpressions(exp1, exp2).toArray();
            var expected = getBruteSumOfArrays(arr1, arr2);

            expect(result).toEqual(expected);
        });
    });
});