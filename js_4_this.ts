/* 
# 'this' keyowrd

  1. JavaScript keyword which is used in a function, refers to the object it
     belongs to it makes functiosn reusable by letting you decide the value of
     the object
*/


function sayMyName(name: string) {
  console.log(`my name is ${name}`);
}

// regualr functio ncall
sayMyName("walter white");
sayMyName("heisenburg");

/* 
  In this context 'this' refers to object 'person' and so 'this.name' becomes 'person.name'
  In objects, 'this' is automatically bind to the object and is called
  implicitly binding
*/

const person = {
  name: 'Sam',
  sayMyName: function () {
    console.log(`my name is ${this.name}`)
  },
  color: 'red'
}

person.sayMyName();

/*
  In functions, the 'this' context is explictly binded using the call method and
  passing desired object as the argument. This is also known as explicity binding
*/
function getColor(this:{
  // simply setting object type for the function
  name: string, sayMyName: () => void, color: string
}) {
  console.log(`my color is ${this.color}`);
}
getColor.call(person)

/*
  In JS, this can also be used when invoking a new instance of a function using
  'new'. his is a constuctor function because you can create multiple instances
  of Person
*/
function Person2(this:{ name: string }, name:string) {
  this.name = name
}

/*
  When Person is invoked using 'new' keyword, JS will create a new object instance
  in memory. 'this' becomes equal to empty object 
*/
// https://stackoverflow.com/questions/43623461/new-expression-whose-target-lacks-a-construct-signature-in-typescript
const p1 = new (Person2 as any)('Joe');
const p2 = new (Person2 as any)('Rogan');

// will return 'Joe'
console.log(p1.name)

/*
# Default Binding. 

  1. By default 'this' will be set to the global scope and 'this' keyword wil
     be set to undefined if variable name is not found

*/

function sayMyName2() {
  // no global scoped var for name so will return undefined and nothing in scope either
  console.log(`my name is ${this.name}`);
}
sayMyName2();

// define var in global scope
const numOfCandy = 4;

function countCandy() {
  // defauilt to 4 because var exists and defined at 4 in the global scope
  console.log(`candy count: ${this.numOfCandy}`);
}

countCandy();

/*
  'this' does have a order of precedence

    1. 'New' binding

    2. Explicit binding

    3. implicit binding

    4. default binding
*/