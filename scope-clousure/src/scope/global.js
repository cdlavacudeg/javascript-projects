var hello="Hello";
var hello='Hello +';// Solo var puede ser reasignada
let world='Hello World';
const helloWorld='Hello World!';
console.log(hello);

const anotherFunction=()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// const globalVar=()=>{
//     globalVar='im global';//mala practica no usar palabra reservada
// }
// globalVar();
// console.log(globalVar);

const anotherFunction=()=>{
    var 
}