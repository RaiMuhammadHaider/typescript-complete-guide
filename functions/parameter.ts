// function parameter annotation
function greetSomeOne(name: string) { 
    // In function parameters we define the type of parameter.
    // This means only this type of parameter is allowed.
    return `hi, ${name}`;
}
console.log(greetSomeOne('haider'));

function NameNumber(name: string, marks: number, message: any) {
    return `${name} , ${marks} , ${message}`;
}
NameNumber('9r9', 84, false);

// default parameter values
function anyFUnck(name: string = 'haider') {
    return name;
}
anyFUnck();        // default value: haider
anyFUnck('Ali');   // now provided value: Ali

// return type
function mycar(CarNumber: number, CarName: string): number {
    return CarNumber * 8;
}
mycar(8, 'd');
// Return type defines what type of value this function will return.
// void means function returns nothing.

// anonymous function
const myArr = [2, true, 5, ['car , 3', 3, false], 67];
myArr.map(a => a);

// void
function mango(name: string) { 
    // If we do not return anything, TypeScript considers return type "void".
    // void means no value is returned.
    return name; 
    // (void function can only return undefined or null)
}

function notRetun(boss: boolean): void { 
    console.log(true);
}

// never
function neverStop(): never { 
    // This function never ends, never returns any value.
    while (true) {
        console.log('hi');
    }
}
