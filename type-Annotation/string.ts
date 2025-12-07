let anyName: string = 'ali';  
anyName = 'haider'; // Can change the name, but only to another string
// anyName = true; // ❌ Nope! TypeScript won't let you assign a boolean here

console.log(anyName);  
console.log(anyName.indexOf('a')); // Works! String methods only, no math allowed 😎
