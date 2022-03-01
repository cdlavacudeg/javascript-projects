export default class Course{
    #name;
    constructor({
        name,
        clases=[]
    }){
        this.#name=name;//guion # no permite que se llame el atributo
        this.clases=clases;
    }
    //getters y setters
    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name=newName;
    }
}
/* 
const cursoProgBasica = new Course({
    name:"Curso gratis de programación básico",
})
cursoProgBasico.name//getter
cursoProgBasico.name='Nuevo Nombre'//setter


*/