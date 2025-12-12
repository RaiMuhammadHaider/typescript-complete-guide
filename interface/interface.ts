interface koiBiNameJoHmHamriTypeKaHo { // interface is use to define the shape of the object mean the object msut follow
    name : string,
    age : number,
    isVaid : boolean
}

interface anyTypeName {
    readonly id  : number // now the id can be only be read can not be reassgin 
 employee : string,
 age : number,
 isMarried ?: boolean // now this one is optional  
 anyFunctionOrMethod : ()=> string  // this one is the method that retun string 
functionThatTakeParameter(amount : number) : number // this will take parameter and then retun a number so anykind of function can be make here

}
const emplyee : anyTypeName = { id : 78979798 , age : 997979 , employee : 'haris' , anyFunctionOrMethod : ()=> {return 'funn'}, functionThatTakeParameter(price : number){
    return 848 + 2 // 
} } 
emplyee.age = 884884
// emplyee.id = 884884 // this will never allow because it is only read only property
