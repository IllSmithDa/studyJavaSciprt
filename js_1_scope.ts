/* 
# Scope 

  1, block scope

    a. variables defined in curly braces and cannot be accessed outside the braces 

  2. Function scope 

    a. variables declared in a function cannot be accessed outside the function

  3. Global scope 

    a. varaibles declared outside of blocks, functiosn or classes and can be accessed globally

*/

/* 
# nested scope 

  1. Javascript's inner function checks its scope and then the next outer scope
     until the variable is found until it reaches global, and if it doesn't find
     it in global, it will give an error

  2. This is how Javascript behaves when there are functions and variables
     nested in other functions
*/

let a = 10;
function outer() {
  let b = 40;
  function inner() {
    // starts here and moves outwards until it reaches outer scope
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

/*
  3. Nested functiosn will have access to outer functiosn but outer functions
     will not have access to variables in the nested acope
*/

let a2 = 10;
function outer2() {
  let b = 40;
  /*
     var c wil cause an error because this function can only check outwards from its
     scope not towards inner functiosn 
  */
  // console.log(a, b, c);
  function inner2() {
    // starts here and moves outwards until it reaches outer scope
    let c = 30;
  }
  inner2();
}
outer2();

export {};