// =====================
// 1️⃣ `any` Type — The "I don't care" type
// =====================
// let : any = 'ali';  // literally anything goes

// anyThing = false;       
// anyThing = 393;         
// anyThing = {};          
// anyThing = [3, 4, 6, 67]; 

// console.log(anyThing); 
// anyThing is like that friend who says "I don't care, do whatever" 😎

// ✅ Lesson: Use `any` only if you want TypeScript to stop nagging you.

// =====================
// 2️⃣ Number Type — The "Math nerd"
// =====================
let anyNumberValue: number = 3979374;

anyNumberValue = 948594858.400484;
// anyNumberValue = false; // ❌ TypeScript slaps your hand: "Nope, numbers only!"

console.log(anyNumberValue);
console.log(anyNumberValue.toPrecision(3)); 
// Number methods only! Try calling string methods and TypeScript will judge you 🤨

// =====================
// 3️⃣ Boolean Type — The "True/False boss"
// =====================
let anyBoo: boolean = true;

console.log(anyBoo);
console.log(anyBoo.valueOf()); 
// Only true or false allowed here. Nothing else. This is a strict diet 😤

// =====================
// 4️⃣ Type Inference — TypeScript's psychic power 🔮
// =====================
let car = 'yellow';

// car = true; // ❌ TypeScript: "Nope, you said yellow, so you better stick with yellow!"

console.log(car); 
// TypeScript guesses the type based on what you initially give it. Psychic, right? 🧙‍♂️
