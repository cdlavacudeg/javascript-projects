# JavaScript:orientado a objetos, basado en prototipos

## [Paradigmas de programación:](https://www.ionos.mx/digitalguide/paginas-web/desarrollo-web/paradigmas-de-programacion/)

Los paradigmas de programación son los principios fundamentales de la programación de software. Lo más fácil es planteárselos como estilos de programación fundamentalmente diferenciados que, en consecuencia, generan códigos software que están estructurados de forma distinta.

### Orientado a objetos:

JavaScript no esta basado en clases sino en prototypos.

- Orden: organización de los atributos.
- Reutilización: Moldes -> Clases para instancior objetos -> Atributos y Metodos.
- Encapsulamiento.
- Polimorfismo

## Qué es un objeto en JavaScript

- Objetos literales: No son lo mismo que instancias (POO), son instancias del prototipo Object. 

```javascript
const students_platzirank={
    'Juan': 110,
    'Juanita': 300,
    'Nath': 700,
    'Nora': 150,
    'Luisa': 0,
};
```

- Objetos instanciados: creados basados en prototipo. Ej: instancia del prototipo student.

```javascript
function Student() {
    this.name = 'Nombre';
    this.age = 18;
    this.points = 750;
}
const juanita = new Student(); 
```

Expandir el atributo \_\_proto\_\_ de un objeto literal tiene varios metodos, se pueden acceder sin escribir proto.

## Abstraccion:

Podemos reducir la complejidad y permitir una implementación y diseño eficiente de los datos.

Ventajas de uso:

- Evitamos codigo duplicado, es decir, reusamos codigo.
- Podemos crear múltiples instancias con una sola abstracción.
- Al encapsular datos, los estamos protegiendo
- Evitamos código a bajo nivel.
- Podemos cambiar implementaciones en la clase, sin perjudicar su funcionamiento.


## Encapsulamiento:

- Esconder métodas y atributos (en javascript estas variables son públicas)
- No permitir la alteración de métodos y atributos

### Getters y setters
Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.

Esta característica a sido implementada en ES2015, pudiendo modificar el funcionamiento normal de establecer u obtener el valor de una propiedad, a estas se les conoce como accessor properties.

#### Funcionamiento:
En ocasiones queremos valores basados en otros valores, para esto los data accessors son bastante útiles.

Para crearlos usamos los keywords get y set:
```javascript
const obj = {
  get prop() {
    return this.__prop__;
  },
  set prop(value) {
    this.__prop__ = value * 2;
  },
};

obj.prop = 12;

console.log(obj.prop); //24
```
Creamos un objeto, con una única propiedad, que tiene un getter y un setter. de esta manera cada vez que establezcamos un valor para prop se multiplicará por dos.

Nota: utilice prop por convención, pero no implica que es un valor especial, este es un valor normal.

Otra manera de crear un accessor properties es de manera explícita usando Object.defineProperty

```javascript
const obj = {};

Object.defineProperty(obj, //objeto target
  'prop', //nombre propiedad
  {
    enumerable: true,
    configurable: true,
    get prop() { //getter
      return this.__prop__;
    },
    set prop(value) { //setter
      this.__prop__ = value * 2;
    },
  });
obj.prop = 12;

var atr = Object.getOwnPropertyDescriptor(obj, 'prop')
console.log(atr); 
```
La ventaja que tenemos de esta manera, es que podemos establecer los atributos que queremos tenga la propiedad.

Nota adicional:En ES2020 se introdujo la sintaxis campos privados en las clases. Se hace uso de un numeral como prefijo del nombre de la variable.
 
¿Cúal sería la ventaja de usar esto? Que no existe la posibilidad de que alguien modifique la variable privada desde la instancia a menos de que use el setter que le dimos.

## Módulos de ECMAScript 6

## Herencia
[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

La herencia nos permite crear “clases madre”, la cual servirá de molde para clases hijas, que compartirán sus métodos y atributos.
Usamos la palabra reservada `extends`.

## Polimorfismo

¿QUÉ ES EL POLIMORFISMO?
Es como la herencia reloaded. Es como ‘La Herencia 2.0’. Es un pilar de la OOP. Lo que es importante es lo que se puede hacer con este: Permite a nuestras subclases cambiar o anular los comportamientos de los métodos y atributos del prototipo madre, de la clase madre. Aunque herede las propiedades, el polimorfismo permite cambiar su comportamiento.
·
Tipos:
- Polimorfismo de Sobrecarga: ocurre cuando existen métodos con el mismo nombre y funcionalidad similar en clases totalmente independientes entre ellas.
- Polimorfismo Paramétrico: El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo).
- Polimorfismo de Inclusión (JS): La habilidad para redefinir por completo el método de una superclase en una subclase.