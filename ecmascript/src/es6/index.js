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

let person={
    'name':'oscar',
    'age':32,
    'country':'MX'
};

console.log(person.name, person.age);
let { name,age }=person;
console.log(name,age);

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

