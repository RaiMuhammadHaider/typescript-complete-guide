// tuple 
const ali : [number , string , number , boolean] = [1,'car' , 4, true] // touple ak asa array hota ha  jis ki length fix hoti ha or or us ma hm define krty hn har ak elemmet  ki type ko yani is ka first elemt ak number type ka ho ga second string type ka 3rd number type ka isi terha soo on

// const zahid : [string , number] = [0, 'hi'] // ager thek values galat order ma pass kry gy tu ya error bi dy ga 
// in otherwords tuple ak array ha jis ma har ak elemet ki type define hoti ha k first ma kis type ka ay ha us k bad second ma kon sa or bad me end pe is ma limit hoti ha 

// enum 

enum hamriEnum {
    panding = 8, // by default ys kuch kuch vakues assign krta ha
    deliver , // If you don’t give values, TypeScript automatically gives numbers starting from 0.
    success // Enum = A feature that lets you create a group of named constant values.
}
enum haider {
    left = 'helf ha ya',
    right = 2, // lakin hm in k koi bi value assign kr sakty hn han
    up = 'car',
    down = 8838
}
function yes(arrow:haider) {
    return arrow = haider.left
}
function anyFUnk(koiBiParameter: hamriEnum) {
  const myNum = koiBiParameter * hamriEnum.deliver;
  return myNum;
}

console.log(anyFUnk(hamriEnum.panding)); // 0 * 1 = 0 // sief enum hi values ja sakti hn koi or ni like hm apni terf sy 5 ,5 3, values pass nahi kr sakty 
