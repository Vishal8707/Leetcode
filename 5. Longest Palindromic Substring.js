/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    let longest = '';
    const dp = Array(n)
      .fill(false)
      .map(() => Array(n).fill(false));
  
    // Initialize substrings of length 1 and 2
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
      longest = s[i];
      if (i < n - 1 && s[i] === s[i+1]) {
        dp[i][i+1] = true;
        longest = s.substring(i, i+2);
      }
    }
  
    // Fill in the rest of the array
    for (let len = 3; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        if (s[i] === s[j] && dp[i+1][j-1]) {
          dp[i][j] = true;
          longest = s.substring(i, j+1);
        }
      }
    }
  
    return longest;
  };