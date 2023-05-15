/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [];
    let n = s.length;
    let ans =0;
    
    stack.push(-1);
    for(let i=0;i<n;i++){
        if(s[i] == '('){
             stack.push(i);
        }
        else{
            stack.pop();

            if(stack.length == 0)
               stack.push(i);
            else{
                ans = Math.max(ans, i- stack[stack.length-1]);
           }
       }
   }
   return ans;

};