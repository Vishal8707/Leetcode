/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    let answer = [];
    let start =0;
    let current = [];
    backtrack(candidates, answer,  current, start, target);
    return answer;
};
const backtrack = (nums, answer, current, start, remaining) => {
    if(remaining < 0)   return;
    else if(remaining === 0 ) 
        answer.push([...current]);
    else{
        for(let i=start;i<nums.length;i++){
            current.push(nums[i]);
            backtrack(nums, answer,  current, i, remaining-nums[i]);
            current.pop();
        }
    }

};