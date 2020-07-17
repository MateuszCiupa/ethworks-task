"use strict";

describe("Null check tests", () => {
    var exp1, exp2;

    describe("Add Expressions but Expressions are null", () => {
        test("First Expression is null", () => {
            exp1 = null;
            exp2 = Expression();

            exp2.insert(1, 1);
            exp2.insert(2, 2);
            exp2.insert(3, 3);

            var result = getSumOfExpressions(exp1, exp2).toArray();
            var expected = [[3, 3], [2, 2], [1, 1]];

            expect(result).toEqual(expected);
        });

        test("Second Expression is null", () => {
            exp1 = Expression();
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

            var result = getSumOfExpressions(exp1, exp2);
            var expected = null;

            expect(result).toEqual(expected);
        });
    });

    describe("Add Expressions but Heads of Expressions are null", () => {
        beforeEach(() => {
            exp1 = Expression();
            exp2 = Expression();
        });

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
    
        test("Heads of both expressions are null", () => {
            var result = getSumOfExpressions(exp1, exp2).toArray();
            var expected = [];
    
            expect(result).toEqual(expected);
        });
    });
});