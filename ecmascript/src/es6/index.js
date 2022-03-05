function newFunction(name,age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

// es6

function newFunction2(name='oscar',age=32,country='MX'){
    console.log(name,age,country);
};
newFunction();
newFunction2('Ricardo',23,'CO');

//Templates
let hello='Hello';
let world='World!';
console.log(`${hello} ${world}`);

// Multilínea

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" 
+ "otra frase epica que necesitamos."

//es6
let lorem2=`otra frase epico que necesitamos
ahora es otra frose epica
`;

console.log(lorem);
console.log(lorem2);


// Destructuración

// let person={
//     'name':'oscar',
//     'age':32,
//     'country':'MX'
// };

// console.log(person.name, person.age);
// let { name:nombre,age }=person;
// console.log(nombre,age);

// spread operator

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David',...team1,...team2];

console.log(education);

//Let const

{
    var globalVar='hola';//disponible global;
}
{
    let globalLet='Global Let';
    console.log(globalLet);
}

console.log(globalVar);

// 

let name ='Cristian';
let age = 22;

obj={
    name:name,
    age:age
};
// es6
obj2={
    name,
    age
}
console.log(obj2);

// Arrow functions

const names=[
    {name:'Cristian',age:22},
    {name:'Sebastian',age:20},
    {name:'Omar',age:50},
];

let listOfNames=names.map(function (item){
    console.log(item.name);
})

let listOfNames2=names.map(item=>console.log(item.name));

const listOfNames3=(name,age,country)=>{
    // bloque do codigo
}

const listOfNames4=name=>{
    // bloque de codigo
}

const square=num=>num*num;
console.log(square(5));

// Promises

const helloPromise=()=>{
    return new Promise((resolve,reject)=>{
        if(false){
            resolve('Bien');
        }else{
            reject('Algo Salio mal')
        }
    });
};

helloPromise()
    .then(response=>console.log(`response: ${response}`))
    .then(()=>console.log('Hola'))
    .catch(error=>console.log(`error: ${error}`));

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
};

const calc= new calculator();
console.log(calc.sum(2,2));

// Modulos
import hello from "./module.js";
hello();

// generator

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello=helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);