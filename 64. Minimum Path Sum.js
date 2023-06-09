/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const n = grid.length;
  const m = grid[0].length;

  const memo = new Array(n).fill().map(() => new Array(m).fill(0));

  var a = helper(grid, 0, 0, memo);
  return a;


}
const helper = (grid, i, j, memo) => {
 if (i < grid.length && j < grid[0].length) {
   if (i === grid.length - 1 && j === grid[0].length - 1) {
     memo[i][j] = grid[i][j];
     return memo[i][j];
   }
  
   if (memo[i][j] !== 0) {
     return memo[i][j];
   }
  
   const down = helper(grid, i + 1, j, memo);
   const right = helper(grid, i, j + 1, memo);
   memo[i][j] = Math.min(down, right) + grid[i][j];
  
   return memo[i][j];
 }

 return Number.MAX_VALUE;
};