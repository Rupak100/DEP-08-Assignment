// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Solution------------>>>>>>>>>>
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let n=nums.length;
    let minLen=n+1;
    let i=0,j=0;
    
    while(j<n){
       sum+=nums[j];
       
        while(sum>=target){
            minLen=Math.min(minLen,j-i+1);
            sum-=nums[i++];

        }
        j++;
       
    }
    return minLen===n+1?0:minLen;
};