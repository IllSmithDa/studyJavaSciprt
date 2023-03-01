// Palindrome example

/*
  Pallindrome is basically an word that is the same whether you reverse or not.
  For Resursive solution to test whether a string is recursive is the same
  proccess as the first example. The easiest way to test is to compare both ends
  of the letters and match them until you reach the center of the word. If any
  letters or chars don't match along the way, then it can't be a pallindrome

    1. WHat is the smallest case we can have? 

      a. a single char if word has odd number of characters and empty string if even 

    2. How do we shrink the problem? 

      a. Slice the end letters of word before we call the function again.
*/

function isPallindrome(input: string):boolean {
  if (input.length === 0 || input.length === 1) return true;
  
  if (input.charAt(0) === input.charAt(input.length - 1)) {
    return isPallindrome(input.substring(1, input.length - 1))
  }

  return false;
}

const test = isPallindrome("nonnon");
console.log(test);

/*
  returns true and will be passed from the pop function to one now on top of the
  stack until we reach the original invoked method which will return it from the
  function itself 
  
  isPallindrome("") 
  isPallindrome("nn")
  isPallindrome("onno")
  isPallindrome("nonnon")
*/

// Decimal to Binary example

/* 
  Decimals to Binary is when we devide number by 2 and concatinating the
  remainder to build a binary value of just 1 and 0s.
*/

function createBinary(val: number): string {
  // base case of val being either 0 or 1, return itself
  if (val === 1 || val === 0) return val.toString();

  // generate binary number back to from with each invoke and concatenate them
  // in order from top to botoom of call stack
  return createBinary(Math.floor(val / 2)) + (val % 2).toString();
}

const result = createBinary(10);
console.log(result);

/*
  return 1; return 1
  createBinary(1) + 0  // no remainder for dividing 2/2
  createBinary(2) + 1 // remainder when diviiding 5/2 
  createBinary(5) + 0  
  createBinary(10)     // pop functios call from top to bottom of call stack
*/

/*
# another way to do the same thing
*/
function createBinary2(val: number, result: string):string {
  // by this base case, result should be concatenated completely
  if (val === 0) return result;

  //concatenate result every call
  result = val % 2 + result;

  // shrink val that needs to be halved every call until it becomes 0;
  return createBinary2(val/2 , result);
}


// Sumn of natural numbers 

function naturalSum(val: number): number {
  if (val === 1) return val;
  
  return naturalSum(val - 1) + val
}

console.log(naturalSum(10))

/*
  return 1; return 1
  naturalSum(1) + 2
  ....
  naturalSum(7) + 8 // remainder when diviiding 5/2 
  naturalSum(8) + 9 
  naturalSum(9) + 10 
  naturalSum(10) // pop functios call from top to bottom of call stack
*/


export {};