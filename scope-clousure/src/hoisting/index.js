//Hoisting eleva las declaraciones
a=2;
var a;
console.log(a);//2

console.log(a);
var a=2;

nameOfDog('Elmo');//Se guarda la función antes en memoria
function nameOfDog(name){
    console.log(name);
}