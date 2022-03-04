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

function createLearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  const private = {
    "_name": name,
    "_courses": courses,
  };

  const public = {
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get courses() {
      return private["_courses"];
    },
  };

  return public;
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
    "_learningPaths": learningPaths,
  };

  const public = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get learningPaths() {
      return private["_learningPaths"];
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }

      if (!newLP.courses) {
        console.warn("Tu LP no tiene courses");
        return;
      }

      if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista (*de cursos)");
        return;
      }
      
      private["_learningPaths"].push(newLP);
    },
  };

  return public;
}
// Object.defineProperty(public,"readName",{
//     configurable:false,
//     writable:false
// })
// Object.defineProperty(public,"changeName",{
//     configurable:false,
//     writable:false
// })

const juanDC= createStudent({
    name: "Juanito",
    age: 18,
    email: "juanito@frijolitos.com",
    twitter: "fjuandc",
  });
  
  console.log(Object.getOwnPropertyDescriptors(juanDC));