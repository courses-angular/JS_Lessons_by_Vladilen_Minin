let obj = {name: 'Weakmap'};
const array = [obj]
// obj = null;

console.log('Array', array);
console.log('Object', obj);

// WeakMap (removing objects if has no link (such as null)) - keys only objects =======================
const map = new WeakMap([
    [obj, 'obj data']
]);
obj = null
// Get Set Delete Has
console.log('Map has key (obj):', map.has(obj));
console.log('Map get (obj) value:', map.get(obj));
console.log('WeakMap:', map);
// ===================================================

// Example

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let user1 = {name: 'Igor'}
let user2 = {name: 'Alex'}

cacheUser(user1)
cacheUser(user2)

user1 = null;

console.log('Cache has user1:', cache.has(user1))
console.log('Cache has user2:', cache.has(user2))
