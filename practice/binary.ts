
const binarySearch = (arr: { id: number }[], checkVal: number): { id: number } | null => {

  const midIndex = Math.floor(arr.length / 2);
  const midVal = arr[midIndex];
  if (midVal?.id === checkVal) return arr[midIndex];

  if (checkVal < midVal?.id) {
    const leftArr = arr.slice(0, midIndex);
    // console.log(leftArr);
    return binarySearch(leftArr, checkVal);
  }

  if (checkVal > midVal?.id) {
    const rightArr = arr.slice(midIndex + 1, arr.length)
    // console.log(rightArr)
    return binarySearch(rightArr, checkVal);
  }
  return null
}

const newArr = [
  {id: 0}, 
  {id: 2},
  {id: 3}, 
  {id: 4}, 
  {id: 5}, 
  {id: 6}, 
  {id: 7}, 
  {id: 8}, 
  {id: 9}, 
]

// return index numbers
console.log(binarySearch(newArr, 0))

