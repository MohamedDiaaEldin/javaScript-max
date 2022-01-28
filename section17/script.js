// /// event loop and callbacks 
// const locationBtn = document.getElementById('locationBtn')

// locationBtn.addEventListener('click', ()=>{
//     const whenFinishedCallBack = (data)=>{
//         console.log(data)
//     }
//     const errorCallback = (data)=>{
//         console.log('error: ', data)
//     }
//     navigator.geolocation.getCurrentPosition(whenFinishedCallBack, errorCallback )

//     console.log('Getting position') //// execute first when button clicked
// })

// ///// promises
// //// handel error by 
// /**
//  * myPromise
//   .then(handleResolvedA, handleRejectedA)
//     // or 
//     myPromise
//     .then(handleResolvedA)
//     .catch(handleRejectedAny );
//  */
// const myPromise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('foo');
//     // }, 300);
//     navigator.geolocation.getCurrentPosition( geoData =>{
//         console.log(geoData)            
//         resolve(geoData)
//     })
    
// });

// myPromise
//     .then(data => {
//         ///// task will take async time
//         console.log('first then ', data)
//         return data
//     })
//     .then(data => {
//         ///// task will take async time
//         console.log('second then ', data)
//         return data
//     })
//     .then(data => {
//         ///// task will take async time
//         console.log('third then ', data)  
//     })
//     .catch(error =>{
//         console.log('in catch ', error)
//     })
//     .finally( () =>{
//         console.log('finally')
//     }); 

// ////// alternative way with async await
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     let result ;
//     try{
//         result = await resolveAfter2Seconds();        
//         console.log(result);    
//     }    
//     catch{
//         console.log('error happened')        
//     }       
    
//   }

//   asyncCall();
