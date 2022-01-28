// const numbers = [1, 2, 3]
// const numbers = new Array(5) // capacity 
// const numbers = new Array(5, 2 , 5) // with values 
// const numbers =  Array.of(5, 2 , 5)  
// const numbers =  Array.from('hello')  

// // convert array like to array  using array.From()
// const listItems = document.querySelectorAll('li')
// console.log(listItems)

// const numbers =  Array.from(listItems)
// console.log(numbers)


// const arr = ['mohamed', 'ali', 'hossame']
// // arr.splice(0, 3) // delete 3 item start from 0 index
// // arr.splice(0) // delete all the array 
// // insert into 
// arr.splice(1, 0, 'add', 'fish') // inser at index 1
// console.log(arr)

// /// slicing 
// const testResults = [1, 5.3, 2.5, 10.99 ]
// const stored = testResults.slice() /// return new array object
// console.log(testResults)
// console.log(stored)
// // slicing part of the array 
// console.log(testResults.slice(0, 3)) 
// // slcing string 
// const s = 'mohamed diaa'
// console.log(s.slice(0, 3))


// // slicing 
// const testResults = [1, 5.3, 2.5, 10.99 ]
// const stored = testResults.slice() /// return new array object
// console.log(testResults)
// console.log(stored)
// // slicing part of the array 
// console.log(testResults.slice(0, 3)) 
// // slcing string 
// const s = 'mohamed diaa'
// console.log(s.slice(0, 3))


// /// concat
// const testResults = [1, 5.3, 2.5, 10.99 ]
// const testResultsTwo = [1, 3, 5, 7]
// console.log(testResults.concat(testResultsTwo))


// find index for array of object
// const r = [{name:'mohamed'}, {name:'ali'}]
// const ali = r.find((person, index, persons) =>{
//     return person.name === 'ali'
// })

// const aliIndex = r.findIndex((person, index, persons) =>{
//     return person.name === 'ali'
// })
// console.log(ali)
// console.log(aliIndex)

/// for each 
// const numbers = [10, 20, 30]
// const copyNumbers = []

// numbers.forEach( (number) =>{
//     copyNumbers.push(number)
// })
// console.log(copyNumbers)

// ///// maps
// const numbers = [10, 20, 30]
// const maped = numbers.map((number, index)=>{
//     return {number : number-1 , index:index};
// })
// console.log(numbers)
// console.log(maped)




// /// sorting 
// const numbers = [60, 20, 10.5, 2, 9]
// console.log(numbers.sort()) // it converts to string and then sort it 
// console.log(numbers.sort( (a, b)=>{ // implement compare methods
//     if (a > b){
//         return  1
//     }   
//     else if(a < b){
//         return -1
//     }
//     else{
//         return 0
//     }
// })) 


// ///// filter
// const numbers = [60, 20, 10.5, 2, 9]
// console.log(numbers.filter((number, index, numbers)=>{
//     return number > 10 ;
// }))
// // or 
// console.log( numbers.filter( (number)=> number > 10 ))


// // reduce 
// const numbers = [60, 20, 10.5, 2, 9]
// let sum = numbers.reduce((preValue, currentValue, curIndex, numbers)=>{
//     return preValue + currentValue
// }, 0) // start with value 0
// // or 
// sum  = numbers.reduce((preValue, curValue) => preValue + curValue , 0)
// console.log(sum)

// /// join 
// const student = ['mohamed', 'ali']
// console.log(student.join(', '))


// /// ...
// const students = ['mohamed', 'ali']
// const copyStudent = [...student] // returns new copy
// student.push('hossam')
// console.log(student)
// console.log(copyStudent)

// // we could hard copy if we have array of objects 
// const students = [{name:'mohamed', age:20}, {name:'hossame', age:20}]
// const copiedStudents = [...students.map( student => {
//     return {name:student.name , age:student.age}
// })]
// copiedStudents[0].name = 'zakria'
// console.log(students)
// console.log(copiedStudents)


// //destructing 
// const nameData = ['mohamed', 'ali', 'other', 'other']
// const [first, second, ...other] = nameData
// console.log(first)
// console.log(second)
// console.log(other)


// // sets 
// const ids = new Set() ;
// ids.add(1)  // add
// ids.add(2) 
// ids.add(3) 
// ids.add(1) 
// ids.delete(3) // delete 
// console.log(ids)
// console.log(ids.has(1))

// for (const entry of  ids.entries()){
//     console.log(entry)
// }

// /// maps
// const studentGrades = new Map([['mohamed',  10], ['ali', 10]])
// studentGrades.set('hossam', 50)
// console.log(studentGrades.get('mohamed'))
// console.log(studentGrades)

// for (const entry  of studentGrades.entries() ){
//     console.log(entry)
// }
// for (const [key, value]  of studentGrades.entries() ){
//     console.log(key, value)
// }

// for (const key  of studentGrades.keys()){
//     console.log(key)
// }
// for (const key  of studentGrades.values()){
//     console.log(key)
// }


// weakSet and weekMap -> accepts objects only 