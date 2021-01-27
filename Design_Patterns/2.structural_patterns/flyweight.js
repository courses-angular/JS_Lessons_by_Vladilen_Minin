// Works well for caching

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model);
        if (candidate) {
            return candidate
        }
        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar;


    }

    getCar(model) {
        return this.cars.find((car) => car.model === model)
    }
}

const factory = new CarFactory();
const bmw = factory.create('bmw', 10000);
const audi = factory.create('audi', 15000);
const bmw2 = factory.create('bmw', 20000);
console.log('BMW:',bmw);
console.log('AUDI:',audi);
console.log('BMW:',bmw2);
console.log(bmw === bmw2)
