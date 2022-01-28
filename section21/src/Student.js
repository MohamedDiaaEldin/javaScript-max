export default class Student {
    constructor(name, age, grade){
        this.name = name
        this.age = age
        this.grade = grade
    }
    printObjectInfo(){
        console.log(this.name, this.age, this.grade)
    }
}