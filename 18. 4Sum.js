/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target){
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i-1]) continue; // skip duplicates
      if (nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) break; // exit early
      if (nums[i] + nums[nums.length-1] + nums[nums.length-2] + nums[nums.length-3] < target) continue; // exit early
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i+1 && nums[j] === nums[j-1]) continue; // skip duplicates
        if (nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break; // exit early
        if (nums[i] + nums[j] + nums[nums.length-1] + nums[nums.length-2] < target) continue; // exit early
        let left = j + 1;
          let right = nums.length - 1;
          while (left < right) {
            const sum = nums[i] + nums[j] + nums[left] + nums[right];
            if (sum === target) {
  
              res.push([nums[i], nums[j], nums[left], nums[right]]);
              left++;
              right--;
              while (left < right && nums[left] === nums[left - 1]) left++; // skip duplicates
              while (left < right && nums[right] === nums[right + 1]) right--; // skip duplicates
              }
              else if (sum < target) {
                left++;
                } 
                else {
                  right--;
                  }
              }
          }
      }
      return res;
  }
  