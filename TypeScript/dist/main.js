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
