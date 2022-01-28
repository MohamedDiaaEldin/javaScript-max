
// console.log(document)
// const firstHeader = document.querySelector('h1')
// console.log(firstHeader)
// console.log(firstHeader.textContent)



// const firstItem = document.getElementById('first')

// console.dir(firstItem)
// firstItem.id = 'firstId'

// console.log(firstItem)


// console.log(document.getElementById('firstId').textContent)

/////// css selctors
// let unorderListNodes = document.querySelector('.list').childNodes // with weight space
// unorderListNodes = document.querySelector('.list').children

// let i=0
// for(const child of unorderListNodes ){
//     console.log(child.textContent, i)
//     i++
// }
/// selecting
// let listItems = document.querySelectorAll('li') // not reference objects
// console.log(listItems)
// listItems = document.getElementsByTagName('li') // reference objects
// console.log(listItems)
// /////
// console.log(document.querySelector('.list'))
// console.log(document.querySelector('ul'))

// reaversing the DOM
/**
 * child :  is direct child 
 * descendant : direct or indirect 
 * parent : direct parent of elements  
 * ancestor  : direct or  indirect parent of elements  
*/


// // traverse dom tree
// const ul = document.querySelector('.test-dom')
// console.log(ul.firstElementChild.textContent)
// console.log(ul.lastElementChild.textContent)
// console.log('')
// for (const child of ul.children){
//     console.log(child.textContent)
// }

// parent node 
// const firstItem = document.querySelector('.list-item')
// console.log(firstItem.parentNode)
// console.log(firstItem.parentElement)

// //  
// const ul = document.querySelector('.test-dom')
// console.log(ul.previousElementSibling.textContent)
// console.log(ul.nextElementSibling.textContent)

// // change all html elements 
// const h3  = document.querySelector('h2')
// h3.innerHTML = '<h1>header one</h1>'

// // add html element
// const ul = document.querySelector('.test-dom')
// ul.insertAdjacentHTML('beforeend','<li>last added<li>') 

// // second way to add new html elements 
// const ul = document.querySelector('.test-dom')
// const  newItem = document.createElement('li')
// newItem.textContent = 'last added from using createELement()'

// const ul = document.querySelector('.test-dom')
// ul.insertAdjacentElement('beforeend', newItem)
// or 
// ul.appendChild(newItem)

// const ul = document.querySelector('.test-dom')
// console.log(ul.cloneNode(false).children) // false no nested element 
// console.log(ul.cloneNode(true).children) // true with nested element 

// /// toggle 
// const h4 = document.getElementById('test-toggle')    
// const toggleButton = document.getElementById('toggleBtn')

// toggleButton.addEventListener('click', ()=>{    
//     h4.classList.toggle('red-color')
// })