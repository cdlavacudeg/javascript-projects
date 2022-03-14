// Crear una Fotografia
export {};
type SquareSize='100x100'|'500x500'|'1000*100';
function createPicture(tittle:string,date:string,size?:SquareSize):void{
    // Se crea la fotografia
    console.log('create Picture using',tittle,date,size);
}
createPicture('My birthday','10-04-2020','500x500');
createPicture('Colombia','2020-03');//usar parametros opcionales variable?: tipo

// Flat Array Function

let createPic=(title:string,date:string,size?:SquareSize):object =>{
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
const picture=createPic('Perú','2022-03');
console.log(picture);

// Tipo de retorno con TypeScript

function handleError(code:number,message:string):never|string{
    // Procesamiento del código,mensaje
    if(message==='error'){
        throw new Error(`${message}. Code error: ${code}`);
    }else{
        return 'An error has ocurred';
    }
}

try{
    let result =handleError(200,'Ok');//String
    console.log(result);
    result=handleError(404,'error');//never, error no valido
    console.log(result);
}catch(error){

}

// Funcion que recibe otra función
function apply(items: number[], fn:(item: number) => number): number{
    ///....
    return fn(items[0]);
}