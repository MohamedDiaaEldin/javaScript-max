// const eventBtn = document.getElementById('eventObjectBtn')
// eventBtn.addEventListener('click', event =>{
//     console.log(event)
// })


// /// mouseenter event listener
// /// houver
// const hoverBtn = document.getElementById('hoverBtn')
// hoverBtn.addEventListener('mouseenter', ()=>{
//     console.log('hover');
// })


// /// listen to form events 
// /// prevent Default form behavior
// const firstForm = document.getElementById('firstForm')
// firstForm.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     console.log('clicked')    
// })


// /// propagation
// const proDiv = document.getElementById('propagationDiv')
// const proBtn = document.getElementById('propagationBtn')
// proBtn.addEventListener('click', ()=>{
//     event.stopPropagation() // stop any other listner with the button on the same area
//     console.log('button clicked')
// })

// proDiv.addEventListener('click', (event)=>{    
//     console.log('div  clicked')
// }   )


// ////////////////// delegation 
// // first way  add event lister to more than element 
// // const listItems = document.querySelectorAll('.delList li')
// // console.log(listItems)
// // listItems.forEach((listItem) =>{
// //     listItem.addEventListener('click', (event) =>{
// //         console.log('clicked')
// //         event.target.classList.toggle('highlight')
// //     })
// // })
// /// second way using delgation  ( better solution )
// const list = document.querySelector('.delList')
// list.addEventListener('click', (event)=>{
//     event.target.classList.toggle('highlight')
// })

// //// drag and drop
// /*
// - mark element as draggable
// - listen to dragstart
// - mark the area wich can the user drag to
// */ 
// const items = document.querySelectorAll('.dragList li')
// let selectedItem ;

// items.forEach(item =>{    
//     item.addEventListener('dragstart', (event) =>{    
//         event.dataTransfer.setData('text', event.target.id)
//         event.dataTransfer.effectAllowed = 'move'
//     })
// })


// const destDragList = document.querySelector('.destDragList')
// destDragList.addEventListener('dragenter', event =>{    
//     event.preventDefault()
//     console.log('entered')
// })

// destDragList.addEventListener('dragover', event =>{
//     event.preventDefault()    
//     console.log('over')
// })

// destDragList.addEventListener('dragleave', event=>{
//     event.preventDefault()
//     /// add some style here
//     console.log('leave')
// })
// destDragList.addEventListener('drop', event=>{
//     /// add some style here
//     event.preventDefault()
//     const item = document.getElementById(event.dataTransfer.getData('text'))
//     destDragList.appendChild(item)
//     console.log('drop')
// })