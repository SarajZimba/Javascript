//Fetch Apis

//callbacks,Promises, Thenables, and Async/Await

//CAllbacks

function myFunction(parameters, callback){
    //do tasks
    callback();//calls callback chain of events
}

// "callback hell"

// myFunction(para, function(){
//     secondFunction(para, function(){
//         thirdFunctin(para, function(){

//         });
//     });
// });


//promises

//3 states: Pending, Fulfilled, Rejected --> Asynchronous while js --> synchronous

// const myPromise = new Promise((resolve, reject) =>{
//     const error = true;
//     if(!error){
//         resolve("Yes! resolved the promise");
//     }
//     else{
//         reject("!NO rejected the promise");
//     }
// });

// console.log(myPromise);//returning promise

// myPromise.then(value =>{ //using thenables to get the result from a promise
//     console.log(value);
// })
// myPromise.then(value =>{
//     return value + 1 ;
// })

//chainables then
// .then(newValue => {
//     console.log(newValue) ;
// })

//catching the error which is also chainable
// .catch(err =>{
//     console.error(err);
// })
// .then(newValue1 =>{
//     console.log(newValue1)
// })

// const myPromise = new Promise((resolve, reject) =>{
//     const error = false;
//     if(!error){
//         resolve("Yes! resolved the promise");
//     }
//     else{
//         reject("!NO rejected the promise");
//     }
// });

// const secPromise = new Promise((resolve, reject) =>{
//     setTimeout(function(){
//         resolve("My second Promise resolved!");
//     },3000);
// });

// secPromise.then(value =>{
//     console.log(value);
// })

// myPromise.then(value => {
//     console.log(value);
// })

//Pending

// const users = fetch('https://jsonplaceholder.typicode.com/users');

// pending
// console.log(users);

// const users=fetch('https://jsonplaceholder.typicode.com/users')

//     .then(response =>{
//         return response.json();
//     })

//     .then(data =>{
//         console.log(data)
//         // data.forEach(user => {
//         //     console.log(user)
//         // });
//     })

    // .then(response =>{
       
    //     return response.json();//json() also returns  a promise
    // })

    // .then(data =>{
    //     data.forEach(user =>{
    //         console.log(user);
    //     })
    // });

// console.log(users);// Here this line of code does not wait for the thenables cause we are working with the promises


//thenables can also get out of hands due to chaining .And thats where async and await comes into picture.

//Async and Await

// const myUsers = {
//     userList: []
// }

// const myCoolfunction = async() =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const jsonUserData = await response.json();
//     // console.log(jsonUserData);
//     return jsonUserData;

// }



// const mySecFunc = async() =>{
//     const data = await myCoolfunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);

// }

// mySecFunc();
// console.log(myUsers.userList);

// const getAllUserEmails = async() =>{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const jsonUserData = await response.json();
//         const userEmailArray = jsonUserData.map(user => {
//             return user.email;
//         });

//         console.log(userEmailArray);
//         postToWebPage(userEmailArray);
// } 

// getAllUserEmails();

// const postToWebPage = (data) => {
//     console.log(data);
// }


//2nd parameter of fetch is a object

// const getDadJoke = async() =>{
//     const response = await fetch('https://icanhazdadjoke.com/', {
//         method: "GET",
//         headers:{
//             Accept: "application/json"
//             // Accept: "text/plain"
//         }
//     });
//     const TextUserData =  await response.json();
//     console.log(TextUserData);
// }

// getDadJoke();

// const jokeObject = {id: 'qjV8EIRfVnb', 
// joke: 'What did the shy pebble wish for? That she was a little boulder.' }

// const postDadJoke = async(jokeObj) =>{
//     const response = await fetch('https://httpbin.org/post', {
//         method: "POST",
//         headers:{
//             // Accept: "application/json"
//             // Accept: "text/plain" //here we are expectinf the api to send data in the form of text
//             "Content-Type" : "application/json"
//         },
//         body:JSON.stringify(jokeObj)

//     });
//     const jsonResponse =  await response.json();
//     console.log(jsonResponse);
// }

// postDadJoke(jokeObject);

const requestDadJoke = async(firstname, lastname) =>{
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstname}&lastName=${lastname}`,{
        mode: 'no-cors',
    });
        
    const jsonResponse =  await response.json();
    console.log(jsonResponse.value);
}

requestDadJoke("Arnold", "sCHWARZNEGGAR");

//abstract into function

