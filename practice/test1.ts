// Coding Challenge: https://leetcode.com/problems/valid-sudoku/

// extreme brute force solutions 
function rowCheck(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        let map:any = {}
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '.') continue;
            if (board[i][j] in map) return false;
            map[board[i][j]] = 1;
            // console.log(map);
        }
    }
    return true
}

function testColumns(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        let map:any = {}
        for (let j = 0; j < board[i].length; j++) {
            // console.log(map);
            if (board[j][i] === '.') continue;
            if (board[j][i] in map) return false;
            map[board[j][i]] = 1;
        }
    }
    return true
}

function matrixCheck(board: string[][]): boolean {
  for (let i = 0; i < board.length; i += 3) {
      let map:any = {}
      let rowCount = 1;
      for (let j = 0; j < board.length; j++) {
          for (let k = i; k < i + 3; k++) {
              console.log(rowCount);
              if (rowCount > 9) {
                  map = {};
                  rowCount = 1;
              }
              rowCount++;
              if (board[j][k] === '.') continue;
              if (board[j][k] in map) return false;
              map[board[j][k]] = 1;
              console.log(map);
          }
      }
  }
  return true
}


function isValidSudoku(board: string[][]): boolean {
    
    let checkRows: boolean = rowCheck(board);
    if (checkRows === false) return false;

    let column: boolean = testColumns(board);
    if (column === false) return false;

    let matrix: boolean = matrixCheck(board);
    if (matrix === false) return false;

    return true;

};


// solution #2
// time complexity: o(n^2);
// space: 0(1)
const matrixCheck2 = (row: number, column: number): number => {
    if (row <= 2 && column <= 2) {
        return 0;
    } else if (row <= 5 && column <= 2) {
        return 1;
    } else if (row <= 8 && column <= 2) {
        return 2;
    } else if (row <= 2 && column <= 5) {
        return 3;
    } else if (row <= 5 && column <= 5) {
        return 4;
    } else if (row <= 8 && column <= 5) {
        return 5;
    } else if (row <= 2 && column <= 8) {
        return 6;
    } else if (row <= 5 && column <= 8) {
        return 7;
    } else {
        return 8;
    }
}



const isValidSudoku2 = (board: string[][]):boolean => {
    const rows:Array<{[key:string]: number}> = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const columns:Array<{[key:string]: number}>  = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const matrices:Array<{[key:string]: number}>  = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board.length; column++) {
            const matrix = matrixCheck2(row, column);
            const currentVal = board[row][column];
            if (currentVal === '.') continue;
            // console.log(matrices);
            if (currentVal in rows[row] || currentVal in columns[column] || currentVal in matrices[matrix]) return false;
            rows[row][currentVal] = 1;
            columns[column][currentVal] = 1;
            matrices[matrix][currentVal] = 1;
        }
        console.log(columns);
    }
    return true;
}




const test = 
[["5","3",".",".","7",".",".",".","."], 
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku2(test));