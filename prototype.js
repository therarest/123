const Car = function(options) {
    this.name = options.name
    this.color = options.color
}
Car.prototype.horsepower = function() {
    console.log('Base horsepower from', this.name)
}

const Lada = new Car ({name:'priora', color: '#FF0000'})

const Mers = function () {
    Car.apply(this, arguments)
    this.premiumniche = options.premiumniche
    this.contry = german
}

Mers.prototype = Object.create(Car.prototype)
Mers.prototype.constructor = Mers

Car.prototype.horsepower = function(){
    console.log('Horsepower =', this.name)
}

const Mers = new Car ({name: 'gelik', color: '#000', premiumniche: true})
console.log(Mers)
