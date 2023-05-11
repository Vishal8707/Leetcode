/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result=1
    for(let i=0;i<nums.length-1; i++){
    if(nums[i]!==nums[i+1]){
        nums[result] =nums[i+1]
        result++
        }
}
return result

};
