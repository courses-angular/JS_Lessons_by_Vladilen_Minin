class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color;
    }

    voice() {
        console.log('Voice from', this.name)
    }
}

const dog = new Animal({name: 'Rex', color: '#fff'})


class Cat extends Animal {
    constructor(options) {
        super(options)
        this.hasTail = options.hasTail

    }

    voice() {
        super.voice();
        console.log('Hello from', this.name)
    }

}

const cat = new Cat({name: 'Mia', color: '#000', hasTail: true})


//examples

Object.prototype.print = function () {
    console.log('This is cat', this.name)
}
Array.prototype.mapAndLog = function () {
    console.log('Previous array', this)
    return this.map.apply(this, arguments)
}
console.log([1, 2, 3, 4].mapAndLog(item => item * 2))


String.prototype.toTag = function (tagName){
    return `<${tagName}>${this}</${tagName}>`
}
console.log('app'.toTag('yl-comp'))


Number.prototype.toBigInt = function (){
    return BigInt(this)

}
const number = 40;
console.log(number.toBigInt())
