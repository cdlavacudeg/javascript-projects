export  {};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
// Herencia
// Super clase
abstract class Item{//Con abstrac no se pueden crear elementos a partir de la clase
    protected readonly _id:number;
    title: string;
    
    constructor(id:number,title:string){
        this._id=id;
        this.title=title;
        
    }
    // getters y setters
    get id(){
        return this._id;
    }

    // set id(id:number){ // Solo Lectura
    //     this._id=id;
    // }
}
class Picture extends Item{
    public static photoOrientation=PhotoOrientation;
    // Propiedades
    orientation: PhotoOrientation;

    constructor(id:number,title:string,orientation:PhotoOrientation){
        super(id,title);
        // this._id=id;
        // this.title=title;
        this.orientation=orientation;
    }
    
    
    // Comportamiento, metodos
    toString(){
        return `[id:${this.id},
                 title:${this.title},
                 orientation:${this.orientation}]`;
    }

}

class Album{
    #id:number; //acceso privado con ES6, no lo muestra -> mejor encapsulación
    public title:string; //Explicitamente público
    pictures: Picture[];

    constructor(id:number,title:string,){
        this.#id=id;
        this.title=title;
        this.pictures=[];
    }

    get id(){
        return this.#id;
    }
    set id(id:number){
        this.#id=id;
    }
    addPicture(picture:Picture){
        this.pictures.push(picture);
    }
}

const album:Album=new Album(1,'Personal Pictures');
const picture:Picture=new Picture(1,'Platzi Session',PhotoOrientation.Landscape);
album.addPicture(picture);
console.log('album',album);

// Accediendo a los miembros públicos
// picture.id=100;//private y no se puede modificar
console.log(picture.id)//usamos getter
// picture.id=10;//usamos setter // Solo Lectura
console.log(picture.id)//usamos getter
picture.title='Another title';
// album.#id=100//Private y no se puede modificor ES6
album.title='Personal Activities';
console.log(album.id);
album.id=100;
console.log(album.id);
console.log('album',album);

// const item=new Item(1,'Test title');//Error abstract class
// console.log('item',item);

// Probar miembro estatico de Picture
console.log('PhotoOrientation',Picture.photoOrientation);
