console.log('i love you haider');
const btn = document.querySelector("button") // yaha pe btn ya to koi htmlElement ho sakta ha ya yaee null ho sakta ha ager hmy pata ho or gurrenty ho k ya null nahi ho ga tu hm end pe ! laga dety hn ya confirmation hoti ha k ya null nahi ho ga ya hm phaly check kry gy aya k ya null to nahi ha 
btn?.addEventListener("click" , ()=>{ // ?  is liya use kiya ha kahen hamra btn null to nahi ha ager to null ha tu ya yahi pe ruk jaey ga 
    alert('Yes Clicked')
})

// ! this one is call non null assertion in typeScript mean ya gurrenty ha k ya null nahi ha x
console.log(btn);
const p = document.querySelector("p")
console.log(p);

// type assertion 
// khabi khabi typeScript ko khud ko pata nahi hota is ki kon c specific type ha lakin developer ko PAta hota ha is situation ma hum typescript ko khety hn isy as a is type ki value ki terha treat kro
const bodies : any = 'any bodey'
const bodyy = (bodies as number).toLocaleString()
const boody = (<number>bodies).toFixed(2) // is ko hm asy bi likh sakty hn han
