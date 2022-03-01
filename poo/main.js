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

// Ventajas de POO
const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
      twitter: "fjuandc",
       instagram: "fjuandc",
      facebook: undefined,
   },
   aprovedCourses:[
       'Curso definitivo de HTML y CSS',
       'Curso práctico de HTML y CSS'
   ],
   learningPaths:[
        {
            name: "Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design",
            ]
        },
        {
            name: "Escuela de videojuegos",
            courses: [
                "Curso Introducción a la producción de VGS",
                "Curso Ureal Engine",
                "Curso de Unity 3D",
            ]
        },
   ],
};
//es demasiado tedioso si tenemos muchos estudiantes
class LearningPath{
    constructor({
        name,
        courses
    }){
        this.name=name;
        this.courses=courses;
    }
}

const escuelaWeb= new LearningPath({
    name:'Escuela de desarrollo Web',
    courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
    ]
})

const escuelaVJ= new LearningPath({
    name: "Escuela de videojuegos",
    courses: [
        "Curso Introducción a la producción de VGS",
        "Curso Ureal Engine",
        "Curso de Unity 3D",
    ]
});

class Student3{
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        aprovedCourses=[],
        learningPaths=[]
    }){
        this.name=name;
        this.email=email;
        this.username=username;
        this.socialMedia={
            twitter,
            instagram,
            facebook
        };
        this.aprovedCourses=aprovedCourses;
        this.learningPaths=learningPaths;
    }

}

const juan2 = new Student3 ({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths:[escuelaWeb],
});

const miguelito2 = new Student3({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths:[escuelaVJ,escuelaWeb]
  });