
function merge  (leftArr: number[], rightArr: number[]): number[] {
  let sorted: number[] = [];
  // console.log(sorted);
  while (leftArr.length && rightArr.length) {
    // shift works becuase array has been sorted by this method since array size has been 1
    if (leftArr[0] < rightArr[0]) {
      // the shifted or removed array is then push into the sorted array
      sorted.push(leftArr[0]);
      leftArr.shift();
     } 
     else {
        sorted.push(rightArr[0]);
        rightArr.shift();
     }
  };
  // concat remaining entry from array that has not been added using shift
  // method
  
  console.log(`left array: ${leftArr}`);
  console.log(`rght array: ${rightArr}`);
  console.log(`sorted array: ${sorted}`);
  console.log(`mega array: ${[...sorted, ...leftArr, ...rightArr]}`)
  return [...sorted, ...leftArr, ...rightArr];
};


function mergeSort (arr: number[]):number[] {
  // return array if base is reached
  if (arr.length <= 1)  {
      return arr;
  }
  //  get midpoint of array and use it to split array by left array and right array
  // recursively call mergeSort until array size reaches 1.
  let midpoint = Math.floor(arr.length / 2),
  leftArr = mergeSort(arr.slice(0, midpoint)),
  rightArr = mergeSort(arr.slice(midpoint));
  
  console.log('left array: ' + leftArr  +  ' and right array: ' + rightArr );
  
  // after reaching size 1, it will call this function many times as it begins to unwind from base to full array
  return merge(leftArr, rightArr);
};

console.log(mergeSort([5, 7, 2, 1, 4, 3, 0, 3]));
export {};