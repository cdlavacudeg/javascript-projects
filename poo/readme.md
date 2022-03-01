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