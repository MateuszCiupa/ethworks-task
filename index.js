"use strict";

module.exports = {
    Expression,
    getSumOfExpressions
};

// Example of usage

var expression1 = Expression();
expression1.insert(1, 3);
expression1.insert(2, 5);

var expression2 = Expression();
expression2.insert(3, 1);
expression2.insert(3, 3);

var result = getSumOfExpressions(expression1, expression2);

console.log(String(result));

// **********

function Term(constant = 0, exponent = 0) {
    var next = null;
    
    var publicAPI = {
        get next() {
            return next;
        },
        set next(x) {
            next = x;
        },
        get constant() {
            return constant;
        },
        set constant(x) {
            constant = x;
        },
        get exponent() {
            return exponent;
        },
        toString
    };
    return publicAPI;

    // **********

    /* istanbul ignore next */
    function toString() {
        return `${constant}${!!exponent ? `*x^${exponent}` : ""}`;
    }
}

function Expression() {
    var head = null;

    var publicAPI = {
        get head() {
            return head;
        },
        set head(x) {
            head = x;
        },
        insert,
        toString,
        toArray
    };
    return publicAPI;

    // **********

    function insert(constant, exponent) {
        if (
            !constant ||
            typeof constant != "number" ||
            typeof exponent != "number" ||
            exponent !== exponent
        ) {
            return;
        }

        if (!head) {
            head = Term(constant, exponent);
        }
        else {
            let current = head;

            if (head.exponent <= exponent) {
                let tail;
                if (head.exponent < exponent) {
                    tail = current;
                }
                else {
                    tail = current.next;
                }
                head = Term(constant, exponent);
                head.next = tail;
            }
            else {
                while (!!current.next && current.next.exponent > exponent) {
                    current = current.next;
                }

                if (!current.next) {
                    current.next = Term(constant, exponent);
                }
                else {
                    let tail;

                    if (current.next.exponent < exponent) {
                        tail = current.next;
                    }
                    else {
                        tail = current.next.next;
                    }

                    current.next = Term(constant, exponent);
                    current.next.next = tail;
                }
            }
        }
    }

    /* istanbul ignore next */
    function toString() {
        var str = "f(x) = ";

        if (!head) {
            str += String(head);
        } 
        else {
            let current = head;

            while (!!current) {
                str += `${current}${!!current.next ? " + " : ""}`;
                current = current.next;
            }
        }

        return str;
    }

    function toArray() {
        var arr = [];
        var current = head;

        while (!!current) {
            arr.push([current.constant, current.exponent]);
            current = current.next;
        }

        return arr;
    }
}

function getSumOfExpressions(exp1, exp2) {
    if (!exp1 && !exp2) {
        return Expression();
    }
    else if (!exp1) {
        return exp2;
    }
    else if (!exp2) {
        return exp1;
    }

    var list1 = exp1.head;
    var list2 = exp2.head;

    var result = Expression();
    var resultHead = Term();
    var currentResult = resultHead;

    while (!!list1 && !!list2) {
        let exp1 = list1.exponent;
        let exp2 = list2.exponent;

        if (exp1 > exp2) {
            currentResult.next = list1;
            currentResult = currentResult.next;
            list1 = list1.next;
        }
        else if (exp1 < exp2) {
            currentResult.next = list2;
            currentResult = currentResult.next;
            list2 = list2.next;
        }
        else {
            currentResult.next = list1;
            currentResult = currentResult.next;
            currentResult.constant = list1.constant + list2.constant;
            list1 = list1.next;
            list2 = list2.next;
        }
    }

    if (!list1) {
        currentResult.next = list2;
    }
    else {
        currentResult.next = list1;
    }

    result.head = resultHead.next;

    return result;
}