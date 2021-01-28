const person = {
    name: 'Alex',
    age: 22,
    job: 'Software Developer'
}

const person2 = [
    ['name', 'Igor'],
    ['age', 30],
    ['job', 'Web Developer']
]

console.log(Object.entries(person))
console.log(Object.fromEntries(person2))
// Map ==============================================
const map = new Map(person2)
console.log('Map', map);
console.log(map.get('name'));
console.log(map.get('job'));

map.set('username', 'ig')
    .set(person, 'Value of object')
    .set(NaN, 'NaN ??')
    .delete('job')
console.log('Map updated', map);
console.log(map.has('job')) // Check if key 'job' exists
console.log(map.size) // Length
// map.clear() // Length
console.log(map.size) // Length

// Show map entries
for (let entry of map.entries()) {
    console.group('Map entry')
    console.log('Map entry', entry);
    console.groupEnd()
}
// Show map keys and values
for (let [key, value] of map) {
    console.group('Map key and value')
    console.log('Map key:', key);
    console.log('Map value:', value);
    console.groupEnd()
}
// Show map values
for (let value of map.values()) {
    console.group('Map value')
    console.log('Map value:', value);
    console.groupEnd()
}
// Show map keys
for (let key of map.keys()) {
    console.group('Map key')
    console.log('Map key:', key);
    console.groupEnd()
}
// ForEach in map
map.forEach((value, key, map) => {
    console.group('Map value and key in foreach')
    console.log('Value:', value)
    console.log('Key:', key)
    console.groupEnd()
});
//Create entries_1(entries) from Map
const entries_1 = [...map]
const entries_2 = Array.from(map)
console.log('Entries-1 from map', entries_1)
console.log('Entries-2 from map', entries_2)

// Create object from Map
const objectFromMap = Object.fromEntries(map.entries())
console.log('Object from map', objectFromMap)
// ==============================================


// Example
const users = [
    {name: 'Alex'},
    {name: 'Igor'},
    {name: 'Elena'},
    {name: 'Yevgeny'}
]

const visits = new Map();
visits.set(users[0], new Date())
    .set(users[0], new Date(new Date().getTime() + 1000 * 60))
    .set(users[1], new Date(new Date().getTime() + 5000 * 60))

console.log(visits)

function lastVisit(user) {
    return  visits.get(user)
}

console.log(lastVisit(users[0]))
