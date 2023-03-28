// problem: https://leetcode.com/problems/integer-to-roman/

// O(n ^2)

function intToRoman(num: number): string {
  const map: {[key:number]: string} = {
    1: 'I',
    4: 'IV',
    5:'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  const romanValues: string[] = Object.keys(map);

  let currentNum = num;
  let romanText:string = "";

  for (let i = romanValues.length; i >= 0; i--) {
    if (currentNum / Number(romanValues[i]) >= 1) {
      const val = Number(romanValues[i]);
      console.log(val);
      let numOfRomans:number = Math.floor(currentNum / val);
      while(numOfRomans > 0) {
        romanText = `${romanText}${map[val]}`
        numOfRomans -= 1;
      }
      currentNum = currentNum % val;
    }
  }

  return romanText
};

console.log(intToRoman(49));