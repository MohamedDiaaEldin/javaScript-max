// class Person {
//     constructor (name, age){
//         this.name = name
//         this.age = age
//     }

//     getName(){
//         return this.name
//     }
//     setName(name){
//         this.name = name
//     }
// }

// const p = new Person('mohamed', 22)
// console.log(p)
// p.setName('ali')
// console.log(p.getName())
// console.log(p)


/// function ass classes 
function Person(name , age){
    this.name = name
    this.age = age
    this.getName = function(){
        return this.name
    } 
    this.setName = function(name){
        this.name = name
    } 
    this.toString = function(){
        return this.name + " " + this.age
    }
}   

const p = new Person('mohamed', 22)
console.log(p)
p.setName('ali')
console.log(p.getName())
console.log(p)
