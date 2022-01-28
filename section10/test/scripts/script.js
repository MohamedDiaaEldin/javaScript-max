// // classes - static - private
// class Student{        
//     static numbers = 0
//     #privateField
//     constructor(name, age, grade){        
//         this.name = name 
//         this.age = age 
//         this.grade = grade                                
//         Student.numbers += 1
//         this.#privateField = 'private field here'  
//     }
    
//     getPrivateFiled(){
//         return this.#privateField
//     }
//     static staticMethod(){
//         console.log('in student static method')
//     }
// }   

// const m = new Student('mohamed', 10, 100)
// const m2 = new Student('mohamed', 10, 100)
// const m3 = new Student('mohamed', 10, 100)
// console.log(m)
// console.log(m.getPrivateFiled())
// console.log(Student.numbers)
// Student.staticMethod()


// /// inheritance 
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age 
//     }
    
//     getName(){
//         return this.name
//     }
// } 

// class Student extends Person{
//     constructor(name, age, grade){
//         super(name, age)        
//         this.grade = grade
//     }
//     getNameFromSuper(){
//         // return this.getName()
//         return this.name
//     }
//     // override 
//     getName(){
//         return this.name + " from sub"
//     }
// }

// const p = new Person('ahmed', 22, 222)
// const s = new Student('mohamed', 20, 100)

// console.log(s)
// console.log(s.getName()) 
// console.log(s.getNameFromSuper()) 

// console.log(s instanceof Student) // true
// console.log(s instanceof Person) // true
// console.log(p instanceof Person) // true
// console.log(p instanceof Student) // false
