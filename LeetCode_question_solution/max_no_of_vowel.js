const prompt = require("prompt-sync")();

function ctVowel(str){
    let ct=0;
    for(let i of str){
        if(i=='a' ||i=='e' ||i=='i' ||i=='o' ||i=='u' ||i=='A' ||i=='E' ||i=='I' ||i=='O' ||i=='U'){
               ct++;
        }
    }
    return ct;
}

function maxVowel(str){
    let arr=[];
    let stri="";
    for(let i=0;i<str.length;i++){
         if(str[i]!=' '){
           stri+=str[i];
         }
         else{
            if(stri!=""){
                arr.push(stri);
                stri="";
            }
         }
    }
    if(stri!=""){
        arr.push(stri);
    }
    let maxCt=0;
    for(let vowel of arr){
      let ct= ctVowel(vowel);
      if(ct>maxCt){
        stri=vowel;
        maxCt=ct;
      }
    }
    return stri;
}


let sentence=prompt("Ënter the Sentence");
console.log(maxVowel(sentence));
