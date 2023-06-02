/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   
    let arr = s.split(" ")
     for(let i = 0 ; i<arr.length ; i++){
         if(arr[i] == " ") {
             arr.splice(i,1)
             i--
         }
         if(arr[i] == "") {
             arr.splice(i,1)
             i--
         }
     }
     return arr[arr.length-1].length
     
 };