/* 
# Callbacks 

  1. Just like an object, a function can be passesd as an argument to a function

  2. Functions can also be returned as vaules from other functions 

  3. Any function that is passed as an argument to another function a callback
     function
  
  4. Any function that accepts a function as a argument or returns a function
     called a higher order function

*/

// callback function as it is passed into the higher order function
function greeting(name: string) {
  console.log(`hello ${name}`);
}

// higher order function as it accepts a function as an argument
function greetJoe(newGreet: (name: string) => void) {
  const name = 'Sam'
  newGreet(name);
}

/*
 passing in a function as an argument of another function. Actual function call
 is made from within the function 
*/
 greetJoe(greeting);


/*
Types of Callback function

  1. Synchronous callbacks - A callback which is executed immediately. The
     example above is a standard synchronous callback function

  2. Asynchronous callbacks - A callback that is often used to continue or
     resume code execution after an asynchronous operation has completed. 
     
    a. Callbacks are used to delay the executio nof a function until a particular
    time or event has occured. 

    b. Data fetching is classic example of waiting until the data has been fetched
    before we can continue calling the function
*/

// Asynchronous callbacks

function greet(name:string) {
  console.log(`i am ${name}`)
} 
// asynchronous callback because it waits for two seconds before executing next function 
setTimeout(greet, 2000, 'Sam');

// Event based callbacks 

function changeText() {
  // document.getElementById("demo")?.innerHTML = "hello world"
}
// Asynchrononous callback that wait until user clicks button before running function
document.getElementById("btn")?.addEventListener("click", changeText);

/*
  Callbacks only work well when they are simple because they can become nested
  at serveral levels. This is where promises can come in handy
*/
/*
fetchAPiOne('/somepath', (results) => {
  fetchApiTwo('/somepath2, (results)=> {
    fetchApiThree('/somepath3', (results) => {

    })
  })
})
*/