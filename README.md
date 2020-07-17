# ethworks-task

Adding two simple mathematical expressions

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to run the software on your own:

- Node.js (>=12.18.2)

### Installation and Setup

Install dependencies with npm: ```npm i```

Run [example](example/index.js): ```npm start```

Run test suites: ```npm test```

### Usage

Main modules and function to calc sum of expressions are located in [/index.js](index.js).

Import module and function:

```js
var {
    Expression,
    getSumOfExpressions
} = require("../");
```

Create expression objects, insert coefficients and exponents (both in order):

```js
var expression1 = Expression();
expression1.insert(1, 3);
expression1.insert(2, 5);

var expression2 = Expression();
expression2.insert(3, 1);
expression2.insert(3, 3);
```

Calc sum of expressions and stringify result to see output:

```js
var result = getSumOfExpressions(expression1, expression2);
console.log(String(result));
```