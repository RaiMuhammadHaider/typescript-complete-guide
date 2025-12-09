//    |  ==> this one is union in TS its mean koi bi type a sakti ha yani , in ma sy koi  bi ak type 

let union  : number | string | boolean  = 22
union = '22' // ==> mean type change be any of one of them

type one = {
    Xone : string,
    Yone : number
}
type two = {
    Xtwo : boolean,
    Ytwo : any
}

const oneTwo : one | two = { // kisi sk type me sy koi bi ak type a sakti ha 
    Xtwo : false , 
    Ytwo : false
}

// union type array

const myArray : (string | number | boolean)[] = [1, 'car' , false] // mean any type can be come into array because of union type 
const TwoTypesArray : ( one | two )[] = [  {Xone : 'ali' , Yone : 876}  , {Xtwo : false , Ytwo : false}] // we use here custome type array here abouve

// literal type 

type literalType =  | 'monday' | 'tuesday' | 'friday'

let day : literalType = 'monday' // yani in values ma sy koi bi type ki value a sakti ha in k elava kisi bi kisism ki type accept nahi ho gi
const numbbbers : 0 | 3| 2 | 'car' = 'car' // yani seirf in ma sy hi koi accespt krni ho gi or us ma value bi vali honni cheya 