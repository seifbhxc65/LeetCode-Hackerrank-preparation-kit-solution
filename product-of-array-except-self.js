/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   const answer=[];
    let product=1;
    for(let i=0;i<nums.length;i++){
        product*=nums[i];
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0)
        {let pr=1;
        
        for(let j=0;j<nums.length;j++){
            if(j!==i) pr*=nums[j];
        }
        answer.push(pr);
        }
        else
        answer.push(product/nums[i])
    }
    return answer;
};
