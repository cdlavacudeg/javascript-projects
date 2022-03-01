import Student from "./student.js";
import LearningPath from "./learningPath.js";
import Course from "./course.js";

//Courses
const cursoProgBasic=new Course({
    name:'Programación Básica'
})
const cursoDefinitivoHTML=new Course({
    name:'Curso Definitivo de HTML y CSS'
})
const cursoPracticoHTML=new Course({
    name:'Curso Práctico de HTML y CSS'
})

const cursoResponsive = new Course({
    name:'Curso Responsive'
})

// Learning Paths
const escuelaWeb= new LearningPath({
    name:'Escuela de desarrollo Web',
    courses: [
        cursoProgBasic,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        cursoResponsive
    ]
})

const escuelaVJ= new LearningPath({
    name: "Escuela de videojuegos",
    courses: [
        cursoProgBasic,
        "Curso Introducción a la producción de VGS",
        "Curso Unreal Engine",
        "Curso de Unity 3D",
    ]
});
const escuelaData= new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        "Curso DataBusiness",
        "Curso Dataviz",
    ]
});

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths:[escuelaWeb],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths:[escuelaVJ,escuelaWeb]
});

console.log(miguelito2);