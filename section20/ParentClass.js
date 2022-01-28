export class  ParentClass{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
    printName(){
        console.log('this is my name')
    }
}