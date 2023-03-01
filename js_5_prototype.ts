/*
  # Prototypes
*/

function Person(this: {firstName: string, lastName: string}, fName: string, lName: string) {
  this.firstName = fName;
  this.lastName = lName;
}

const personA = new (Person as any)('Bruce', 'Wayne');
const personB = new (Person as any)('Clark', 'Kent');

/* 
  You can attach new properties onto an existing object
*/

/* 
  note that this fullName proerpty is specifically tied to personA as personB has its own
  instance 
*/
personA.fullName = function() {
  return this.firstName + '' + this.lasName;
}

/* 
  You can use prototypes to share properties to determine sharable properties.
  Prototype is a property that exists on all objects that determine sharable
  properties. Use the prototype keyword to set properties as shareable among all
  instances 
*/

Person.prototype.newFullName = function () {
  console.log(this.firstName + ' ' + this.lastName)
  return this.firstName + ' ' + this.lasName;
}
personB.newFullName();

/* 
# Proptype Inheritance
*/

function SuperHero(fName: string, lName: string) {
  // this = {}
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function() {
  console.log('fighting crime');
}

/* 
  creates a object from Person.prototype and set its to superhero allowing
  SuperHero to inherit properties of Person
 */
SuperHero.prototype = Object.create(Person.prototype)

const newHero = new (SuperHero as any)('Alex', 'Walker');
newHero.newFullName();
// Js will whink a Super is created from person so this fixes that
SuperHero.prototype.constuctor = SuperHero