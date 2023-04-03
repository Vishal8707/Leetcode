/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length-1
    let ans=0
    while(i<j){
        let w=j-i
        let h=Math.min(height[i],height[j])
        let area=w*h
         ans=Math.max(ans,area)
        if(height[i]<height[j]){
            i++
        }else{
            j--
        }
    }
    return ans
    
};