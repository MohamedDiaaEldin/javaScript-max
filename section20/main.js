import {ParentClass} from './ParentClass.js'
import {printOther, OtherClass} from './OtherParent.js'
import * as Other from './OtherParent.js'
import {name} from './OtherParent.js' /// import const


class main extends ParentClass{
    test(){
        super.printName()
    }
}

// const m = new main()
// m.test()
// printOther()
// /// 
// const other  = new OtherClass()
// other.printInOther()
// Other.printOther()



//// dynamic import 
// it will be downloaded from sever when we use it
// function testDynamic(){
//     import('./OtherParent.js').then( module =>{
//         module.printOther() ;
//     })
// }
// testDynamic()

// /// print global variable which is shared among javaScript modules
// /// FROM OtherParent file
// console.log(globalThis.VALUE)
// /// alternative way
// console.log(window.SECOND_VALUE)
