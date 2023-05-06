/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    backtrack('', 0, 0);
    return result;
    
    function backtrack(combination, open, close) {
      if (combination.length === 2 * n) {
        result.push(combination);
        return;
      }
      if (open < n) {
        backtrack(combination + '(', open + 1, close);
      }
      if (close < open) {
        backtrack(combination + ')', open, close + 1);
      }
    }
  };