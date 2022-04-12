// isNaN() check if the given value is not a valid Number; isNaN("Hello") == true; "Hello" is not a valid number;
// Number.isNaN() check if the given value is NaN Number.isNaN("Hello") == false; "Hello" is a string

Object.is = function(actual, expected) {
    if (isValueNaN(actual)) return isValueNaN(expected);
    if (isValueNaN(expected)) return false;

    if (isNegativeZero(actual) && isNegativeZero(expected)) return true;

    return actual === expected;
}

function isNegativeZero(value) {
    return value == 0 && (1 / value) == -Infinity;
}

function isValueNaN(value) {
    return value !== value;
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);