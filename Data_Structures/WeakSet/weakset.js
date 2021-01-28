// WeakSet (removing objects if has no link (such as null))
const users = [
    {name: 'Igor'},
    {name: 'Alex'},
    {name: 'Ivan'}
]

const visitors = new WeakSet()
visitors.add(users[0])
    .add(users[1])

users.splice(1, 1)


console.log('Visitors', visitors.has(users[0]))
console.log('Visitors', visitors.has(users[1]))
