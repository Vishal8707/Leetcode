/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let n = s.length; 
    let stack = [];
    for(let i=0;i<n;i++){
 
        if(s[i] == '(' || s[i] == '{' || s[i] == '[')
            stack.push(s[i]);
        else{
               
                if(s[i] == ')' && stack[stack.length-1] == '(' ||
                     s[i] == ']' && stack[stack.length-1] == '[' ||
                        s[i] == '}' && stack[stack.length-1] == '{')
                    stack.pop();
               
                else
                    return false;
        }
    }
 
    return stack.length == 0;
 }
 