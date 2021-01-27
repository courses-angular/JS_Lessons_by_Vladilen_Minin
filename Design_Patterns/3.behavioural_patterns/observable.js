class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    next(payload) {
        this.observers.forEach((observer) => {
            observer.update(payload)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state;
        this.initialState = state;
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break;
            case 'DECREMENT':
                this.state = --this.state
                break;
            case 'ADD':
                this.state += action.payload
                break;
            default :
                this.state = this.initialState
        }
    }
}

const stream$ = new Subject();

const observer1 = new Observer();
const observer2 = new Observer(40);

stream$.subscribe(observer1)
stream$.subscribe(observer2)
stream$.next({type: 'INCREMENT'})
stream$.next({type: 'DECREMENT'})
stream$.next({type: 'ADD',payload: 20})

console.log('Observer 1 state:', observer1.state)
console.log('Observer 2 state', observer2.state)
