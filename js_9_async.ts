/*
  JavaScript is always limited to being a single thread unlike languages like c++
  or java. A single thread can only do one task at a time. JavaScript needs help
  from outside sources such as the browser or the api to handle some  of the work so
  that the main thread will not be blocked too much and continue to run
*/

/*
  SetTimeout() executes a particular block of code once after a specified time
  has elapsed. It takes up at least arguments and they are the function,
  duration in milliseconds, zero or more values that represnt any parameters you
  want to pass into the function
*/

function greet(name: string) {
  console.log(`hello ${name}`)
}

// function greet, 2000 milliseconds, argument sam
const timeoutid = setTimeout(greet, 2000, 'sam');

/* 
  clearTimeout clears the timeout and will not run after the duration is over.
  It is useful for component unmounts and prvent code from executing on a
  unmounted component
*/
clearTimeout(timeoutid);

/* 
  SetTimeout() has the same arguments as setTimout(). The main difference is
  that setInterval() will loop after set time period. Don't forget to
  clearInterval so that it doesn't run forever
*/

const intervalId = setInterval(greet, 2000, 'sam2')

/* 
  after 5 loops or 10 seconds, clearInterval is called to stop the interval
  from running
*/
setTimeout(() => clearInterval(intervalId), 10500);


/* 
# Notes

  1. Timers and intervals are implemented by the browser rather than JavaScript
     itself.
  
  2. duration parameter is the minimum delay but not the gauranteed delay. The
     call stack must be free which can introduce variance to the timing.

  3. There are two different ways to do intervals
*/

// duration is guaranteed between executions when ran this awy 
const testone = setTimeout(function run() {
  console.log('hello 1');

  // you have the opportunity of adding a different delay before running interation
  const clearid = setTimeout(run, 3000)
  // clear interval does not work here
  setTimeout(() => clearInterval(clearid), 5500);
}, 2000)

  // clear interval does not work here
setTimeout(() => clearInterval(testone), 5500);

/* 
  there wil be variance in time because of the added time it takes to execute
  the code itself. Delay duration is fixed to 2000 and cannot be altered
*/
const testtwo = setInterval(function() {
  console.log('hello 2')
}, 2000)
// clearinterval can be used to stop setinterva;
setTimeout(() => clearInterval(testtwo), 5500);

export {};