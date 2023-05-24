/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length == 0 || nums == null)
    return [];
    let ans = [];
    let current = [];
    backtrack(ans, current, nums);
    return ans;
};

const backtrack = (ans, current, nums) =>{
   if(current.length == nums.length)
       ans.push([...current]);
   else{
       for(let i=0;i<nums.length;i++){
           if(!current.includes(nums[i]))
               {
                   current.push(nums[i]);
                   backtrack(ans, current, nums);
                   current.pop();
               }
       }
   }

};