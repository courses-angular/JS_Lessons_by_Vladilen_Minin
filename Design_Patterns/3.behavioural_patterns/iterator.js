class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}

//Generator
function* generator(collection) {
    let index = 0;
    while (index< collection.length){
        yield collection[index++]
    }
}

const iterator = new MyIterator(['Angular', 'React', 'Vue']);
for (const value of iterator) {
    console.log('Value:', value)
}
const gen = generator(['C','C++','C#']);
for (const value of gen) {
    console.log('Value:', value)
}
console.log('Generator',gen.next())
console.log('Generator',gen.next())
console.log('Generator',gen.next())
