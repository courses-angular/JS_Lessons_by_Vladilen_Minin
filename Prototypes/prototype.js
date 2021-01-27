const Animal = function (options) {
   this.name = options.name;
   this.color = options.color;
}
//Add Function to prototype
Animal.prototype.voice = function (){
    console.log('Base voice from',this.name)
}
// console.log(Animal.prototype);
const dog = new Animal({name: 'Rex',color: '#fff'})
// console.log(dog);

// Inheritance from the Animal class
const Cat = function (options){
    Animal.apply(this,arguments);
    this.hasTail = options.hasTail
}
// Inherit all the prototype functions from the base class and add the constructor from the Cat class
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat;


// Call the Voice function  from Animal.prototype
Cat.prototype.voice = function () {
    Animal.prototype.voice.apply(this,arguments)
    console.log(`This voice from ${this.name}`)
}

const cat = new Cat({name:'Mia',color: 'brown',hasTail: true})

console.log(cat);

