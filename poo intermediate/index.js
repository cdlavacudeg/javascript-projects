const juan= {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log(`This: ${this}`);
        console.log(`This aproved courses: ${this.approvedCourses}`);
        this.approvedCourses.push(newCourse);
    }
}
// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));
// console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan,"navigator",{
    value:"Chrome",
    enumerable:false,
    writable:true,
    configurable:true
})
Object.defineProperty(juan,"editor",{
    value:"VSCode",
    enumerable:true,
    writable:false,
    configurable:true
})
Object.defineProperty(juan,"terminal",{
    value:"WSL",
    enumerable:true,
    writable:true,
    configurable:false
})
Object.defineProperty(juan,"pruebaNASA",{
    value:"extraterestres",
    enumerable:true,
    writable:true,
    configurable:true
});

console.log(Object.getOwnPropertyDescriptors(juan));
//Object.seal()-> hace que las propiedades sean configurable false
//Object.freeze()-> hace que las propiedades sean configurable false y writable false
