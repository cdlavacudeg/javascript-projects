// Shallow Copy
const obj1={
    a:"a",
    b:"b",
    c:{
        d:"d",
        e:"e"
    },
    editA(){
        this.a="AAAAAA";
    }
};

const obj2={};

for(prop in obj1){
    obj2[prop]=obj1[prop];
}

const obj3=Object.assign({},obj1);//no soluciona objetos dentro de otros objetos
const obj4=Object.create(obj1);//no soluciona objetos dentro de otros objetos, la copia original si lo afecta.

//Deep Copy

// no funciona con los metodos
const stringifiedobj5=JSON.stringify(obj1);
const obj5=JSON.parse(stringifiedobj5);


// Deep Copy recursividad

function isObject(subject){
    return typeof subject=="object";
}
function isArray(subject){
    return Array.isArray(subject);
}



function deepCopy(subject){
    let copySubject;

    const subjectIsArray=isArray(subject);
    const subjectIsObject=isObject(subject);
    
    if(subjectIsArray){
        copySubject=[];
    }else if (subjectIsObject){
        copySubject={};
    }else{
        return subject
    }

    for(key in subject){
        const keyIsObject=isObject(subject[key]);
        if(keyIsObject){
            copySubject[key]=deepCopy(subject[key]);
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else{
                copySubject[key]=subject;
            }
        }

    }
    return copySubject;
}

const obj6=deepCopy(obj1);

// abstracción con objetos literales y deep copy

const studentBase={
    name:undefined,
    email:undefined,
    age:undefined,
    approvedCourses:undefined,
    lerningpath:undefined,
    socialMedia:{
        twitter:undefined,
        instagram:undefined,
        facebook:undefined,
    }
};

const juan=deepCopy(studentBase);
Object.seal(juan);
// Object.defineProperty(juan,'name',{
//     value:'Juanito',
//     configurable:false,
// })

juan.name='Juanito';
console.log(Object.isSealed(juan));
console.log(Object.isFrozen(juan));

//Factory pattern RORO receive object return object

function requiredParam(param){
    throw new Error(`${param} es obligatorio`);
}

function LearningPath({
    name = requiredParam("name"),
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;  
}
  
function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  
    const private = {
      "_learningPaths": [],
    };
  
    Object.defineProperty(this, "learningPaths", {
      get() {
        return private["_learningPaths"];
      },
      set(newLp) {
        if (newLp instanceof LearningPath) {
          private["_learningPaths"].push(newLp);
        } else {
          console.warn("Alguno de los LPs no es una instancia dell prototipo LearningPath");
        }
      },
    });
  
    for (learningPathIndex in learningPaths) {
      this.learningPaths = learningPaths[learningPathIndex];
    }
  }
  
const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});