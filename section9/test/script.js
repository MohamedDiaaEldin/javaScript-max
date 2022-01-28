// const grade = 'grade'
// const person = {
//     'first name': 'mohamed' ,
//     age:24,
//     [grade] : 100, // to add the value of a varaible as a key 
//     greet : () =>{
//         console.log('hiiii')
//     }
// }
// //  person.grade = 10 // add more property
// // delete person.age // delete property

// //  other way to access two word keys
// console.log(person['first name'])
// console.log(person['age'])
// console.log(person)


// // object descructing 
// const person = {
//     name:'mohamed', 
//     age:24, 
//     other:'other',
//     otherPrororty:'other two'
// }
// // name:newName
// const {name:studentName, age, ...other} = person
// console.log(studentName)
// console.log(age)
// console.log(other)

// // checks if a property is there
// const person = {
//     name:'mohamed', 
//     age:24, 
//     other:'other',
//     otherPrororty:'other two'
// }
// const isNameHere = 'name' in person
// const isAddressHere = 'address' in person
// console.log(isNameHere)
// console.log(isAddressHere)

// other way to define a function inside an object
// const person = {
//     name:'mohamed',
//     age:20,
//     getName() {        
//         return this.name
//     }
// }


/////// this and bind 
////
// arrow function always ferer this the window
///
// const student = {
//     name:'mohamed',
//     age:20,
//     getName(){
//         console.log('this: ', this)
//         return this.name
//     }
// }
// // let getName = student.getName
// // or 
// let {getName} = student
// console.log('name: ', getName())  // will not work 
// // first solution
// console.log('name: ', getName.call(student)) // or apply
// // second solution
// getName = getName.bind(student)
// console.log('name: ', getName())





// const ob = {
//     name:'mohamed',
//     age:20 ,
//     getData(){
//         console.log('this: ', this)
//         return this.name + " , " + this.age
//     }
// }
// // console.log(ob.getData())
// // or 
// let data = ob.getData
// console.log('data: ', data.bind(ob)())



// ////// setter and getter 
// const person = {
//     set name(value){

//         if(value.trim() === '' ){
//             this._name = 'ssssssssss'
//             return 
//         }
//         this._name = value
//     } ,
//     get name(){
//         return this._name.toUpperCase()
//     }
// }
// person.name = ''
// console.log(person.name)
// person.name ='mohamed'
// console.log(person.name)