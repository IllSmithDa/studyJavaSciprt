/*
# Promises

  1, method for handling asynchronous callback and functions using different
  states to perform either the promise itself or one of the two resulting
  callback functions depending on whether it was fulfilled or rejected

  1. A promise is basically a object that has one of three states 

    a. pending - the initial state neither fulfilled or rejected

    b. fulfilled: operation has completed successfully

    c. rejected: operatio nhas failed
  
  2. Promises help us deal with asynchronous code in a far more simpler way than callbacks

*/

/*
  Use 'Promise' keyword to create a promise which will take an object and two
  arguments which when called changes the status of the promise to either being
  'fullfilled' or 'rejected'
*/
const newPromise = new Promise<string>((resolve, rejected) => {
  const isSuccessful = true;
  if (isSuccessful) {
    // passing string data upon resolve
    resolve('successful message');
  } else {
    // passing something else on reject
    rejected('error: operaion not successful');
  }

})

const onFulFillment = (result: string) => {
  console.log(result);
  console.log('do something good');
}

const onReject = (err: any) => {
  console.log(err);
  console.log('some error perhaps');
}

/*
# Promises gives you access to two built in callback functions '.then()' and '.catch()'

  2. .then() will trigger upon promsie resolve while .catch will run when
     reject() is called 
*/

newPromise
  .then(onFulFillment)
  .catch(onReject)

/*
# Promise.all()

  1. Query multiple APIs and perform some actions only after all the APIs have
     finished loading

  2. method takes an iterable of promises as an input and returns a single
     Promise that resolves to an array as its result 

  3. Promises resolve once all input promises resolved but immediately rejects
     in its entirety if even one of them fail. No partial successes here
     
     a. If you wish to wait until all input promises are completed, you can also
     use Promise.allSettled() instead of Pormise.all()
*/

const promise1 = Promise.resolve(3);
const promise2 = 43;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

Promise.all([promise1, promise2, promise3]).then((values) => {
  /*
    values will print out an array with each individual value as its own entry
    in the array. If one of the promises fail, the entire Promise.all will fail
  */
  console.log(values);
})
.catch((err) => {
  console.log(err);
})

// exact same except resolves or rejects only after every promise has been completed
Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  /*
    values will print out an array with each individual value as its own entry
    in the array. If one of the promises fail, the entire Promise.all will fail
  */
  console.log(values);
})
.catch((err) => {
  console.log(err);
})


/* 
  Promise.race returns a promise that is fullfed or rejected as soon one of the
  input promises fullfills or rejects. Its a first finsished, first served function
*/
Promise.race([promise2, promise3]).then((value) => {
  // return promise2 because it resolves the fastest
  console.log(value)
})