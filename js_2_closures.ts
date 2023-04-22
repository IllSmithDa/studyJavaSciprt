/*
# Closures 

  1. A combination of functiosn bundled togather with references to its
     surrounding state.

  2. They are created every time a function is created and function creation
     time
*/

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
/*
  will always print one because the memory will always produce new instance of
  the function rather than calling retrieving the first instance and its state 
*/
outer();
outer();

/* 
  In Javascript, you can assign and return a funtion from a inside a function.
*/

function outer2() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

/*
  The benefit of returning the inner function is that we can now call the
  function multiple times

  When we return a function from another function, we are returning a
  combination of the function definition along with the function's scope.
  This lets the function have an persistent place in memory which could hold
  onto live data between executions. 

  The combination of the function and its scope chain is called closure in
  JavaScript
  
*/
const newFuntion = outer2();
newFuntion();
newFuntion();

function nameFactory(name: string) {
  const statement = 'hello';
  /* 
    inner function is returned but its' scope which in this case includes the var
   'statement' is also returned and is saved in memory so addtional calls will
   remember the previously set values
  */
  return function greeting() {
    let longerGreeing = `${statement} ${name}`
    console.log(longerGreeing)
  }
}

const testFunction = nameFactory('Sam');
testFunction();
testFunction();

export {};