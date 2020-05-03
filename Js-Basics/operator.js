// all arithmetic operations are possible in js
2+2
2-2
2*2
2/2
let d = 2;
console.log(d)
d++;
console.log(d)
d--;
console.log(d)

console.log(++d)

console.log(--d)

// string operation that can be performed is concatentation
let a = "string 1";
let b = "string 2";
let c = a + b;
console.log(c);

// logical operators they give the result as boolean
let e = 2;

let f = 3;

console.log(e>f,e<f,e>=f); //false true

// type coerceion
// == (double equal to operator) does shallow copying 
// what this does is only value checking
console.log(2 == '2'); // true

// other examples of type checking
console.log(!null) // true so the value is type coerced to boolean

console.log(!undefined) //true

// to prevent the above we use the ===(triple equal to) 
// what this does is value as well as data type checking
console.log(2==='2') //false