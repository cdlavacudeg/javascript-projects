class Student{
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

class ExpertStudent extends Student {
    constructor(props){
        super(props);
    }
    aproveCourse(newCourse){
        this.aprovedCourses.push(newCourse);   
    }
}

class FreeStudent extends Student {
    constructor(props){
        super(props);
    }
    aproveCourse(newCourse){
        if(newCourse.isFree){
            this.aprovedCourses.push(newCourse);
        }else{
            console.warn(`Lo sentimos, ${this.name}.Solo puedes tomar cursos gratuitos`)
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props);
    }
    aproveCourse(newCourse){
        if(newCourse.lang !=="English"){
            this.aprovedCourses.push(newCourse);
        }else{
            console.warn(`Lo sentimos, ${this.name}.No puedes tomar cursos en Inglés.`)
        }
    }
}

export {Student,FreeStudent,BasicStudent,ExpertStudent};