/*
# class 

  1. syntactically sugar over proptotypal inheritance and works way better with
     typescript 
*/

class Person {
  // declare variables and type
  firstName: string;
  lastName: string;
  // create constructor function which will take in lName and fName
  constructor(fName:string, lName:string) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayName() {
    const statement = `${this.firstName} ${this.lastName}`;
    console.log(statement);
    return statement;
  }
}

/* 
  You can create instance of person and you see this is the preferred way by
  TypeScript as it recognizes it as a class rather than implied 'any'
  
*/
const personA = new Person('Bruce', 'Wayne');
personA.sayName();


/*
  Prototype inheritance is also possible using the extend method to inherit
  parent classes
*/
class Superhero extends Person {
  isSuperHero: boolean;
  // pass in contructor variables that will be used in Person
  constructor(fName:string, lName:string) {
    // calls the constructor of Parent class which in this case is Person
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime () {
    console.log('fighting crime');
  }
}

/*
  Create new instance and see that you can call methods from both Superhero and
  Person and access variables from both as well. This works very well with
  TypeScript as there is very little pain in terms of managing 'this' and the
  class initiation
*/
const batMan = new Superhero('Bruce', 'Wayne');
batMan.fightCrime();
batMan.sayName();
console.log(batMan.isSuperHero);
console.log(batMan.lastName);
export {};