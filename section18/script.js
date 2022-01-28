// ///////////// http reuest with POST method  
// const xhr = new XMLHttpRequest() ;
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// xhr.responseType = 'json'
// xhr.send()
// xhr.onload = () =>{
//     console.log(xhr.response)
//     const jsobObject  = JSON.parse(xhr.response) /// json data
//     jsobObject.myEdit = 'hii'
//     console.log(jsobObject)
// }


// //////// http reuest with POST method  
// url = 'https://jsonplaceholder.typicode.com/posts'
// const xhr = new XMLHttpRequest()
// xhr.open('POST', url)
// xhr.responseType = 'json'
// data ={
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }
// xhr.send(JSON.stringify(data))
// xhr.onload = ()=>{
//     console.log('json response ', xhr.response)
//     console.log('status code ' , xhr.status)
// }


// // //////// http reuest with DELETE method  
// // url = 'https://jsonplaceholder.typicode.com/posts/1'
// url = 'httpsacs://jsonplaceholder.typicode.com/posts/1'
// const xhr = new XMLHttpRequest()
// xhr.open('DELETE', url)
// xhr.responseType = 'json'
// xhr.send()
// xhr.onload = ()=>{
//     console.log('json response ', xhr.response)
//     console.log('status code ' , xhr.status)
// }

 // error handling or use catch
// xhr.onerror = ()=>{
//     console.log('error')
//     console.log(xhr.response)
//     console.log(xhr.status)
// }

///#####////
/// fetch /// 

// /// fetch GET method
// fetch('https://jsonplaceholder.typicode.com/posts/2')
//   .then((response) => {
//       console.log(response)
//       return response.json()
//   })
//   .then((json) => console.log(json));


/// fetch POST method
// data = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => {
//       console.log(response)
//       console.log(response.status)
//     return response.json()
//   })
//   .then((json) => console.log(json));

// ////// HEADERS - error handling --> check for status code manually
// ////
// fetch('https://jsonplaceholder.typicode.com/postss', {
//   method: 'POST',
//   body: JSON.stringify({name:'name'}),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// }).catch(error => console.log('error ------> ', error))


