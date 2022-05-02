# Estructuras de datos con JavaScript

Son estructuras que nos permiten ordenar de cierta forma la información mediante un lenguaje de programación. Son colecciones de valores, las relaciones entre ellas y las funciones u operaciones que se pueden aplicar a los datos.

## Memoria y cómo se guardan los datos

Todo se pasa a bits -> 1 Byte == 8 bits. La computadora asigna direcciones en la memoria y al acceder a la variable la memoria accede a esta mediante la dirección en la que queda guardada.

## Array
Son una colección de información, tambien se conocen como listas. Tiene varios metodos para manipular los datos. 

### Arrays estáticos
Se le designa un tamaño predeterminado

### Arrays dinámicos
En javascript por defecto los arrays son dinamicos ya que no se especifica el tamaño que va a tener la lista de datos.

## HASH Tables

### Ideas/conceptos claves
hash function es poder asegurar generar un hash que se convierte en el address para acceder al valor

En JavaScript se pueden conocer como objetos o Maps [Aun les falta unos pasos para concretarlo]
En otros lenguajes como python son conocidos como Diccionarios [Python], Maps [Java, Go], Hashes [Ruby]

### Hash Tables vs Objetos
Las hash tables son similares a los objetos porque tienen el concepto de guardar valores key, value
La diferencia es que tienen un paso extra que se convierte en caja negra la cual es una hash function
Funciona de una manera similar a los arreglos debido a que accedemos a través de un numero

### Métodos
- Insert ⇒ Insertar un elemento en la tabla
- Search ⇒ Buscar un elemento por key
- Delete ⇒ Borrar un elemento

### Colisión de Hash Table
En ocasiones podemos pasar un key distintito puede generar el mismo hash colisionando con el anterior(lo inserta en el mismo bucket),esto podrá depender de la cantidad de espacio disponible.

#### RESUMEN: 
Las hash tables se parecen a los objetos porque podemos guardar valores por llave, valor. Pero su principal diferencia es que genera un hash para cada llave valor. El único problema es que se puede generar un mismo hash colisionando con el anterior

## Linked list
Ciertos nodos, head-(pointer)-> nodo ....->tail.
En estas listas se va buscando linealmente de nodo en nodo y va paso por paso en la secuencia de nodos.

Empieza en el head hasta llegar al valor, en una single list list no te puedes regresar, las pointers estan ligados solo al siguiente nodo.

En las single list list los datos se guardan con apuntadores a diversos memory slot.
### Métodos
- prepend -> Agregar un Nodo al inicio
- append -> Agregar un Nodo al final
- Lookup/search -> Buscar un Nodo
- insert -> Insertar un Nodo en la lista
- delete -> Borrar un nodo

### Doubly Linked list
Una doubly linked list tiene el mismo comportamiento que una simply linked list, pero con la particularidad de que esta SI puede regresar. Aún necesita ir moviéndose una por una, pero ahora si lo desea puede regresar porque ya conoce quién es su elemento anterior y también quién es el siguiente, es decir, ya no es necesario repetir el ciclo.


