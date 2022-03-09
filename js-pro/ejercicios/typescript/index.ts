

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


/*-----------------*/
// Funciones       //
/*-----------------*/

console.log('TypeScript Funciones');

function add (a:number,b:number): number{
    return a+b;
}
const sum=add(4,5);
console.log(sum);

// Retorno de otras funciones
function createAdder(a:number): (number)=>number{
    return function(b:number){
        return b+a;
    }
}
const addFour=createAdder(4);
const fourPlus6=addFour(6);

function fullName(firstName: string, lastName?: string): string{//? puede ser undefined o string
    return `${firstName} ${lastName}`;
}

const richard=fullName('Richard');

/*-----------------*/
// Interfaces   //
/*-----------------*/
// Nos permiten declarar la forma que tiene un objeto. Esto es útil porque nos ayuda en el auto completado
// y para evitar cometer algunos errores.


interface Rectangulo{
    ancho: number,
    alto: number
    color?:Color//opcional
}

let rect: Rectangulo={
    ancho:4,
    alto:6,
    color:Color.Rojo,
}

function area(r: Rectangulo){
    return r.alto * r.ancho;
}

const areaRect=area(rect);
console.log(areaRect);


rect.toString=function(){
    return this.color? `Un rectangulo ${this.color}`:`Un rectangulo sin color`;
}

console.log(rect.toString());