# Fundamentos de Typescript

## Qué es TypeScript?

Es un super conjunto tipado de javascripe, que compila javascrip.
- Lenguaje de Programación Tipado
- Lenguaje de Alto Nivel: se puede leer por humanos y posee in alto nivel do abstracción del código de maquina
- Genera como resultado JavaScript
- Código abierto
- Desarrolla en cualquier Sistema operativo
- El códige puede ejecutarse en cualquier navegador

TypeScripe soporta las caracteristicas de JavaScript.

## Porqué usar TypeScirpt
- Programación Orientada a objetas
- Potencia tu código JavaScript
- Mayor Productividad
- Poderoso sistema de tipos
- Compila actualizaciones de JS (ES5,ES6 ...)
- Puede prevenir cerca del 15% de bugs
- Puede usar TypeScirpt para backend 

## [Typescript en Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript)
El editor Visual Studio Code viene configurado para aprovechar al máximo TypeScript.
Entre las features se encuentran:

- IntelliSense
- Snippets
- JSDocs
- Formateo
- Refactorización
- Arreglos rápidos.
- Les anexo el enlace de consulta:

## Instalación de TypeScript
Con el siguiente comando lo instalaremos de manera global:
`npm install -g typescript`
Consultar la versión del compilador de TS:
`tsc -v`
Compilar nuestros ficheros .ts
`tsc your_file.ts`
Compilar de manera ‘automática’ nuestros ficheros .ts
`tsc --watch your_file.ts`
`tsc -W your_file.ts`
No hay que tenerle miedo al TypeScript, ya que este nos creará un archivo: `your_file.js.`
Es decir un archivo .js compatible con todo.

## Archivo de configuración de TypeScript
inicializar el archivo tsconfig.json ejecutar `tsc --init`.

```typescript
{       
    "extends":"./config/base",//Extender configuraciones
    "compileOnSave":true,//Watch
    "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "strict": true,
            "removeComments": true
    },
    "include": [
            "src/**/*. ts"
    ],
    "exclide":[
        "node_modules"
    ]
}
```

`tsc`-> Busca la configuración
`tsc --project platzi`-> Especifica un directorio que contiene la configuración
`tsc file.ts`->Omite la configuración

## Tipado en TypeScirpt
- Explícito: Define una sintaxis para la creación de variables con tipo de dato `variable: tipo = valor`.
- Inferido: TypeScirpt tiene la habilidad de "deducir' el tipo de función de un valor.`

### [Tipos Básicos](https://www.youtube.com/watch?v=cC65D2q5f8I)
- Primitivos: Number Boolean String Array Tuple Enum Any Void Null Undefined Never Object

#### Number:
- Valores numéricos
- Valores hexadecimales
- Valores binarios
- Valores hexadecimales
#### Bolean:
Tipo de dato más simple `true, false`

#### String
- Datos textuales o cadenas '' ""
- Template String: Múltiples lineas de texto, contener expresiones o variables embebidas `` y ${expr}

### Any
No se recomienda su uso, puede generar errores indeseados. Solo usar como ultima opcion.
- Usado para capturar valores dinámicos
- Los valores pueden cambior de tipo en el tiempo: APIs externas, Librerías de terceros

### Void
- es la opuesto de any: representa la ausencia de tipo
- comúnmente se usa como tipo de retorno en funciones.


### Never
Representa el tipo de valor que nunco ocurre
- Funciones que lanzan excepciones
- Funciones que nunca retornan un valor

#### Null y Undefined
En TypeScript, ambos “valores” tienen sus respectivos tipos null y undefined.Además,Null y Undefined se pueden asumir como subtipos de los otros tipos de datos.Significa que se pueden asignar null y undefied a una variable de tipo string, por ejemplo.

- `Opción --strictNullChecks`:Solo permite asignar null y undefined a una variable de tipo any o a sus respectivos. Ayua a evitar errores comunes en programación de apps en el ámbito JavaScript
Generará un reporte de los errores que encuentre, hacemos `tsc nombreDelArchivo.ts --strictNullChecks`.

#### object vs Object
- object: Es el tipo de dato que representa un valor no pimitivo. No se puede acceder a las propiedades del objeto.
- Object: instancia de la clase Object de JavaScript

#### Array
- Al igual que JavaScript, TypeScirpt permite definer un areglo para contener un conjunto de valores
- Usa dos notaciones: `[] y Array<tipo>`

#### Tuple
- Las tuplas permiten expresar un arreglo con un número fijo de elementos
- Los tipos de datos son conocidos

#### Enum
Los enumerados permite definer un conjunto de constantes con nombre, tienen la ventaja de adaptarse al contexto do la aplicación.

### Unión de Tipos, Alias y Tipos Literales

#### Unión de Tipos
En TypeScript se puede definor una variable con múltiplos tipos de datos: Union Type, se usa el símbolo de pipe ('|') entre los tipos

#### Alias de tipos
TypeScript permite croar un alias como nuevo nombre para un tipo, el alias se puedo aplicar tambión a un cojunto o combinación de tipos,se usa la palabra reservada `type`.
#### Tipos literales
- Una variable con un tipo literal puede contener únicamente una cadena del conjunto
- Se usan cadenas como "tipos", combinados con el símbolo de pipe ('|') entre ellos.

### Aserciones de tipos
Cuando el programador puede conocer má que TypeScirpt sobre el valor de una variable.Se parece al casting de tipos en otros lengajos du programación. `<Angle Bracket> y (variable as tipo)`.

## Interfaces de TypeScript

Las interfaces en TypeScript constituyen una forma poderosa de definer "contratos" tanto para un proyecto, comopara el código externo del mismo.

Una interfaz (En TypeScript) es un tipo (como string, boolean, number, etc) mas “complejo”, en el cual defines (como enun contrato) las propiedades y metodos que se deben cumplir de cualquier objeto que lo instancie.

La diferencia entre una interfaz y una clase es que en la interfaz solo hacemos mencion de que esperamos de un objeto, en una clase mencionamos las propiedades (igual que una interfaz) pero definimos los metodos (osea, especificamos que hara ese metodo, en la interfaz solo mencionamos el nombre de la funcion).

```typescript

interface Picture{//Contrato o molde del objeto
    title:string,
    date:string,
    orientation: PhotoOrientation
}
function showPicture(picture:Picture){
    console.log(`[title:${picture.title},
                 date:${picture.date},
                 orientation:${picture.orientation}]`);
}

```
### Propiedades opcionales
Establecemos una propiedad como opcional con el símbolo (?) después del nombre.
```typescript
interface PictureConfig{
    title?:string,
    date?:string,
    orientation?: PhotoOrientation
}

function generatePicture(config:PictureConfig){
    const pic={title:'Default',date:'2020-03'};
    if (config.title){
        pic.title=config.title;
    }
    if (config.date){
        pic.date=config.date;
    }
    return pic;
}
```
### Propiedades de solo lectura
Algunas propiedades de la interfaz podrían no ser modificables una vez creado el objeto.
Esto es posible usando `readonly` antes del nombre de la propiedad.

```typescript
interface User{
    readonly id:number;
    username: string;
    isPro:boolean;
}
```
### Extendiendo interfaces
Las interfaces pueden extenderse unas de otras. Esto permite copiar las miembros fa definedos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes.
```typescript
interface Entity{
    id:number,
    title:string,
}

interface Album extends Entity{
    // Copia atributos de Entity
    description:string;
};
```