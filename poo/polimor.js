class Comment{
    constructor({
        content,
        studentName,
        studentRole="Estudiante",
    }){
        this.content=content;
        this.studentName=studentName;
        this.studentRole=studentRole;
        this.likes=0;
    }

    publicar(){
        console.log(`${this.studentName}(${this.studentRole})`);
        console.log(this.likes+" Likes");
        console.log(this.content);
    }
}

export {Comment};