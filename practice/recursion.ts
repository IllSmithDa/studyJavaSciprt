// Recursive Functions


// COnverting number to binary



const testBinary = (num:number):string  => {
  if (num === 0 ) return '';
  let str: string = (num % 2).toString();
  console.log(num)
  console.log(num % 2)
  return testBinary(Math.floor(num / 2)) + `${str}`; 
}

// console.log(testBinary(101));


const pallindrome = (word: string): boolean => {
  if (word.length === 0 || word.length === 1) {
    return true;
  }
  let slicedWord: string;
  if (word[0] === word[word.length - 1]) {
    slicedWord = word.slice(1, word.length - 1);
    console.log(slicedWord);
    return pallindrome(slicedWord);
  }
  return false;
}

// console.log(pallindrome('atwowta'))

const recursiveSUm = (inputNum: number): number => {
  if(inputNum <= 1) {
    return inputNum;
  }
  console.log(inputNum);
  return inputNum + recursiveSUm(inputNum - 1);
}

console.log(recursiveSUm(5));
