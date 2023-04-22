 /* 
  Introduced in es2017, 'async' keyword is used to declare async functions. Async functiosn are
  function that are instances of AsyncFunction container and they always return
  a promise
*/

async function newGreeting() {
    return 'Hello World';
}

// alternatively
async function newGreeting2() {
  return Promise.resolve('Hello World Star')
}

// consume async using .then()

newGreeting2()
  .then(value => console.log(value))

/*
  Async keyword allows you to use 'Await' keyword

    1. Await can be put in front of any async based promise to pause your code
       until the promise settles and returns its result
    
    2. Await only works inside asynce function and definitely not normal
       functiosn 
*/

// async function is established allow javascript to run other tasks while
// waitinf for this task to complete
async function cars() {
  // promise is defined 
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 2000)
  })

  /*
    store result into 'result' and wait until promise returns and is resolved
  */
  let result = await promise;
  console.log(result);
}
cars();


/*
  best practice for asynchronous programming is using async/await in a try
  catch block 
*/
async function fetchData() {
  try {
    const listofCars = await cars();
    const greeting1 = await newGreeting();
    const greeting2 = await newGreeting2();
    console.log(`${ listofCars } ${greeting1} ${greeting2}`)
  } catch(err) {
    console.log(`error: ${err}`)
  }
}
fetchData();

/* 
  Sequential vs concurrent vs parallel
*/
// consider these two promises with callback functiosn
function resolveA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello')
    }, 6000)
  })
}
function resolveB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('world')
    }, 2000)
  })
}
function doSomethingElse<T>(text: T) {
  console.log(`resolve: ${text}`);
}


/*
  We can execute code sequentially which is when the second function is
  dependent on the result of the first function. However, if that is not the
  case, then we are slowing the code down and waiting for each execution to
  finish for no reason
*/

// executes in 8 seconds as it waits for resolve A then onto resolve B
async function handleSequentially() {
  const answerA = await resolveA();
  doSomethingElse(answerA);

  const answerB = await resolveB();
  doSomethingElse(answerB);
}
// handleSequentially();

/*
  Concurrent Execution means running both at the same time and executes both in
  6 seconds as it runs concurrrently meaning that the time it takes to finish
  is simply the time of the longest operatio nwhich in this case is resolveA at
  6 seconds. Not good if promises are dependent on one another
*/
async function handleConcurrently() {
  const answerA = resolveA();
  const answerB = resolveB();
  doSomethingElse(await answerA);
  doSomethingElse(await answerB);
}

// handleConcurrently();

/*
  Running functions in parallel in which individual functions are resolved
  without having to wait for other other functions at all. Note that these
  function are set to self invoke (function() { console.log('run'); })()
*/
function parallel() {
  Promise.all([
    (async () => { doSomethingElse(await resolveA())})(),
    (async () => { doSomethingElse(await resolveB())})(),
  ]).then(() => {
    console.log('finally')
  })
}
parallel();

/*
  As demonstrated, async and await keywords allow for asynchronous, promise base
  behavior written in a cleaner style and avoiding the need to explicitly
  configure promise chains
*/