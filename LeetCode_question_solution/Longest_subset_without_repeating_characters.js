
// Given a string s, find the length of the longest 
// substring without repeating characters.

// Solution ------------------>>>>>>>>>>

var lengthOfLongestSubstring = function(s) {
    let i=0,j=0;
    let n=s.length;
    const map=new Map();
    let maxLen=0;
    while(j<n){
        if(!map.has(s[j])){
            map.set(s[j],j);
        }
        else{
          let t=map.get(s[j]);
          while(i<=t){
            map.delete(i);
            i++;
          }
          map.set(s[j],j);
        }
        maxLen=Math.max(maxLen,j-i+1);
        j++;
    }
    return maxLen;
};