/*
# Recursion 

  1. breaking a bigger problem down to smaller chunks 

  2. what is the stopping condition

  3. It allows us to look at complex data structure like trees and graphs and
     break it down into something simple. 

  4. Call stack can be loaded with lots of methods slowing down program and even
     run out of memory and cause crashes

  5. reduces need for complex loops and complex data structures 

  6. You can always memoize data can speed up repeat calls 

  7. Makes code complex if poorly constructed

*/
interface Person {
  id: number,
  nextInLine: Person | null,
}
// makes sure to add return type when using typescript and recursion 
function getPositionInLine(person: Person):number {
  if (person.nextInLine === null) {
    return 1;
  }
  /*
    calls over and over again with each call a different value until you get to
    person A. Each call gets you closer to the goal of finding the first person 
    thinking about how much closer you are getting to the goal with each call
    of reaching the base case. Combine once you reach the end to get the total result
  */
  return 1 + getPositionInLine(person.nextInLine)
  // return 'okay'
}
// created 3 intances of person
const personA: Person = {
  id: 32342,
  nextInLine: null
}
const personB: Person =  {
  id: 42323,
  nextInLine: personA
}
const personC: Person = {
  id: 21293,
  nextInLine: personB 
}
const personZ: Person = {
  id: 54342,
  nextInLine: personC 
}
// prints 3 as he is 3rd in line 
const result = getPositionInLine(personC);
console.log(result);

/* 
# Recursion and the call stack

  1. The call stack in recursion chains the same method putting each call on the
     call stack until the end case is found. and then we pop each function from
     the newest invoked until the original invoked function top to bottom while 
     returning the value each function has 
    
  2. base case stops the push to call stacks and being poping which is important
     because otherwise there is nothing stopping the call stack from continuing
     until a stack overflow error is triggered which is when we exceed the
     maximum allowed stack calls by JavaScript
*/

// invoke C, pushes to stack, invokeB, pushes to stack and then invoke A and
// then pop A, pop B and then pop C from the call stack
function printA() {
    return 'friends';
} 
function printB() {
  return `my ${printA()}`
} 
function printC() {
  return `hello ${printB()}`
} 
printC();

/*
# Recursion Strategy 

  1.  what is the smallest input that I could pass into this function where I
      would need to immediately return

    a. in this case there are two schools of thought, when you are down to one
    letter or even an empty string

  2. Breaking down the large problem into its smallest unit

    a. break down larger strings into individual characters    
*/

function reverseString(input: string): string {
  if (input === "") {
    return "";
  }
  // substring breaks the string at index x and returns it 
  console.log(`input: ${input.substring(1)}`);
  console.log(`char at: ${input.charAt(0)}`)
  
  /*
    reverseString(input.substring{1}) shrinks the problem space and 
    input.charAt(0) is teh smallest unit of work to contribute
  */
  return reverseString(input.substring(1)) + input.charAt(0);
}

const reverseThis = "hello"
console.log(reverseString(reverseThis))

/*
# What is being returned from previous example as callstack 

  reverseString("") + "0"    invoked last but first to be removed from callstack
  reverseString("o") + "l"      
  reverseString("lo") + "l"
  reverseString("llo") + "e"
  reverseString("ello") + "h"   ionvoked first but last to be removed from callstack

  1. The top function reveals the base case for the function and so you just end up
  retuning 0 to the next on the call stack 

  2. Once string is empty, it remains empty as it starts popping functions from
     the call stack

  3. however the letters on the right side concatenate until it finally returns 
    'olleh' which is the reverse of hello

  4. recursion is all about exploiting the nature of callstacks of popping in
     reverse order its been invoked and returning until you reached the initial
     invoked function
*/

