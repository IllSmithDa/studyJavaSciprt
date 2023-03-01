/*
# Function currying 

  1. Currying is used in funcitonal programming in which we transform a function
     with multiple arguments into a squence of nesting functions that take one
     argument at a time 

  2. Currying doesn't call functions, it merely transforms it.

    e.g 
    function(a, b, c) becomes function(a)(b)(c);
*/

function sum(a:number, b:number, c:number):number {
  return a + b + c;
}
// regular call
console.log(sum(1, 2, 3));

/*
  Currying requires nesting dividing each need argument in its own nested
  function and then returning in the inner function which will have the scope to
  have access to all outer scope arugments and thanks to closure, its values
  will be saved between the separate function calls
*/

// typing a functio by including its arguments and its return type
function curry(fn:(a: number, b: number, c: number) => number) {
  return function(a:number) {
    return function(b:number) {
      return function(c:number) {
        return fn(a, b, c);
      }
    }
  }
}
// transforms the function into a curried function 
const curriedSum = curry(sum);

/* 
  you can call it once at a time which demonstrates the main advantage of
  transforming a regular function into a curry function which is that you don't
  need to have all your values at once but can call multiple times until you 
  have all the values you needed to call the actual function.
*/
const calledOnce = curriedSum(4);
// call the previous function until you reached the last argument
const CalledTwice = calledOnce(5);
// will print out 13 as predicted
console.log(CalledTwice(4));


// you can call it all at once but you might as well call the function as normal
console.log(curriedSum(3)(4)(5));

// Advantages of Currying 

/*
# Advantages of Currying 

  1. Currying is a checking method to make sure that you get everything you need
     before you proceed
  
  2. It helps you to avoid passing the same variable again and again
*/