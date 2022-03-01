// Objeto Literal
const natalia={
    name:'Natalia',
    age:20,
    cursosAprobados:[
        'Curso definitivo de HTML y CSS',
        'Curso práctico de HTML y CSS'
    ],
    //dos maneras de nombrar metodos en un Objeto literal
    aprobarCurso:function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
    cumplirA(){
        this.age+=1;
    }
};
//Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push('Responsive Design');
natalia.aprobarCurso('React');
natalia.cumplirA();

// Objeto con prototipo

function Student(name,age,cursosAprobados){
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
    this.aprobarCurso=function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    };
}
Student.prototype.cumplirA = function(){
    this.age+=1;
}

const juanita= new Student(
    'Juanita Alejandra',
    15,
    [
        'Videojuegos',
        'Creación de personajes'
    ]
);

juanita.cumplirA();
juanita.aprobarCurso('React');

// Prototipos con la sintaxis de clases

class Student2{
    constructor({
            name, 
            age, 
            cursosAprobados=[],
            email='ejemplo@gmail.com',
        }){
        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
        this.email=email;
        this.aprobarCurso=function(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso);
        };
    }
    cumplirA(){
        this.age+=1;
    }
}

const miguel=new Student2(
    {
        name:'Miguel',
        age:28,
    }
);
miguel.aprobarCurso('React');
miguel.cumplirA();