// Async operations with setTimeout
console.log('Start working...');
//
// setTimeout(()=>{
//     console.log('Preparing data...')
//     const serverData = {
//         server: 'google',
//         port: 3000,
//         status: 'working'
//     };
//     setTimeout(()=>{
//         serverData.modified = true;
//         console.log('Server data received',serverData)
//     },1000)
// },1000)
// ----------------------------------------------------------------
// Async operations with Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const serverData = {
            server: 'google',
            port: 3000,
            status: 'working'
        };
        resolve(serverData)
    }, 1000)
});

myPromise.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data) // send data if all is OK
            // reject(data) // send error
        }, 2000)
    })
}).then(data => {
    data.modified = true;
    data.status = 'Processing...';
    console.log('Server data received', data);

    return data;
})
    .then(clientData => {
        setTimeout(() => {
            console.log('Processing...', clientData)

        }, 3000)
    })
    .catch(err => console.log('Promise error', err))
    .finally(()=>{
        console.log('Finally')
    })


const sleep = ms => new Promise(resolve => setTimeout(()=>{
    resolve()
},ms))

// sleep(2000).then(()=> console.log('Sleep after 1s'))
// sleep(3000).then(()=> console.log('Sleep after 3s'))

// Promise.all -  waits till all the promises will be finish
Promise.all([sleep(2000),sleep(5000)]).then(()=>{
    console.log('All promises ')
});
// Promise.race -  waits till the first promise will be finish
Promise.race([sleep(2000),sleep(5000)]).then(()=>{
    console.log('Race promises ')
});


