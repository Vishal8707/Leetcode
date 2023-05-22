/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    let n = nums.length;
       //cyclic sort
       for(let i=0;i<n;){
           let correctIndex = nums[i]-1;
           if(nums[i] > 0 && nums[i] <= n && nums[i] != nums[correctIndex]){
                let temp = nums[i];
                nums[i] = nums[correctIndex];
                nums[correctIndex] = temp;
                }
                else
                i++;
           }
           let i=0;
           for(;i<n;i++){
               if(nums[i] != i+1)
               return i+1;
           }
           return n+1;
    };  

    