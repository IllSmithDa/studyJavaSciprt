/* Binary Search */

// returns index where the searchVal exists
function binarySearch(testArr: number[], left: number, right: number, searchVal: number):number {
  
  if (left < right) {
    return -1;
  }
  
  const midPoint = Math.floor(left +  right /2);
  console.log(dummyArr[midPoint])


  // base case if val is found
  if (dummyArr[midPoint] === searchVal) return midPoint;

  if(searchVal < dummyArr[midPoint]) {
    // called again but narrowed the right point 
    return binarySearch(testArr, left, midPoint - 1, searchVal);
  } else {
  // called again but narrowed the right point 
    return binarySearch(testArr, midPoint + 1, right, searchVal);
  }

}

const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const result = binarySearch(dummyArr, 0, dummyArr.length - 1, 3);
console.log(result);

export {};