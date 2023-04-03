/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let countsMap = new Map();  // for storing frequeny of char in our window
    let maxlength = 0;
       let i = 0; // Left pointer
       for(let j = 0; j < s.length; j++){
           let char = s.charAt(j);
           countsMap.set(char, (countsMap.get(char) || 0) +1 ); // Add right pointer to window
         
          //if window is valid or not
           while(countsMap.get(char) > 1){
               let leftChar = s.charAt(i);
               countsMap.set(leftChar, (countsMap.get(leftChar) || 0) -1 );
               i++;
           }
           // Now our condition is valid


           maxlength = Math.max(maxlength, j-i+1); // Update global max with the length of current valid substring/window
       }
       return maxlength;

};