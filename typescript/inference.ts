//type inference
let a1:boolean;
let a2: number;
let a3: string;
let a4: object;
let a5: any;
let a6: unknown;
let a7: void;
let a8: never;
let a9: symbol;
let a10: bigint;


//type annotation

function f2(a, b) {
    return a + b;
}

//type annotation
function f3(a: number, b: number): number {
    return a + b;
}