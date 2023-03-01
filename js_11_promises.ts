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

newPromise.then(onFulFillment)
newPromise.catch(onReject)