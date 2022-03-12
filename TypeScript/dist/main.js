"use strict";
console.log('Hola Platzi');
// Tipo: Number
// Explicito
let phone;
phone = 1;
phone = 54234567;
// phone='hola';//Error
// Inferido
let phoneNumber = 3138547;
// phoneNumber= true;//Error por tipo
let hex = 0xfffff; //Hexadecimal 0x
let binari = 0b101011; //Binario 0b
let octal = 0o744; //Octal 0o
// Tipo:Boolean
let isPro;
isPro = true;
// isPro='true';//Error
//Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro=1;//Error
// Tipo:String
let username = 'Cristian';
username = 'David';
// username=true;//Error
// Template String
// Uso de back-tick `
let userInfo;
userInfo = `
    User Info:
    username:${username}
    firstname:${username} David
    phone:${phone}
    isPro:${isPro}
`;
console.log('userInfo', userInfo);
// Any
// Tipo explicito
let idUser;
idUser = 1; //number
idUser = '1'; //string
console.log('idUser', idUser);
// Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('atherId', otherId);
let surprise = 'hello typescript';
// surprise.sayHello();//Error
const res = surprise.substring(6);
console.log('res', res);
// Void
// Tipo Explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'crislav', firstName: 'Cristian' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info', `id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}`);
}
showInfo({ id: 1, username: 'crislav', firstName: 'Cristian' });
//  Tipo void, como tipo de dato en variable
let unusable;
// unusable=null; //Error si no se desactiva el strict mode.
unusable = undefined;
// Never
function handleError(code, message) {
    //Process your code here
    // Generate a message
    throw new Error(`${message}.Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
    console.log(error.message);
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
    //  return sum;
}
// sumNumbers(10);
// ciclo infinito el programa nunca termina
// Null
// Explicita
let nullVariable;
nullVariable = null;
// nullVariable=1;//solo acepta null
let otherVariable = null; //Lo toma como any
otherVariable = 'test';
// undefined
let undefinedVariable = undefined;
// undefinedVariable='test';//Sola acepto undefined
let otherUndefined = undefined; //Lo toma como any
otherUndefined = 'test';
// Null y undefined: Como subtipos
// --strictNullChecks
let albumName;
// albumName=null;
// albumName=undefined;
