let anyThing: any = 'ali';  
// `any` basically disables TypeScript's type checking.
// The variable can store ANY value and can change to ANY type.

anyThing = false;         // boolean
anyThing = 393;           // number
anyThing = {};            // object
anyThing = [3, 4, 6, 67]; // array

console.log(anyThing);
