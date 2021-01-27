function networkFetch(url) {
    return `${url} - Server response`
}

//Cache
const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, argArray) {
        console.log(argArray);
        const url = argArray[0]
        if (cache.has(url)) {
            return `${url} - Response from cache`;
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, argArray)
        }
    }
});
console.log(proxiedFetch('http://127.0.0.0'));
console.log(proxiedFetch('http://127.0.0.1'));
console.log(proxiedFetch('http://127.0.0.0'));
