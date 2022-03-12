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
// type: object
let user;
user = {}; //Object
user = {
    id: 1,
    username: 'crislav',
    firstName: 'David',
    isPro: true
};
console.log('user', user);
// console.log('user.username',user.username);// Error por el tipo object
// Tipo; Object
const myObj = {
    id: 1,
    username: 'crislav',
    firstName: 'David',
    isPro: true
};
const isInstance = myObj instanceof Object; // clase Object JavaScript
console.log('user.username', myObj.username);
// Tipo: Array
// corchetes []
// Explicito
let userArray;
let myArray;
userArray = ['kimbara', 'crislav', 'sebaslav'];
// userArray=[1,true,'test'];//Error
// Tipo Inferido
let otherUserArray = ['kimbara', 'crislav', 'sebaslav'];
// Array<tipo>
let pictureTitles;
pictureTitles = ['Sunrise', 'Landscape'];
// Accediendo a los valores Array
console.log('first user', userArray[0]);
console.log('first title', pictureTitles[0]);
// Propiedades en Array
console.log(userArray.length);
// Tuplas
let userNumberId;
userNumberId = [1, 'luixaviles'];
console.log(userNumberId);
console.log('usernama', userNumberId[1]);
// Tuplas con varios valores
// id,username,isPro
let userInfoTuple;
userInfoTuple = [2, 'cristian', true];
console.log(userInfoTuple);
// Arreglo de tuplas
let array = [];
array.push([1, 'Cristian']);
array.push([2, 'Sebas']);
// array.push([1,1]);//error
console.log(array);
// Enum
// Orientación para Fotografias
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; //3
})(PhotoOrientation || (PhotoOrientation = {}));
const lanscape = PhotoOrientation.Landscape;
console.log(lanscape);
console.log(PhotoOrientation[lanscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama"; //13
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait', PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mx";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('Country', country);
