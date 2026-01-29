//functions
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//function with default parameters
function add2(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
console.log(add2(1));
//optional parameters
function add3(a, b, c) {
    if (b === void 0) { b = 10; }
    return a + b + (c || 0);
}
console.log(add3(1, 2, 3));
//rest parameters
function add4() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(add4(1, 5, 6, 7, 1));
//function overload
function add5(a, b) {
    return a + b;
}
;
console.log(add5(7, 7));
function add5(a) {
    return a;
}
;
console.log(add5("hassan"));
