class Employee {
    constructor(name,salary) {
        this.name = name;
        this.salary = salary;
    }
    responsibilities(){

    }
    work(){
        return `${this.name} work on ${this.responsibilities()} `
    }
    getPaid(){
        return `${this.name} has ${this.salary} salary`
    }
}
class Developer extends Employee{
    constructor(name,salary) {
        super(name,salary);
    }
    responsibilities() {
        return `Developing an app`
    }
}
class Tester extends Employee{
    constructor(name,salary) {
        super(name,salary);
    }
    responsibilities() {
        return `Testing an app`
    }
}
const dev = new Developer('YL',18000)
console.log(dev.getPaid());
console.log(dev.work());
const tester = new Tester('VK',10000)
console.log(tester.getPaid());
console.log(tester.work());
