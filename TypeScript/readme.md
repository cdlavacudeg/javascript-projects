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
