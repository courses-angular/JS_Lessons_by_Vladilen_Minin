// Set has a unique values
const set = new Set([1,1,2,2,3,3,4,4,5,5]);
// Add element to Set
set.add(10)
    .add(20)
    .add(20)

console.log('Set',set)
console.log( 'Check if number 20 is exists:',set.has(20))
console.log( 'Check if number 40 is exists:',set.has(40))
console.log(set.delete(20)) // Delete element in Set
// console.log(set.clear()) // Clear Set
console.log( 'Size',set.size)

// Get all the values of Set
console.log(set.values())
// Get all the keys of Set
console.log(set.keys())
// Get entries of Set
console.log(set.entries())
// For of keys in Set
for (let key of set){
    console.log('Key',key)
}
// ================================================================
function uniqueValues(array) {
   // const set = new Set(array);
   // const uniqueArray = Array.from(set)
   //  return uniqueArray

    const set = [...new Set(array)]
    return Array.from(new Set(array)) || set;
}

console.log('Unique array:',uniqueValues([1,1,2,2,3,3,5,5,7,8,9,8,2]));

