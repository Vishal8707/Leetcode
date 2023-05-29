/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let answer = [];
    intervals.sort((a,b) => a[0] != b[0] ? a[0]-b[0] : a[1] - b[1]);
    let prevWindow = intervals[0];
    answer.push(prevWindow);
    for(let i=0; i< intervals.length; i++){
          
           let currWindow = intervals[i];

           if(currWindow[0] <= prevWindow[1])
               {
                   prevWindow[1] = Math.max(currWindow[1] , prevWindow[1]);
               }

           else{
               answer.push(currWindow);
               prevWindow = currWindow;
           }
    }
   return answer;
};

