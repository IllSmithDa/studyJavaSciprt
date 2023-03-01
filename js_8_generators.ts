/*
  generators allows us to write iterables much more efficently using built in
  functioality from JavaScript. You initiazlie generators using the '*' keyword
  after function
*/

function normalFunctions() {
  console.log('Hello');
  console.log('World');
}
// will print out hello world no matter whwat 
normalFunctions();

// generators can pause the execution mid function
function* generatorFunction() {
  yield 'Hello'
  yield 'World'
}

/* 
  invoke generator which will return an object like an iterator and in fact, it
  is an iterator
*/
const generatorObj = generatorFunction()

// Like all iterables, you can iterate through them using for of loop 
for (const word of generatorObj) {
  console.log(word);
}

/*
  Way more simpler than writing our own iterables as generator function handle
  creating the next() function and the object return or even the state. 
*/