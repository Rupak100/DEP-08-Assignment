// Question---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Given a binary array nums, you should delete one element from it.
// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Solution--------------->>>>>>>>>>>>>>>>>>>>>>>>>
var longestSubarray = function(nums) {
    
    let n=nums.length;
    let ans=0;
    let zero=0;
    let j=0,i=0;
    while(j<n){
       if(nums[j]===0){
        zero++;
       }
       while(zero>1){
        if(nums[i]===0){
            zero--;
        }
        i++;
       }
    ans=Math.max(ans,j-i-zero+1);
    j++;
    }
    return ans===n?n-1:ans;
};