/*   ex1 */
  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

  var Vehicle = function (driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function (mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    }
  }
  
  var Truck = new Vehicle('Alex');
  var Car = new Vehicle('Ana');
  Car.cargo = [];
  Car.loadCargo = function (cargo) {
    this.cargo.push(cargo);
    return this;
  }
  
  Car.unloadCargo = function () {
    return this.cargo.pop();
  }
  
  console.log(Car);
  console.log(Truck);


  /* ex2 */
//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

var Person = function () { };

Person.prototype.something = function (name, age) {
  this.name = name;
  this.age = age;
}

let Trainer = function (subject) {
  this.subject = subject;
  this.tech = function () {
    console.log(`${this.name} is now teaching ${this.subject}`)
  }
}

Trainer.prototype = new Person();

let aName = new Trainer('matematica');
aName.something('Alex');
aName.tech();




/* ex 3 */
// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"

function Triangle(a, b, c, type) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle'
}

const shape = {
  getShape: function(){
    return this.type
  }
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
let newTriangle = new Triangle (16, 16, 16);
newTriangle.getPerimeter = function(){
  return this.a + this.b + this.c;
}

console.log(newTriangle.getShape());
console.log(newTriangle.getPerimeter());