# Curso profesional de JavaScript
[Notas](https://github.com/JasanHdz/javascript-professional/tree/master/notes)
## ¿Qué significa ser un profesional de JavaScript?
‌
El camino para llegar a ser profesional es largo y duro, no es fácil. Todos necesitamos que nos guíen para saber qué hacer y qué no. Este camino es conocido como la ruta de pasar de Junior a Senior, este es un duro camino lleno de experiencia.

‌
### ¿Qué forma a un profesional?
‌
Te presento una lista de estas cosas que lo forman:
- Conocimiento del lenguaje.
- Conocimiento de entornos de programación.
- Mejores prácticas.
- Versado en código.
- Herramientas.
- Ética / Profesionalismo.
- Experiencia.

‌

## El lenguaje: JavaScript
‌

Debemos tener muy claro cuales son los fundamentos de JavaScript antes de comenzar con esto. Existen features muy raros y hay que estudiarlos. Tenemos que saber cómo funcionan las cosas en JavaScript.

### No fundamentos‌

Los no fundamentos" representan las siguientes características del lenguaje:


- Promesas (nivel pro).
- Getters, setters: son formas de obtener valor de una variable sin tener que poner this.name.
- Proxies: es un feature muy raro, pero que más adelante veremos a profundidad. Sirve para interceptar a una función antes de que se ejecute.
- Generadores: esto es raro, pero vamos a ver que sí es eficiente.

‌

### ¿Cómo funciona?
‌
Este lenguaje corre sobre un motor. JavaScript no contiene clases como otros lenguajes de programación, esto es algo que vuela mucho la cabeza, es muy difícil de entender. Otro feature muy cool que vamos a aprender es event loop, es lo que permite que pueda correr muchos procesos a la vez.

‌
### Entornos de programación

Cuando estamos desarrollando lo hacemos para la WEB, para un celular, para seguidores. Existen diferentes entornos que nos ofrecen APIS, tenemos que conocer todo esto.


### Versado en código
‌
Esto quiere decir que tenemos que leer mucho código, un lugar hermoso para ponernos a leer código es GitHub. Debemos leer mucho y hacerlo de forma muy constante.

### Mejores prácticas

No vamos a reinventar la rueda, hay muchas personas que ya han solucionado los problemas más comunes, tenemos que usar estas soluciones, a estas soluciones se les llama: patrones de diseño.

### Ética
‌
Esta es la parte más importante de ser un profesional. Un buen profesional cumple con los siguientes valores:

- Es responsable.
- Entrega a tiempo sus trabajos.
- Sabe decir que no.
- No hace daño.

### Experiencia
‌
La experiencia no es algo que se pueda enseñar, tenemos que encontrarla nosotros mismos en el camino a ser profesionales. Todo está en nosotros, tenemos que estudiar y practicar mucho.


## DOM

Representación de un documento de etiquetas HTML, ceardo el navegador recibe este archivo la tiene que convertir en una estructura parecido a un arbol.Cuando el navegador termina de convertirlo se genera el evento DOMContentLoaded.

### Atributo ASYNC y DEFER

- ASYNC: Scripts externos, script feching asincrona y no detiene procesamiento del DOM hasta que se reciban los datos y sea necesaria la ejecución

- DEFER: Deferir la ejecucion hasta el final del procesamiento del HTML.

## Como funciona JavaScript
[33 Conceptos de JS](https://github.com/leonardomso/33-js-concepts)
### ¿Qué hace un JS Engine?
- Recibe código fuente
- Parsea el código y produce un Abstract Syntax Tree (AST)
- Se compila a bytecode y se ejecuta
- Se optimiza a machine code y se reemplaza el código base
### Bytecode vs Machine Code
1. Bytecode:
    - Código parcido a assembly.
    - Portatil
    - Ejecutado por una virtual machine

2. Machine Code:
    - Binario
    - Instrucciones específicos a una arquitecturo o procesador

## Parser
Código fuente -> Tokens -> AST
- SyntaxError
- budling y code spliting

[Esprima](https://esprima.org/)
[AST Explorer](https://astexplorer.net/)

### V8 Parser:
- Eager parsing: Encuentra errores de sintaxis, crea Ast
- Lazy parsing: Doble de rápido que el eager parser, No crea AST, construye los scopes parcialmente

### Event Loop:
Lo que hace que javaScript parezco multhilo a pesar de que corre un solo proceso. administra las tareas del task queue al stack ( si este está vacio).
- Stack y Memory Heap: en el stack ultima que entra primera que sale
- Queue: Fila, primero que entra primero que sale. Fila de tareas
- Promises: Micro tareas

## Proxy:
Igual que las gettors y setters el proxy es uno dol als features más recientes del Igual que los getters y setters el proxy es uno de los features más recientes del lenguaje.

El objeto Proxy se usa para definir un comportamiento personalizado para operaciones fundamentales
por ejemplo, para observar propiedades, cuando se asignan, invocación de funciones, etc.

`new Proxy(target, handler)`

Básicamente, antes de que la llamada llegue al objeto original (target) podemos manipularla con una lógica que nosotros definamos.
- Target:Target es mi objeto a supervisar. Puede ser cualquier objeto, array,función o incluso otro proxy
- Traps:Son los métodos interceptores que proveen acceso a las propiedades.Todas las trampas son opcionales. Si no se ha definido una trampa, el comportamiento predeterminado es reenviar la operación al target.
- Handler: es un objeto con funciones (trampa) que definen el comportamiento del proxy cuando una operación es realizada en él.

Cualquier operación que hagas en el proxy se enviara al objeto original.

## Generators

Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron.
Su contexto (el valor de las variables, parámetros y funciones) será conservado o recordado al momento de retornar la ejecución de la función con .next

### Caracteristicas:
- Empiezan suspendidos y se tiene que llamar next para que se ejecuten
- Regresan un value y un boolean que nos indica si ya se acabo o no la ejecución del generador.
- yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.

## DOM API IntersectionObserver

Sirve para observar elementos de forma asíncrona.Si este elemento que estamos observando cruza un umbral (la intersección del elemento con un elemento ancestro o con el viewport) que nosotros definamos nos lo va notificar para tomar alguna acción.

- viewport:En términos de navegadores web, se refiere a la parte del documento que usted está viendo, la cual es actualmente visible en su ventana.El contenido fuera del viewport no es visible en la pantalla hasta que sea desplazado dentro de él.

## DOM API Page Visibility:
La API de Visibilidad de Pagina ofrece eventos que puedes escuchar para saber cuando un documento se convierte en visible o en oculto.Cuando el usuario minimiza la ventana o cambia a otra persaña, la API manda un evento de visibilitychange,esta puede ser una herramienta interesante tambien en los siguientes casos:
- Un sitio tiene un carrusel de imágenes que no debería avanzar a la siguiente diapositiva a no ser que el usuario esté viendo la página.
 
- Una aplicación que muestra un panel de información y no se quiere que se actualice la información del servidor cuando la página no está visible.
 
- Una página quiere detectar cuando se está precargando para poder mantener un recuento preciso de las vistas de página.
 
- Un sitio desea desactivar los sonidos cuando el dispositivo está en modo de espera (el usuario presiona el botón de encendido para apagar la pantalla).

# TypeScript
Es unn lenguaje de programacíon de código abierto desarrollado y mantenido por Microsoft.Es un superset de JavaScript, añade tipos a nuestras variables y objetos basados en clases. Afudando así a la detección de errores de forma temprano y mejorando el autocompletado.En typeScript, admitimos las mismos tipos de dates que esperaría en JavaScript, con un tipo de enumeración conveniente para ayudar a las cosas.

### Que es un super set?
Es un lenguaje escrito encima de otro lenguaje o mejor dicho, que compila a otro lenguajo. En el caso de TypeScript es un lenguaje que compilo a javaScripe, pero que inclupe muchas facilidades y ventajas

## Parcel
Parar lograr trabajar con TypeScript necesitamos instalar un diferente tipo de servidor; live-server no es capaz de transpilar código typeScript a javaScript. para eso se emplea parcel.
`npm install -D parcel-bundler`
Tambien es posible compilar TypeScript en JavaScript y ejecutar

# Patron de diseño

Los patrones de diseño son unas técnicas para resolver problemas comunes en el desarrollo de software y otros ámbitos referentes al diseño de interacción o interfaces.

Un patrón de diseño resulta ser una solución a un problema de diseño. Para que una solución sea considerada un patrón debe poseer ciertas características. Una de ellas es que debe haber comprobado su efectividad resolviendo problemas similares en ocasiones anteriores. Otra es que debe ser reutilizable, lo que significa que es aplicable a diferentes problemas de diseño en distintas circunstancias.1

## Objetivos de los patrones de diseño

- Proporcionar catálogos de elementos reusables en el diseño de sistemas software.
- Evitar la reiteración en la búsqueda de soluciones a problemas ya conocidos y solucionados anteriormente.
- Formalizar un vocabulario común entre diseñadores.
- Estandarizar el modo en que se realiza el diseño.
- Facilitar el aprendizaje de las nuevas generaciones de diseñadores condensando conocimiento ya existente.

## Asimismo, no pretenden:

- Imponer ciertas alternativas de diseño frente a otras.
- Eliminar la creatividad inherente al proceso de diseño.
- No es obligatorio utilizar los patrones, solo es aconsejable en el caso de tener el mismo problema o similar que soluciona el patrón, siempre teniendo en cuenta que en un caso particular puede no ser aplicable. “Abusar o forzar el uso de los patrones puede ser un error”.

## Crítica
- Los patrones de diseño son una forma de complejidad
- Son soluciones a las limitaciones de un lenguaje de programación
- "Cuando lo que tienes es un martillo, todo te parece un clavo."

## Categorías de patrones de diseño:
Builder: 
### Creacionales
Proveen diferentes mecanismos para crear objetos:
- Abstract Factory
- Builder:es usado para permitir la creación de una variedad de objetos complejos desde un objeto fuente.Separa la creación de un objeto complejo de su estructura, de tal forma que el mismo procesa de construcción puede servir para crear representaciones diferentes.(EJ: jquery);
- Factory Method
- Prototype
- Singleton: Es un patrón que te asegura que una clase salo tiene una instanca.Esta única instancia puede ser consumida por cualquier otro objeto.
 
### Estructurales
Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes:
- Adapter
- Bridge
- Composite
- Decorator:El patrón Decorator responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto. Esto nos permite no tener que crear sucesivas clases que hereden de la primera incorporando la nueva funcionalidad, sino otras que la implementan y se asocian a la primera.
"Una entidad de software(clase,módulo, función, etc.) debe quedar abierta para su extensión, pero cerrada para su modificación"
- Facade
- Flyweight
- Proxy
 
### Comportamiento
Gestionan algoritmos y responsabilidades entre objetos.
- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer:Observador (en inglés: Observer) es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes. Se trata de un patrón de comportamiento (existen de tres tipos: creación, estructurales y de comportamiento), por lo que está relacionado con algoritmos de funcionamiento y asignación de responsabilidades a clases y objetos.(ej:REDUX)
- State
- Strategy
- Template Method
- Visitor

## Links:
- Paginas:
[Layout](https://every-layout.dev/)
[Media queries](https://mediaqueri.es/)
Libros
[Patrones de diseño](http://www.uml.org.cn/c++/pdf/DesignPatterns.pdf)
[Alexander a pattern Language](https://arl.human.cornell.edu/linkeddocs/Alexander_A_Pattern_Language.pdf)
[Timeless Way](http://library.uniteddiversity.coop/Ecological_Building/The_Timeless_Way_of_Building_Complete.pdf)
[Patrones de diseño Blog](https://refactoring.guru/es/design-patterns)
