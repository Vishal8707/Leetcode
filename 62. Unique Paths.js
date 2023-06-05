/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = [];
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = 0;
        }
    }
    //bottoms up memoization
    //here dp[i][j] represents total no of unique path till i,j index
    
     for (let i = m-1; i >=0; i--) {
      
        for (let j = n-1 ; j >= 0; j--) {
           
                if(i == m-1 || j == n-1)
                    dp[i][j] = 1;
                else
                    dp[i][j] = dp[i+1][j] + dp[i][j+1];
        }
    }
    return dp[0][0];

};