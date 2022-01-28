// const h1 = document.querySelector('h1')
// const headerDataSet = h1.dataset
// console.log(headerDataSet.moreInfo)

// // add new data set 
// headerDataSet.extraInfo = 'this is extra information'
// console.log(headerDataSet.extraInfo)

// console.log(h1.getBoundingClientRect()) // get information about element dimensions

// // read only 
// // if you want to assign value go to css
// console.log(h1.offsetLeft) 
// console.log(h1.offsetTop) 
// console.log(h1.clientHeight) 
// console.log(h1.scrollHeight) // if there


// ///  read hidden templet and add to div 
// const showTemplateBtn = document.getElementById('show-template-btn')
// showTemplateBtn.addEventListener('click', ()=>{
//     const templet = document.getElementById('template')
//     const div = document.getElementById('test-div')
//     const templetContent = document.importNode(templet.content, true)
//     div.appendChild(templetContent)
// })


// //// timer 
// const timerBtn = document.getElementById('timerBtn')
// timerBtn.addEventListener('click', ()=>{
//     setTimeout(()=>{
//         alert('after 3 sec')
//     }, 3000)
// })

// //// interval - every period of time
// const intervalId = setInterval(()=>{
//     console.log('sending...')
// }, 3000)

// /// stop interval 
// const stopBtn = document.getElementById('stopBtn')
// stopBtn.addEventListener('click', ()=>{
//     clearInterval(intervalId)      
// })

// //// url  location
// const locationBtn = document.getElementById('locationBtn') 
// locationBtn.addEventListener('click', () =>{    
//     console.log(location.host)
//     console.log(location.origin)
//     console.log(location.pathname)
//     // location.href = 'https://google.com'
    
// })



// /// navigator 
// /// to access many of browsers 
// /// navigator.geolocation test 
// const geolocationBtn = document.getElementById('geolocationBtn')
// geolocationBtn.addEventListener('click', ()=>{
//     navigator.geolocation.getCurrentPosition((data) =>{
//         console.log('lat ' + data.coords.latitude, ' long ', data.coords.longitude)
//     })
// })


/// date 
