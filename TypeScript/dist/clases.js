"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Album_id;
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Herencia
// Super clase
class Item {
    constructor(id, title) {
        this._id = id;
        this.title = title;
    }
    // getters y setters
    get id() {
        return this._id;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        // this._id=id;
        // this.title=title;
        this.orientation = orientation;
    }
    // Comportamiento, metodos
    toString() {
        return `[id:${this.id},
                 title:${this.title},
                 orientation:${this.orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album {
    constructor(id, title) {
        _Album_id.set(this, void 0); //acceso privado con ES6, no lo muestra -> mejor encapsulación
        __classPrivateFieldSet(this, _Album_id, id, "f");
        this.title = title;
        this.pictures = [];
    }
    get id() {
        return __classPrivateFieldGet(this, _Album_id, "f");
    }
    set id(id) {
        __classPrivateFieldSet(this, _Album_id, id, "f");
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
_Album_id = new WeakMap();
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Platzi Session', PhotoOrientation.Landscape);
album.addPicture(picture);
console.log('album', album);
// Accediendo a los miembros públicos
// picture.id=100;//private y no se puede modificar
console.log(picture.id); //usamos getter
// picture.id=10;//usamos setter // Solo Lectura
console.log(picture.id); //usamos getter
picture.title = 'Another title';
// album.#id=100//Private y no se puede modificor ES6
album.title = 'Personal Activities';
console.log(album.id);
album.id = 100;
console.log(album.id);
console.log('album', album);
// const item=new Item(1,'Test title');//Error abstract class
// console.log('item',item);
// Probar miembro estatico de Picture
console.log('PhotoOrientation', Picture.photoOrientation);
