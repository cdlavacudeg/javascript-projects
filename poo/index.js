import {Student,FreeStudent,BasicStudent,ExpertStudent,TeacherStudent} from "./student.js";
import LearningPath from "./learningPath.js";
import Course from "./course.js";

//Courses
const cursoProgBasic=new Course({
    name:'Programación Básica',
    isFree:true,
});


const cursoDefinitivoHTML=new Course({
    name:'Curso Definitivo de HTML y CSS'
});
const cursoPracticoHTML=new Course({
    name:'Curso Práctico de HTML y CSS'
});

const cursoResponsive = new Course({
    name:'Curso Responsive',
    lang:'English',
});

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

// Students
const juan2 = new BasicStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths:[escuelaWeb],
});

const miguelito2 = new FreeStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths:[escuelaVJ,escuelaWeb]
});

// Teachers

const fredy= new TeacherStudent({
    name: "Fredy Vega",
    username: "fredyVega",
    email: "f@gep.com",
    twitter: "fvega",
    learningPaths:[escuelaVJ,escuelaWeb]
});
console.log(miguelito2);
miguelito2.publicarComentario('Excelente Curso');
console.log(fredy);
fredy.publicarComentario('Bienvenidos');