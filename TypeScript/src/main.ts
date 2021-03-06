console.log('Hola Platzi');

// Tipo: Number
// Explicito
let phone: number;
phone=1;
phone=54234567;
// phone='hola';//Error

// Inferido
let phoneNumber=3138547;
// phoneNumber= true;//Error por tipo
let hex: number=0xfffff;//Hexadecimal 0x
let binari: number=0b101011;//Binario 0b
let octal: number=0o744;//Octal 0o


// Tipo:Boolean
let isPro: boolean;
isPro=true;
// isPro='true';//Error

//Inferido
let isUserPro=false;
isUserPro=true;
// isUserPro=1;//Error

// Tipo:String
let username:string='Cristian';
username='David';
// username=true;//Error

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo=`
    User Info:
    username:${username}
    firstname:${username} David
    phone:${phone}
    isPro:${isPro}
`;

console.log('userInfo',userInfo);

// Any

// Tipo explicito
let idUser: any;
idUser=1;//number
idUser='1';//string
console.log('idUser', idUser);

// Tipo Inferido
let otherId;
otherId=1;
otherId='1';

console.log('atherId', otherId);

let surprise:any='hello typescript';
// surprise.sayHello();//Error
const res=surprise.substring(6);
console.log('res',res);

// Void

// Tipo Explicito
function showInfo(user:any): void{
    console.log('User Info',user.id, user.username,user.firstName);
}
showInfo({id:1,username:'crislav',firstName:'Cristian'});

// Tipo inferido
function showFormattedInfo(user: any) {
    console.log('User Info',
    `id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}`);
}

showInfo({id:1,username:'crislav',firstName:'Cristian'});

//  Tipo void, como tipo de dato en variable
let unusable: void;
// unusable=null; //Error si no se desactiva el strict mode.
unusable=undefined;

// Never

function handleError(code:number,message:string): never{
    //Process your code here
    // Generate a message
    throw new Error(`${message}.Code: ${code}`);
}
try{
    handleError(404,'Not Found');
}catch(error: any){
    console.log(error.message);
}

function sumNumbers(limit:number):never{
    let sum=0;
    while(true){
        sum++;
    }
    //  return sum;
}

// sumNumbers(10);
// ciclo infinito el programa nunca termina


// Null
// Explicita
let nullVariable: null;
nullVariable=null;
// nullVariable=1;//solo acepta null

let otherVariable=null;//Lo toma como any
otherVariable='test';

// undefined
let undefinedVariable: undefined=undefined;
// undefinedVariable='test';//Sola acepto undefined
let otherUndefined=undefined;//Lo toma como any
otherUndefined='test';


// Null y undefined: Como subtipos

// --strictNullChecks
let albumName: string;
// albumName=null;
// albumName=undefined;

// type: object
let user: object;
user={};//Object
user={
    id:1,
    username:'crislav',
    firstName:'David',
    isPro:true
};

console.log('user',user);
// console.log('user.username',user.username);// Error por el tipo object

// Tipo; Object
const myObj={
    id:1,
    username:'crislav',
    firstName:'David',
    isPro:true
};
const isInstance=myObj instanceof Object;// clase Object JavaScript
console.log('user.username',myObj.username);

// Tipo: Array
// corchetes []

// Explicito
let userArray: string[];
let myArray: (string|number)[];
userArray=['kimbara','crislav','sebaslav'];
// userArray=[1,true,'test'];//Error

// Tipo Inferido
let otherUserArray=['kimbara','crislav','sebaslav'];


// Array<tipo>
let pictureTitles: Array<string|number>;
pictureTitles=['Sunrise','Landscape'];

// Accediendo a los valores Array
console.log('first user', userArray[0]);
console.log('first title',pictureTitles[0]);

// Propiedades en Array
console.log(userArray.length);

// Tuplas
let userNumberId: [number,string];
userNumberId=[1,'luixaviles'];
console.log(userNumberId);
console.log('usernama',userNumberId[1]);

// Tuplas con varios valores
// id,username,isPro
let userInfoTuple: [number,string,boolean];
userInfoTuple=[2,'cristian',true];
console.log(userInfoTuple);

// Arreglo de tuplas
let array: [number,string][]=[];
array.push([1,'Cristian']);
array.push([2,'Sebas']);
// array.push([1,1]);//error
console.log(array);

// Enum
// Orientaci??n para Fotografias

enum PhotoOrientation{
    Landscape = 0,//0
    Portrait = 1,//1
    Square = 2,//2
    Panorama = 3//3
}

const lanscape: PhotoOrientation=PhotoOrientation.Landscape;
console.log(lanscape);
console.log(PhotoOrientation[lanscape]);

enum PictureOrientation{
    Landscape = 10,
    Portrait,//11
    Square,//12
    Panorama//13
}
console.log('portrait',PictureOrientation.Portrait);

enum Country{
    Bolivia='bol',
    Colombia='col',
    Mexico='mx'
}

const country: Country=Country.Colombia;
console.log('Country',country);

// Union de tipos
// 10,'10
// let idUsers: number|string;
// idUsers=10;
// idUsers='10';

// // Buscar username dado un ID
// function getUsernameById(id:number|string){
//     // logica do negocio, find the user
//     return 'Cristian';
// }

// Alias de tipos
type IDUser=number|string;
let idUsers: IDUser;
idUsers=10;
idUsers='10';

// Buscar username dado un ID
function getUsernameById(id:IDUser){
    // logica do negocio, find the user
    return 'Cristian';
}

// Tipos literales
// 100x100, 500x500, 1000x1000
type SqueareSize='100x100'|'500x500'|'1000x1000';
// let smallPicture:SqueareSize='200x200';//Error
let smallPicture:SqueareSize='100x100';
let mediumPicture:SqueareSize='500x500';


// Asersiones de tipo
// <>// Angle bracket syntax
let usernameA : any;
usernameA = (<string>'danijazzero').toUpperCase()
///as: variable as type
usernameA = (username as string).toLowerCase() 