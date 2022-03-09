console.log('Hello, TypeScript');

function add (a:number,b:number){
    return a+b;
}
const sum=add(2,4);
console.log(sum);

// Tipos de datos

// Boolean
let muted: boolean=true;
muted=false;

// Numeros
let age=6;
let numerador:number = 42;
let denominador: number= age;
let resultado=numerador/denominador;

// String
let nombre: string='Richard';
let saludo =`Me llamo ${nombre};`;

// Arreglos
let people: string[]=[];
people=['Isabel','Nicol','Raul'];
people.push('900');

let peopleAndNumbers: Array<string | number>=[];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(900);

// Enum -> Conjuntos de valores

enum Color{
    Rojo="Rojo",
    Verde="Verde",
    Azul="Azul",
}

let colorFavorito: Color=Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);//Mi color favorito es 1 (cuando no esta inizializado)

// Any
let comodin: any="Joker";
comodin ={type:'Wildcar'};

// Object
let someObject: object={type:'Wildcar'}

