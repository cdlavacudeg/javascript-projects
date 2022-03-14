"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPicture(tittle, date, size) {
    // Se crea la fotografia
    console.log('create Picture using', tittle, date, size);
}
createPicture('My birthday', '10-04-2020', '500x500');
createPicture('Colombia', '2020-03'); //usar parametros opcionales variable?: tipo
// Flat Array Function
let createPic = (title, date, size) => {
    // return{
    //     title:title,
    //     date:date,
    //     size:size
    // }
    return {
        title,
        date,
        size
    };
};
const picture = createPic('Perú', '2022-03');
console.log(picture);
// Tipo de retorno con TypeScript
function handleError(code, message) {
    // Procesamiento del código,mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has ocurred';
    }
}
try {
    let result = handleError(200, 'Ok'); //String
    console.log(result);
    result = handleError(404, 'error'); //never, error no valido
    console.log(result);
}
catch (error) {
}
// Funcion que recibe otra función
function apply(items, fn) {
    ///....
    return fn(items[0]);
}
