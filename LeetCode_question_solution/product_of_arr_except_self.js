//Question ------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// Solution ------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefArr=[];
    let suffArr=[];
    let n=nums.length;
    let ans=[];
    prefArr[0]=1;
    suffArr[n-1]=1;
    for(let i=1;i<n;i++){
        prefArr[i]=prefArr[i-1]*nums[i-1];
    }
    for(let i=n-2;i>=0;i--){
        suffArr[i]=suffArr[i+1]*nums[i+1];
    }
    for(let i=0;i<n;i++){
      ans[i]=prefArr[i]*suffArr[i];
    }
    return ans;
};