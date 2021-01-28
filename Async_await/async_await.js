// Simple promise
const delay = ms => {
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, ms))
}
delay(1000).then(() => console.log('Delay function work...'))

// Fetch from server ======================================================
const url = 'https://jsonplaceholder.typicode.com/users'

const fetchTodos = () => {
    console.log('Fetch users from the server...')
    return delay(2000).then(() => fetch(url))
        .then(response => response.json())
}
fetchTodos()
    .then(data => console.log('Users from server', data))
    .catch(err => console.log(err))
// ========================================================================

//Async await
const fetchAsyncUsers = async () => {
    console.log('Fetch users from the server...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json();
        console.log('Users from server with async await', data)
    } catch (e) {
        console.log('Error', e)
    } finally {
        console.log('Finally')
    }
}
fetchAsyncUsers()
