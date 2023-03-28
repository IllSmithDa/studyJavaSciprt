// Generate Parenthesis

// https://leetcode.com/problems/generate-parentheses/description/

function generateParenthesis(n: number): string[] {
  let res: string[] = [];
  function iterate(str: string, left: number, right: number) {
      console.log(str);
      if (left > n  || right > n || right > left) return;
      if (left === n && right === n && str.length >= n * 2) {
          res.push(str);
          return;
      }
      iterate(str + '(', left + 1, right);
      iterate(str + ')', left, right + 1);   
  }
  iterate('', 0,  0)
  return res;
};

console.log(generateParenthesis(3));