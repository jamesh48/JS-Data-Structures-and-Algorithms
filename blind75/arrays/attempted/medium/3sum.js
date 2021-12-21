// Leetcode #15
// Might work but time limit exceeded
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    
    let hash = {}
    nums.forEach((num, index) => {
        
    for (let i = 0; i < nums.length; i++) {
        if (i !== index) {
            for (let j = i; j < nums.length; j++) {         
            if (num + nums[i] + nums[j] === 0 && j !== i && j !== index) {
                let sort = [num, nums[i], nums[j]].sort()
                hash[sort] = true
                    } 
                }
            }
        }    
    });

    return Object.keys(hash).reduce((total, item) => {
        total.push(item.split(','));
        return total;
    }, [])
    

};
