// Question ----------------------->>>>>>>>>>>>
/* Given an array of strings words representing an English Dictionary,
return the longest word in words that can be built one character at a 
time by other words in words. If there is more than one possible answer,
return the longest word with the smallest lexicographical order.
If there is no answer, return the empty string.
Note that the word should be built from left to right with
each additional character being added to the end of a previous word.
Input: words = ["w","wo","wor","worl","world"]
Output: "world"
Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
  */

// Solution------------------>>>>>>>>>>>>>>>>>
var longestWord = function(words) {
    words.sort();
    let set=new Set();
    let ans="";

    words.forEach(st=>{
         if(st.length==1 || set.has(st.slice(0,st.length-1))){
            set.add(st);
            if(st.length>ans.length){
                ans=st;
            }
         }
    })
  return ans;

};