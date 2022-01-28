// ////Axios
// //https://jsonplaceholder.typicode.com/posts/1
//  async function axiosGet(){
//     const response  = await axios.get('https://jsonplaceholder.typicode.com/posts/1')          
//       console.log(response);    
//       console.log(response.status);    
//       console.log(response.data);            
//  }
//  axiosGet()

//  /// or 
//  axios.get('https://jsonplaceholder.typicode.com/posts/1').then( response =>{
//     console.log(response)
//     console.log(response.status)
//     console.log(response.data)
//  }) 

// //// POST 
// data = {
//     title: 'title foo',
//     body: 'body content' , 
//     userId: 'user id 123'
// }
// axios.post('https://jsonplaceholder.typicode.com/posts', data).then( response =>{
//     console.log(response.message)
//     console.log(response)
// })

// ////// error handling 
// axios.get('https://jsonplaceholder.typicode.com/postss/1')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error.message);
//         console.log(error.response);
//     })