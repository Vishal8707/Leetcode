/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x.toString().split("")
    let i = 0
    let j = num.length-1
    let temp;
    while(i<j){
        if(num[i]=="-"){i++}
        temp = num[j]
        num[j]=num[i]
        num[i]=temp
        i++;
        j--
    } if(num.join("")<=-2147483648 || num.join("")>=2147483647){return 0}
     return num.join("")
};