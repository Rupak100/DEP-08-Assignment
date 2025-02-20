//  -------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 347. Top K Frequent Elements
//  Description: --
//  Given an integer array nums and an integer k, return the k most frequent elements.
//   You may return the answer in any order.

//  Example 1:
//  Input: nums = [1,1,1,2,2,3], k = 2
//  Output: [1,2]
//  Example 2:
 
//  Input: nums = [1], k = 1
//  Output: [1]
  
 
//  Constraints:
 
//  1 <= nums.length <= 105
//  -104 <= nums[i] <= 104
//  k is in the range [1, the number of unique elements in the array].
//  It is guaranteed that the answer is unique.

// Solution ------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqArrayMap=new Map();
    let elementArray=[];
    nums.forEach(num=>{
        if(!freqArrayMap.has(num)){
            freqArrayMap.set(num,0);
        }
        freqArrayMap.set(num,freqArrayMap.get(num)+1);
    });
    let arrayFreq=Array.from(freqArrayMap);
    arrayFreq.sort((a,b)=>b[1]-a[1]);
    for(let i=0;i<k;i++){
        elementArray.push(arrayFreq[i][0]);
    }
    return elementArray;
};