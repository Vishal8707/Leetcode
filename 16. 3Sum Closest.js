/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = nums[0] + nums[1] + nums[nums.length - 1];
    nums.sort((a,b)=>(a-b))
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1, k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum == target) {
                return target;
            }

            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    return result
};