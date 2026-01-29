//functions

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

//function with default parameters

function add2(a: number, b: number = 10): number {
    return a + b;
}

console.log(add2(1));

//optional parameters

function add3(a: number, b: number = 10, c?: number): number {
    return a + b + (c || 0);
}

console.log(add3(1, 2, 3));

//rest parameters

function add4(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(add4(1, 5, 6, 7, 1));

//function overload
function add5(a: number, b: number): number{
    return a+b;
};

console.log(add5(7, 7));


function add5(a: string): string{
    return a;
};

console.log(add5("hassan"));