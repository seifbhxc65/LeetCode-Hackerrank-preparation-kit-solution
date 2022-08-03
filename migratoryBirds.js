function migratoryBirds(arr) {
    // Write your code here
    const nbrs=[0,0,0,0,0];
    let max=-1;
    let maxInd=0;
    let ind;
    for(let i=0;i<arr.length;i++){
        ind=arr[i]-1;
        ++nbrs[ind];
        if(nbrs[ind]>max){
            max=nbrs[ind];
            maxInd=ind;
        }
        else if(nbrs[ind]===max)
           {
               maxInd=maxInd<ind?maxInd:ind;
           }
      
        
    }
    
   return maxInd+1;

}
