// function parameter annotation
function greetSomeOne(name:string) { // in functions parameter we define the type of parameter , this  means only this kind of parameter it can be come not only kind this kind of paramter accept not other type of parameter it accept 
    return `hi , ${name}`
}
console.log(greetSomeOne('haider'));

function NameNumber(name:string , marks : number , message : any) {
    return `${name} , ${marks} , ${message}`
}
NameNumber('9r9', 84 , false);

// default parameter values

function anyFUnck(name:string = 'haider') {
    return name
}
anyFUnck(); // not provide default value it will be default balue haider
anyFUnck('ALi') // now we provide it will be Ali parameter value 

// retun type

function mycar(CarNumber:number , CarNmae : string ): number  {
    return CarNumber * 8
}
mycar(8 , 'd') // is ka matlb ha jo function hm ny banaya ha vo jo kuch be retun kry ga us ki type ho gi is k liya hm parameter k bad us ki type define krty hn k ya function hmy is type ki value retun kry ga void ka matlb hota ha  kuch bi retun nahi kry ga 

// yani hm ager retun nahi lagy gy tu typeScript is ko bydefault number concider ry gi 

// annumous function

const myArr = [2,true,5,['car , 3' ,3 , false],67]
myArr.map(a => a)

// void 

function mango(name:string) { // ager tu hm kuch retun kr rahy hn tu typeScript kheti ha k hn tm kuch retun kr sakty ho lakin jb hm khaty hn k tm kuch retun nahi kro gy tu typeScript khati ha yani tumhri type void ha 

    // void ka matlb ha k kuch bi retn nahi ho ga ager tu hm retun keyword istam na kry tu ya automatically function k name pe hover kryny pe kheta ha ya void ha yani k kuch bi return nahi kr raha lakin hm asy ak chexx fix krny k liya bi laga scty hn yani parameter k bad : void 
    return name // void retun kr satkta ha null ya fir  undefine
}

function notRetun(boss:boolean): void { // yaha hm ager void na bi lagty tu function k name pe hover krny pe is ny void hi show krna tha lakin hm ny fir bi laga diya 
    console.log(true);
    
}

// Never

function neverStop() : never { // yani ya function chalta jey ga retun ruky ga nahi yani ya koi funal value nahi dy ga matlb never finesh
    while (true){
        console.log('hi');
        
    }
}