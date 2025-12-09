// string array 
const stringArray : string[] = ['fjf' , '45' , 'df'] // string[] ka matlb ha ya ak array ho ga jis ma sirf string values ho sakti hn
const numberArray : number[] = [4,5,6,7,8] // number[] ka matlb ha sirf array ho ga jis ma sirf number hon gy
const booleanArray : boolean[] = [false , true , true] // boolean[] ka matlb ha sirf boolean values hi hon gi is array ma

const numberArrayOtherSyntax : Array<number> = [3,4,5,6]
const booleanArrayOtherSynatx : Array<boolean> = [true , false]
const stringArrayOtherSyntax : Array<string> = ['car' , 'bus']


// custoon array 

type mixTypes = {
    age : number,
    name : string,
    marriage : boolean
    father : {
        name : string,
        age : number
    }
}
const data : mixTypes[] = [ // custom array baani jis ma sab types ka data ha 
    {
  age: 25,
  name: "Ali",
  marriage: false,
  father: {
    name: "Akram",
    age: 55
  }
}
,
{
  age: 30,
  name: "Hamza",
  marriage: true,
  father: {
    name: "Rashid",
    age: 60
  }
}

]

// multidimationaly array
const arrray : number[] = [1,2,4,5,6,7,3,4, ]