/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const createAlphaObject=()=>{return { 'A':0, 'B':0, 'C':0, 'D':0, 'E':0, 'F':0, 'G':0, 'H':0, 'I':0, 'J':0, 'K':0, 'L':0,'M':0, 'N':0, 'O':0, 'P':0, 'Q':0, 'R':0, 'S':0, 'T':0, 'U':0, 'V':0, 'W':0, 'X':0, 'Y':0, 'Z':0,
'a':0, 'b':0, 'c':0, 'd':0, 'e':0, 'f':0, 'g':0, 'h':0, 'i':0, 'j':0, 'k':0, 'l':0,'m':0, 'n':0, 'o':0, 'p':0, 'q':0, 'r':0, 's':0, 't':0, 'u':0, 'v':0, 'w':0, 'x':0, 'y':0, 'z':0
                            }}
var minWindow = function(s, t) {
  
  if(!t) return "";
   if(s==t || (t.length==1 && s.indexOf(t)!==-1)) return t;
    let matches=[];
    const map1=createAlphaObject()
    let testmap=createAlphaObject()
    for(let i=0;i<t.length;i++){
        map1[t[i]]++;
    }
    let ch="";
    let any=0;
    let retIndex=-999;
    let j=0;
    let score=0;
    while(j<s.length){
        if(map1[s[j]]) {
            if(retIndex===-999) retIndex=-1;
            else if(retIndex==-1) retIndex=j-1;
            ch+=s[j];
            any=1;
            /******/
            if(testmap[s[j]]<map1[s[j]]){
                score++;
                testmap[s[j]]++;
            }
            /******/
        }
        else if(any){
            ch+=s[j];
        }
        if(score===t.length){
           
            score=0;
            j=retIndex;
            retIndex=-999;
            matches.push(ch);
            
            ch='';
            testmap=createAlphaObject();
            any=0;
        }
        j++;
    }
   
    if(matches.length===0) return '';
    let result=matches[0];
    for(let k=1;k<matches.length;k++){
        if(matches[k].length<result.length) result=matches[k]
    }
    //if the current char in s exist in m1 we add it to ch 
    //now we complete filling ch with any char througout the loop until ch verify m1 or the loop is over
    //if ch was able to verify m1 conditions we push it  to array matches
    //no when the loop is over we return the result based on matches content (string with min chat or "")
    return result;
};
