//primitive datatypes ( number, string boolean)
var a = 10;
var b = "hello";
var c = true;
console.log(a, b, c);
//non-primitive datatypes (array, object)
var arr = [1, 2, 3, 4, 5];
var obj = { name: "John", age: 20 };
console.log(arr, obj);
//union datatypes (number | string)
var d = 10;
var e = "hello";
//tuples
var f = [10, "hello"];
console.log(f);
//any
var g = "hello";
g = 10;
console.log(g);
//unknown
var h = "hello";
h = 10;
console.log(h);
//void
var i = undefined;
console.log(i);
//null
var k = null;
console.log(k);
//undefined
var l = undefined;
console.log(l);
//symbol
var m = Symbol("hello");
console.log(m);
