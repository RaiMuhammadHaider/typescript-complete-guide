//     Number
let anyNumberValue : number = 3979374 // only number can be reassign not any other type of value will be provided to it
anyNumberValue = 948594858.400484
// anyNumberValue = false // this will not work in TS
console.log(anyNumberValue);
console.log(anyNumberValue.toPrecision(3)); // all and only number mathod will work with it 
// ======================================================

//      Boolean
let anyBoo : boolean = true // work with boolean only
console.log(anyBoo);
console.log(anyBoo.valueOf());



// =========================================================

// inference 
let car = 'yellow'
//car = true // this will say boolean is not assignable to type string it means typeScript automatically understand by the previous experience this was string and its can be only reassign as string not like other kinf
console.log(car);