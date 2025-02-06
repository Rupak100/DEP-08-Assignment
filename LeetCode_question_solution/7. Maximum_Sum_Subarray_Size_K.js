/*You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.  */

// Solution -------------->>>>>>>>>>>>
var maximumSubarraySum = function(nums, k) {
    let i=0,j=0;
    let n=nums.length;
    const st=new Map();
    let sum=0;
    let maxiSum=0;
    while(j<n){
        
      if(!st.has(nums[j])){
        st.set(nums[j],j);
        sum+=nums[j];
      }
      else{
       let t=st.get(nums[j]);
         while(i<=t){
            sum-=nums[i];
            st.delete(nums[i]);
            i++;
         }
         sum+=nums[j];
         st.set(nums[j],j);

      }
       if(st.size===k){
      maxiSum=Math.max(maxiSum,sum);
      st.delete(nums[i]);
      sum-=nums[i];
      i++;
      }
      j++;
     

    }
    return maxiSum;
};