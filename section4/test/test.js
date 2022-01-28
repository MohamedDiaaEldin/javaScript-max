// functions and methods 
const person = {
    name:'mohamed' ,
    age: 20 ,

    get_name: function get_name(){ // methods is inside a object
        return this.name;
    } ,
    toString: function toString(){
        return `name: ${this.name} , age:${this.age}`
    }
}
 
function sayHello(){ // function
    console.log('hello')
}

// console.log(person.get_name())
// console.log(person.toString())
// sayHello()

const myButton = document.getElementById('myButton');
// console.log(myButton)

// myButton.addEventListener('click', function(){
//     console.log('clicked' + counter) 
// });



///// arrow function

// myButton.addEventListener('click', ()=>{
//     console.log('clicked')
// })


//
const setName = name=> console.log(name)
setName('ali hossam')

//
const add = (a, b)=> a+b
console.log(add(1, 2))

//
const printButton = (btnName, description)=> {
    const btn = document.getElementById(btnName)
    console.log(btn, description)
}
console.log(printButton('myButton', 'this is a greate button'))




function defualtArgs(name='no name here'){
    console.log('defualtArgs::: ', name)
}
defualtArgs()


// bind
const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };



console.log(module.getX())

let l = module.getX
console.log(l())

l = module.getX.bind(module)
console.log(l())


