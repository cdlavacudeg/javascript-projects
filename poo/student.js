export default class Student{
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
