function anyFUnction (anyObject: {name : string , isLoggedIn : boolean}) : string {
    return `${anyObject.name} , ${anyObject.name}`
}
anyFUnction({name : 'haider' , isLoggedIn : false }) // object ma hm object ko as parameter pass krty hn

let myObj : {name : string , car : boolean} = { name : 'ali' , car : false}

myObj= { name : 'jd' , car : true}
function Car(anyNameAsAParameterForObject:{name : string , car : boolean} ) {
    return `${anyNameAsAParameterForObject.name} , ${anyNameAsAParameterForObject.car}`
}
Car({name : 'ali' , car : true})
 
// type aliases type

type koiBiObjectKiTypeKaNmae = { // type sy hm koi alag hi type ky typeScript ki type define krty hn is sy hmy koi alag hi type milti ha jesy :number sy number type :string sy string type

    // isi terha type usKaKoiBiName us type ka name banaty hn ya ziyada ter Object ki types banany k liya istaml hota ha yani is object ma hmari ya ya type a sakti ha 
    name : string,
    age : number,
    marriged : boolean
}
// const profile : koiBiObjectKiTypeKaNmae = { name : 'Usman' , age : 34 , marriged : false}
function OK(HmaraObject: koiBiObjectKiTypeKaNmae) {
    return `${HmaraObject.age} , ${HmaraObject.marriged} , ${HmaraObject.name}`
}

console.log(OK({name : 'ali' , age : 97 , marriged : true}));

// Nested Object 
 // for nested  object ma hm ak ak nested object ki type bana lety hn yani ak object us ki keys ki type or ager tu us ma bi koi object ha tu ki object ki futher keys ki type

type NestedTypeKaObject = { // is terha hm nested object ki type bana sakty hn
    name : string ,
    age : number,
    married : boolean,
    father : {
        name : string,
        age : number,
        wife : {
            name : string,
            funny : boolean
        }
    }
}

const myData: NestedTypeKaObject = { 
  name: "Ali",
  age: 25,
  married: false,
  father: {
    name: "Akram",
    age: 55,
    wife: {
      name: "Sara",
      funny: true
    }
  }
};

function familyIntro(KoiBiObject:NestedTypeKaObject) : string {
    return `his wife is funny ? : ${KoiBiObject.father.wife.funny} `
}
function FamilyMemeberName(KoiBiName:NestedTypeKaObject) {
    return `${KoiBiName.name}, ${KoiBiName.father.name}, ${KoiBiName.father.wife.name},`
}
console.log(familyIntro(myData))
console.log(FamilyMemeberName(myData));

// optional 


type itsType = {
    firstName : string,
    lastName ? : string, // this mean this is optional if we give its its only and if we do not give  it its also ok like this one is optional thing
    age : number
}
const helloe : itsType = { firstName : 'ali' , age : 484 }

// read only 

type funnyType = {
    name : string
    readonly age : number // sirf read ho sakta ha is ko modify ya rewrite nahi kiya ja sakta 
}
let done : funnyType = {
    name : 'haider',
    age : 84
}
done.name = 'jdjjjjfjf'
//done.age = 8484 // will never change because it say it can not be modify its the only read only property

// intersection
// inter section ma hm 2 ya is sy ziya types ko mila k ak alag property bananty hn

type intersectionTypes = funnyType & itsType
let fun : intersectionTypes = {
    name : 'dfdhfhdihf',
    age : 8484,
    firstName : 'ihifhihvif'
}

type koiORType = funnyType & itsType & { // asy bi bana sakty hn 
    color : string
}
const funByHaider : koiORType = {
    name : 'dfdhfhdihf',
    age : 8484,
    firstName : 'ihifhihvif',
    color :  'green'
}
