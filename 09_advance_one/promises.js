// promises in javascript

// const promiseOne = new Promise(function (resolve, reject){
//     //Do an async task
//     //DB calls/ crptography, network, fetch
//     setTimeout(() => {
//         console.log("Async 1 is complete.");
//         resolve()
//     }, 2000);
// })
// promiseOne.then(()=>{
//     console.log('promise 1 is consumed.');
// })


// -----2---------
// new Promise((resolve, reject) => {
//    setTimeout(() => {
//     console.log('Async 2 is complete.');
//     resolve()
//    }, 2000);    
// }).then(()=>{
//     console.log('promise 2 is consumed.');
// })


// ------3 --------------
// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username:"Haider", email: "haider@gmail.com"})
//     }, 2000);
// })
// .then((user)=>{
//     console.log(user);
// })

// -----4-----------
// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         // let error = true;
//         let error = false;
//         if (!error) {
//             resolve({username:"Mickael", email: "mickeal@gmail.com"})
//         }
//         else {
//             reject("you got an error.");
//         }
//     }, 2000);
// })
// //promise chainig
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log('promise is either resolved or rejected');
// })


// -------5-------------
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // let error = true;
//         let error = false;
//         if (!error) {
//             resolve({ username: "Javascript", email: "js@gmail.com" })
//         }
//         else {
//             reject("js is not working!");
//         }
//     }, 2000);
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();



// ----Fetch data---- through async  function
// async function getAllUsers(){
    //     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
    //         console.log("E: ", error);
    //     }
    // }
    // getAllUsers()


    
    // ----Fetch data---- through .then & .catch  syntax

    // fetch('https://api.github.com/users/hiteshchoudhary')
    // .then((response) => {
    //     return response.json()
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => console.log(error))




// promise.all












