// Shallow Copy
const obj1={
    a:"a",
    b:"b",
    c:{
        d:"d",
        e:"e"
    }
};

const obj2={};

for(prop in obj1){
    obj2[prop]=obj1[prop];
}

const obj3=Object.assign({},obj1);//no soluciona objetos dentro de otros objetos
const obj4=Object.create(obj1);//no soluciona objetos dentro de otros objetos, la copia original si lo afecta.

//Deep Copy

// no funciona con los metodos
const stringifiedobj5=JSON.stringify(obj1);
const obj5=JSON.parse(stringifiedobj5);