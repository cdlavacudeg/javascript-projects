# Curso de JavaScript Engine(V8) y el Navegador

## Historia de JavaScript
[Recurso](https://www.instagram.com/p/B4nPBx4BNFt/)

- ECMAScript:
    Es una especificación estandarizada por Ecma International. Fue creado para estandarizar JavaScript y para ayudar a fomentar múltiples implementaciones independientes.

## JavaScript Engine

Es el motor de JS, siempre corre en el navegador.
Su función es interpretar el código JavaScript y convertirlo a Machine Code para que la máquina pueda entenderlo.

- Just in time compiler: Es la compilación en tiempo real que sucede en el proceso del Engine.

### V8:
El motor de JavaScript V8 es lanzado en el 2008, a traves del navegador de Google Crhome, pero especialemte nacio para que la aplcacion Google Maps corriera mas rapido.
V8 ayuda a que JS corra de manera más rápida, con esto podemos crear aplicaciones más robustas y rápidas.

La razón del nombre “motor V8” y el logo se debe a la identificación con los motores V8 de los automóviles.
.
Un motor V8 en el automovilismo es un motor montado en el cárter con dos bancos de cuatro cilindros, que comparten cigüeñal, formando una “V”.
.
Es usado en muchas categorías de competición automovilística, especialmente en Estados Unidos, este tipo de motores incluso es ocupado en grandes competiciones de autos

### Profundizando en el Engine:

- Una vez el motor recibe un archivo JS genera un Global enviroment
- En el Global enviroment se genera un Global object que es igual a window
- También se genera una variable this
- this depende del contexto, en el entorno global this es igual al objeto global
- Ya despues de generado el entorno global, comienza a correr nuestro código en el contexto de ejecucion, a través de un stack de tareas apiladas.
- Una vez que el motor comienza a interactuar con el navegador, genera un parseo del documento completo, para encontrar las keywords y las pasa al AST (abstract syntax tree)

[AST Explorer](https://astexplorer.net/)
- Una vez se tiene el AST, el motor lo pasa al interpreter para retornar bytecode puede ser entendido por la máquina
- Si en la interpretación del AST ve mucho código que se repite y que se puede optimizar entra el profiler o monitor, y optimiza el codigo y lo regresa compilado como bytecode para que la máquina lo pueda comprender. Es justo en este paso donde aparece el hoisting, donde el motor en su función de optimizacion reinterpreta el código de una mejor forma y se pueden presentar errores de programacón.
- El hoisting solo sucede con variables y funciones que se mandan a llamar.

### Ejemplo Objeto global y hoisting

- Una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código,asignandolas en memoria dentro de un contexto de ejecucion.

- Si llamamos una variable antes de ser declarada, el compiler crea la variable en la memory heap y la inicializa como undefined
- En el caso de las funciones es distinto, primero mandamos a llamar a las funciones antes de ejecutarlas.
- El hoisting a veces funciona pero no tenemos control de las variables que se van a cambiar
- Si llamamos a una constante (const) antes de inicializar retorna un error de tipo: Uncaught ReferenceError, que corresponde a variables que son referenciadas pero no pudieron ser capturadas

## Memory Heap y Call Stack:

Los objetos en JS (objetos, arrays, funciones y básicamente todo lo que no sea un valor primitivo) se almacenan en la parte de memoria que de llama Memory Heap. Los valores primitivos son almacenados en el Call Stack, dentro del Scope (Contexto de Ejecución de la función que tenga acceso a esa variable). Acceder al Call Stack es mucho más rápido que al Heap. Además, en el Call Stack también se guardan las referencias, “como si fueran valores primitivos”. Cuando se asigna una variable a otra y esta apunta a un objeto, se copia la referencia, como si fuera un valor primitivo. Si el objeto tiene atributos como un número por ejemplo, este se guarda en la posición de memoria reservada para ese objeto. Los objetos también pueden tener más objetos dentro. En ese caso, dentro de la posición de memoria de ese objeto se va a guardar una referencia a otra posición de memoria.

- Callstack:
    - Como se mandan a llamar las variables y las funciones
    - Las tareas en el callstack se apilan de abajo hacia arriba.
    - Se llaman de la última que mandamos a llamar hacia abajo
    - En la base de la pila reposa el Global Object
    - Si una función llama a otra, la pone encima de la pila.
    - Se ejecuta una tarea a la vez (sincronía)
    - Una vez que se van ejecutando las tareas se van retirando de la pila
    - Al ejecutar todas las tareas se retira el Global object.

## Garbage Collection

En lenguajes de alto nivel como Java y JavaScript, los programadores no necesitan asignar o liberar memoria explícitamente. La memoria JavaScript se asigna cuando se crean cosas (objetos, cadenas, etc.) y se libera automáticamente cuando ya no se usan. Este proceso se llama [Garbage Collection](https://dev.to/abhilashiam/garbage-collection-in-javascript-126a).

El algoritmo Mark & Sweep hace referencia a cuando un tipo de dato se vuelve inalcanzable para el programa.
Se toma una raíz la cual es el Objeto Global y a medida que el programa avanza, los objetos van creando o borrando referencias a sus raíces.
Cuando un objeto se queda con 0 referencias, se dice que el objeto es inalcanzable y es aquí cuando el Garbage Collector entra a hacer su trabajo (Liberar el espacio que usaban esas variables u objetos)
Desde 2012 los navegadores usan un Garbage Collector basado en este algoritmo, que ha ido recibiendo mejoras en su implementación constantemente.
Puedes ver más información acerca del algoritmo Mark & Sweep y de cómo hace JavaScript para gestionar su memoria en [éste enlace](https://developer.mozilla.org/es/docs/Web/JavaScript/Memory_Management).

## Stack overflow

El stack overflow se genera cuando el call stack se llena completamente (pila de tareas) .Esto pasa cuando se genera o se trabaja con bucles infinitos, recurcividad y funciones.Entonces este entra en stack overflow , tenemos que tener cuidado de ocacionar estos stack!!!

## JavaScript Runtime
[Link](http://latentflip.com/loupe/)
[Link 2](https://medium.com/@olinations/the-javascript-runtime-environment-d58fa2e60dd0)
[Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
Taquería DeGranda presenta a:
.
🌮 - call stack : el taquero (órdenes rápidas)
👨‍🍳 - web APIs : la cocina
🌯 - callback queue : las órdenes preparadas
💁‍♂️ - event loop : el mesero
.
a que quedó súper claro el JS Runtime y cómo funciona el asincronismo!? 🤪