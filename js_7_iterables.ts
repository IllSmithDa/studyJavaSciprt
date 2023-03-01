/*
  In Javascript, there are many ways to iterate through a list of values,
  whether it would be a list of numbers, strings, or characters in string. 
  Iterables are introduced to streamline the process of iteration which could
  easily be varied for different type of data structure
*/

const str = 'Samuel'
for (const char of str) {
  console.log(char)
}

const arr = ['S', 'a', 'm', 'u', 'e', 'l'];

for (const item of arr) {
  console.log(item);
}

/* 
  An object which implments the iterable protocol is an iterable. Iterator
  protocol decides whether an object is an iterator. The object must have a
  next() method that returns on object with two properties and a value which
  returns the current elemnt. There is a done property whcih is indicating
  whether there are any more elements that could be iterated upon
*/

const obj = {
  // initialize a iterable using Symbol.iterator and setting a function to it
  [Symbol.iterator]: function() {
    let step = 0;

    // create an iterator object
    const iterator = {
      // next method that returns an object 
      next: function() {
        step++;
        // check if step is greater than 2 and then return done = true when done
        if (step === 1) {
          return { value: 'hello', done: false }
        } else if (step === 2) {
          return { value: 'world', done: false }
        } else if (step === 3) {
          return { value: 'star', done: false }
        } else {
          return { value: undefined, done: true }
        }
      }
    }
    return iterator;
  }
}
// iterate through until done is true
for (const word of obj) {
  console.log(word);   
}

/*
  JS does this internally for array, strings, Map and Sets and iterate throught
  them using the for of loop
*/