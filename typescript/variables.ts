// Primitive datatypes (number, string, boolean)
const a: number = 10;
const b: string = "hello";
const c: boolean = true;
console.log(a, b, c);

//non-primitive datatypes (array, object)
let arr:number[] = [1,2,3,4,5];
let obj:object = {name:"John", age:20};
console.log(arr,obj);

//union datatypes (number | string)
let d:number | string = 10;
let e:number | string = "hello";

//tuples
let f:[number, string] = [10, "hello"];
console.log(f);

//any
let g:any = "hello";
g = 10;
console.log(g);

//unknown
let h:unknown = "hello";
h = 10;
console.log(h);

//void
let i:void = undefined;
console.log(i);

//null
let k:null = null;
console.log(k);

//undefined
let l:undefined = undefined;
console.log(l);

//symbol
let m:symbol = Symbol("hello");
console.log(m);
