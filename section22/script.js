const user_id = "132"

//////////////////////////////////////////   local storage
/// add to local storage
// localStorage.setItem('userId', user_id)
// console.log(localStorage.getItem('userId'))

// /// add json of object to localstorage
// /// because local storage only accepts strings 
// const customer = {name:'mohamed', age:20}
// localStorage.setItem(user_id, JSON.stringify(customer))

// /// extract json object and parse it to javaScript Object
// const customerData = localStorage.getItem(user_id)
// console.log(JSON.parse(customerData))

// /// clear all data
// // localStorage.clear()


////////////////////////////////////////// //// session storage
// const sessionBtn =  document.getElementById('sessionBtn')
// sessionBtn.addEventListener('click', ()=>{
//     sessionStorage.setItem('userId', user_id)
//     sessionStorage.setItem('userId2', user_id)
//     sessionStorage.setItem('userId3', user_id)
// })


////////////////////////////////////////// ///// cookies 
// const cookieBtn = document.getElementById('cookieBtn')
// let counter = 0
// cookieBtn.addEventListener('click', ()=>{
//     document.cookie = `userId${++counter}=${user_id}`
//     console.log(document.cookie)
// })  

// //// cookies with expire date
// const cookieExpireBtn= document.getElementById('cookieExpireBtn')
// cookieExpireBtn.addEventListener('click', ()=>{
//     document.cookie = `userId${++counter}=${user_id}; max-age=20`
//     console.log(document.cookie)
// })



// /// extract cookies 
// const extractCookies = document.getElementById('extractCookies')
// extractCookies.addEventListener('click', ()=>{
//     const cookies = document.cookie.split('; ')
//     for (cookie of cookies){
//         const keyValue = cookie.split('=')        
//         console.log('key: ', keyValue[0], ' value: ', keyValue[1])         
//     }
// })



/// indexed db 
// name with version 
const dbRequest =  indexedDB.open('storage_name', 1) 
let db ; 
dbRequest.onsuccess = event =>{
    console.log('success' , event)
    db = event.target.result
    // const objStore = db.createObjectStore('products', { keyPath: 'id' });
    // objStore.transaction.oncomplete = function(event) {
    //   const productsStore = db
    //     .transaction('products', 'readwrite')
    //     .objectStore('products');
    //   productsStore.add({
    //     id: 'p1',
    //     title: 'A First Product',
    //     price: 12.99,
    //     tags: ['Expensive', 'Luxury']
    //   });
    // };
}
dbRequest.onupgradeneeded = event =>{    
    db = event.target.result;
    const objStore = db.createObjectStore('products', { keyPath: 'id' });
    objStore.transaction.oncomplete = function(event) {
      const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products');
      productsStore.add({
        id: 'p1',
        title: 'A First Product',
        price: 12.99,
        tags: ['Expensive', 'Luxury']
      });
    };
}
dbRequest.onerror = event =>{
    console.log('error' , event)
}
/// add to database
const addToDbBtn = document.getElementById('add-to-db-btn')
const read = document.getElementById('read-btn')
let counter = 0 
addToDbBtn.addEventListener('click', ()=>{
    const productsStore = db
        .transaction('products', 'readwrite')
        .objectStore('products');
      productsStore.add({
        id: ++counter,
        title: 'A First Product',
        price: 12.99,
        tags: ['Expensive', 'Luxury']
      });
})
/// read from database
read.addEventListener('click', ()=>{
    const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productsStore.get(2);
  request.onsuccess = function() {            
    console.log(request.result);
  }
  
  const request2 = productsStore.get('p1');
  request2.onsuccess= ()=>{
      console.log(request2.result)
  }
})