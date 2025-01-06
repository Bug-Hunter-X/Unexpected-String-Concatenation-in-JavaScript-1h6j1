# Unexpected String Concatenation in JavaScript
This repository demonstrates a common JavaScript bug involving type coercion and unexpected string concatenation.

## Bug Description
JavaScript's loose typing can cause unexpected behavior when performing arithmetic operations with mixed data types.  Specifically, if one operand is a string, the `+` operator will perform string concatenation rather than numerical addition.

## How to Reproduce
The `bug.js` file contains a function `foo` that demonstrates this issue. The function attempts to add two numbers, but due to type coercion the output is an unexpected string concatenation.

## Solution
The `bugSolution.js` file shows how to prevent this issue by explicitly converting operands to numbers before performing the addition operation using `Number()` or `parseInt()`.