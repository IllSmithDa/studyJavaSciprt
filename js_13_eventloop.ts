/*
  JS Runtime environment 

    1. Refers to the entire process which includes the JS engine which is made
       up of the memory heap and call stack 
    
    2.   Chromes v8 engine is an example of the JS Engine as well as Web APIs

  Memory Heap

    1. Whevener you declare variables or functions, memory is allocated on the
       heap
  
  Call Stack 

    1. whenever you execute code, functions are push onto the call stack and
       when functio are returned, they are popped off the call stack 

  Callback Queue

    1. The third part of this runtime environment is the callback queue or the
       task queue which is the line of needed to complete tasks

    2. First in first out datas structure

    3. global() is always first to be pushed onto the call stack 

  Event loop

    1. Final part is event loop which checks if call stack is empty and
       assigning a task from the queue to the call stack
*/

/*
# Synchronous callback 
  
  1. Each function is pushed on the call stack one at a time and popped off the
     call stack once its done with task allowing for the next function to be
     pushed onto the stack, which in this case is printing 
*/
console.log('A');
console.log('B');

/* 
# Async Code 

  1. Async code like setTimout() when pushed to the call stack is handed to the
     web browser as it is not a js function but a feature of browser. In the
     meantime, it will move onto any code after it untill 5 sceonds are up
     and/or there is no code left to run

  2. Web api cannot push things to the call stack because there can be other
     things that are running so it gets pushed to the callback queue waiting for
     the current task on the call stack to be popped off or finished. When call
     stack is empty, the callback function nwill be pushed onto the call stack. 

  3. If there are functions or tasks like console.log() in the callback
     function, it will then finally be pushed onto the callstack, run and then
     popped off the stack. Callback will be popped off once the callback
     function runs out of tasks to run. 

  4. This does not change if setTimeout is at 0, because it still has to be
     handled by the browser and popped off the stack where the code after the
     async function will run, and by the time setTimeout is push onto the
     callback queue, the third console.log() or code written after setTimeout
     will already be on the callback queue, forcing setTimeout to wait until
     that task is popped off the stack

*/
// push and popped off the stack printing first
console.log('A');

/*
  pushed to call stack, then to browser, then to callback queue and then onto the
  callback again and by the time it runs all the code after will have been
  pushed and popped off the call stack printing it third
*/
  setTimeout(() => {
    console.log('B');
  }, 0)

// pushed onto call stack once setTimeout moves to browser and callback queue
// printed second
console.log('B');


/*
# Async Promise 

  1. The fetch api is another function that will be handed over to api after
     being pushed onto the call stack. It will also leave a promise object in
     memory in the mean time.

  2. .then() function then gets pushed onto the stack, and then gets saved in
     the onFullFillment in the promise in memory and get popped off the stack.

  3. Code after the promise will pushed and popped off the call stack once
     console.log('C') is executed
  
  4. api will return causing the onFullfilment or onReject if is fails function 
     to be pushed onto the callback queue 

  5. Callstack is empty causing the callback function to rpushed onto the
     callstack and then console.log() in the callback is pushed and popped off
     the stack followed by the callback function itself being popped off and
     then the global() to be popped off

  6. 

*/

console.log('A');

const promise = fetch('/some-web-api');

promise.then(val => {
  console.log(`Promse value is ${val}`)
})

console.log('C')

/*
  # setTimeout + Promises

    1. after executing global scope, callback function goes to call stack then
       web api and then to callback queue

    2. while setTimout is pushed to callback queue, the fetch url is pushed onto
       call stack and then to the Web API (2 seocnds)

    3. the promise.then() pushes its argument onto the promise array and updates 
       the promise in memory as a result of fetch api. promise.then() is popped
       off the call stack 

    3. var 'i' is assigned to 0 in memory.

    4. while loop is pushed onto the call stack and runs 

    5. fetch api finishes and the cb function from the api is pushed onto the
       micro task queue. 

    6. While loop completes and popped off the stack and the last
       console.log('second') is pushed onto the stack and popped off

    7. No more code to run on call stack, micro tasks are priorities meaning the
       APi promise callback function is pushed onto the stack along with
       anything in it. 

    8. Once api callback function is popped off the stack, only then is the
       setTImeout callback pushed on the call stack and runs
*/

setTimeout(() => {
  console.log('first');
}, 0)

const promise2 = fetch('/some-web-api');

promise2.then(val => {
  console.log(`Promse value is ${val}`)
})

let i = 0;
while(i < 10000000) {
  i++;
}
console.log('second');