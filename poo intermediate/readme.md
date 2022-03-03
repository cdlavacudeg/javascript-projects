# POO Intermedio de JS

## Static: atributos y métodos estáticos en JavaScript

Hasta ahora habíamos aprendido que apara acceder a los métodos o atributos de una clase o prototipo teníamos que crear una instancia del prototipo(Objeto). Pero hay una forma de que podemos saltarnos tener que crear una instancia del prototipo para acceder a los métodos o atributos, esta es la forma Static

Para crear atributos estáticos los cuales podamos acceder sin crear un objeto o una instancia de este prototipo, solo hay que agregar al atributo la palabra **static**.

## Métodos estáticos de Objetct

```javascript
const objetito = {
    name: "Carlitos",
    email: "carlitosmazzaroli@gmail.com",
    age: 16,
}
Object.keys()
```

Nos devuelve una lista con todos los keys(nombres claves) de nuestro objeto objetito

```javascript
Object.keys(objetito)
// (3) ["name", "email", "age"]
```

```javascript
Object.getOwnPropertyNames()
```
Hace prácticamente lo mismo que Object.keys con pequeñas diferencias [DOCUMENTACION](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

```javascript
Object.getOwnPropertyNames(objetito)
// (3) ["name", "email", "age"]
```

```javascript
Object.entries()
```

El método entries nos devolverá un arrays de arrays donde tendremos nuestra palabra clave con su  respectivo valor por cada propiedad del prototipo [key,  value]

```javascript
Object.entries(objetito)
// [
//     0: (2) ["name", "Carlitos"]
//     1: (2) ["email", "carlitosmazzaroli@gmail.com"]
//     2: (2) ["age", 16]
// ]
```

```javascript
Object.getOwnPropertyDescriptors(objetito)
```

Nos devuelve todas las propiedades de los objetos, con sus keys y values, y otros atributos. Los atributos
writable, configurable y enumerable
es la forma que tiene JavaScript para limitar el acceso modificar o modificación de nuestros atributos o de nuestros objetos.

```javascript
Object.getOwnPropertyDescriptors(objetito) 
// {
//     age:{
//         configurable: true
//         enumerable: true
//         value: 16
//         writable: true
//     }
//     email:{
//         configurable: true
//         enumerable: true
//         value: "carlitosmazzaroli@gmail.com"
//         writable: true
//     }
//     name:{
//         configurable: true
//         enumerable: true
//         value: "Carlitos"
//     }
// }
```
## Encapsulamiento
El objetivo del encapsulamiento es limitiar quien puede modificar, acceder o ejecutar nuestros metodos o atributos de la clase o prototipo.

Ahora con las propiedades writable configurable enumerable podemos limitar quien tiene acceso, modificar nuestros objetos.

## Cambios en propiedades Object.defineProperty:

Propiedad en false:

|                            | Enumerable | Writable | Configurable |
|----------------------------|:-----------:|:----------:|:--------------:|
| Object.keys()              |      x     |     o    |       o      |
| Object.getOwnPropertyNames |      o     |     o    |       o      |
| Modificar Value            |      o     |     x    |       o      |
| Eliminar propiedad         |      o     |     o    |       x      |

```javascript
Object.seal():No se puede borrar.
Object.freeze():No se puede borrar ni modificar.
```

## Memoria en JavaScript
🎳 Las variables son referencias a un espacio en memoria.
🎩 Los navegadores web usan dos tipos de memorias: Stack y Heap.
📁 La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números…).
🌪 La memoria Heap es más lenta, pero permite guardar enormes cantidades de información (son como los tornados: grandes, lentos y desordenados). En esta memoria guardamos los valores de los objetos ({...}).

Las variables son una referencia a un espacio en memoria. Dependiendo del tipo de valor que sean serán ubicadas en alguna de las dos tipos de memoria:

- Stack - Mucho más rápida, pero sin tanto espacio
- Heap - Más lenta, pero con mucho más espacio

Las variables que no tienen un valor de tipo objeto, son almacenadas en la memoria stack. Las variables que tienen como valor un objeto, funcionan de una manera diferente:

- El valor (objeto) es guardada en la memoria heap
- En la memoria stack se guarda un apuntador (pointer) hacia la memoria heap
Es por esto que cuando nosotros asignamos una variable que tiene como valor un objeto, a una nueva variable, lo unico que hacemos es asignar el apuntador. Es así que al modificar el objeto, en cualquiera de las dos variables, los cambios se reflejan en las dos

```javascript
const person = {
 name: 'Zajith',
 email: 'zajith@mail.com',
}

const person2 = person

person2.name = 'Juanito'

person2 // { name: 'Juanito', email: 'zajith@mail.com' }
person // { name: 'Juanito', email: 'zajith@mail.com' }
```
### Shallow copy

El Shallow Copy (copia superficial) es una copia bit a bit de un objeto. Se crea un nuevo objeto que tiene una copia exacta de los valores del objeto original. Si alguno de los campos del objeto son referencias a otros objetos, solo se copian las direcciones de referencia, es decir, solo se copia la dirección de memoria.


- Object.assign():

    El método Object.assign () copia todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino. Devuelve el objeto de destino modificado.

    Las propiedades del objeto de destino se sobrescriben con las propiedades de los orígenes si tienen la misma clave. Las propiedades de las fuentes posteriores sobrescriben a las anteriores.

- Object.create():

    El método Object.create () crea un nuevo objeto, utilizando un objeto existente como prototipo del objeto recién creado.

- La diferencia entre Object.create y Object.assign
    La principal diferencia entre Object.create() y Object.assign() es que el método Object.assign crea un nuevo Object. utiliza el objeto proporcionado como prototipo del Objeto recién creado. Mientras que el método Object.assign() copia todas las propiedades de los objetos de origen al objeto de destino, que es el primer parámetro de esta función y devuelve este Objeto de destino.

    Por lo tanto, vemos que mientras Object.create() define propiedades en nuestro Object recién creado. Object.assign() simplemente asigna el valor de los objetos de origen de destino a nuestro Objeto de destino.

```javascript
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
};

// Shallow Copy con for
const obj2 = {};
for (prop in obj1) {
    obj2[prop] = obj1[prop]; 
}

// Metodos de Object para hacer Shallow Copy
const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);
```

### JSON.Parse y JSON.stringify
```javascript
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'Abcd'
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifiedComplexObj); 
// {a: "a", b: "b", c: {d: "d", e: "e"}}
```
- JSON.stringify():
    El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

    - Descripción:
        - Los objetos Boolean, Number, and String se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.

        - Si durante la conversión se encuentra un undefined, una Function, o un Symbol se omite (cuando se encuentra en un objeto) o se censura a null (cuando se encuentra en un array). JSON.stringify() puede devolver undefined cuando se pasan valores “puros” como JSON.stringify(function(){}) o JSON.stringify(undefined).

        - Todas las propiedades que utilicen Symbol en los nombres de la clave se ignoran por completo, incluso si utilizan una función replacer.

        - Las instancias de Date implementan la función toJSON() devolviendo una cadena de texto (igual que date.toISOString()). Por lo que son tratadas como strings.

        - Los números Infinity y NaN, así como el valor null, se consideran null.

        - El resto de instancias de Object (incluyendo Map, Set, WeakMap, y WeakSet) sólo tendrán serializadas sus propiedades enumerables.

JSON.stringify () convierte un valor en notación JSON que lo representa:

- JSON.parse()

    El método JSON.parse() analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.

- Why JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript:

    - Puedes perder tipos de datos.
    - JavaScript no te avisara cuando pierdas algún tipo de dato al usar JSON.stringify(), asi que GG mi rey
    - Convierte tipos de datos no soportados en soportados, como infinity y NaN en null
    - Los tipos de datos Date serán parseados como strings, no como Date
    - No es tan rápido y eficiente.

## Recursividad:

LA RECURSIVIDAD es bastante peculiar porque suele funcionar autoejecutando funciones con un ámbito menos al problema padre.

Un caso recursivo: Suele ser una función que es capaz de autoinvocarse. La clave de esta autoinvocación es que los elementos que le pasemos tendrán que ser menores que los del problema padre ya que si no nunca podríamos llegar al caso base.

La recursividad es una técnica muy usada en programación funcional porque nos evita el uso de iteraciones.

[Comparación entre recursividad y loops](https://www.redalyc.org/pdf/4759/475947762020.pdf)