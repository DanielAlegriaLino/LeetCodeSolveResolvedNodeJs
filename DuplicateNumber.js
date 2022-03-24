//Ordenamiento
/*
var containsDuplicate = function(nums) {
    if (nums.length < 2) return false;
    nums = nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    return false
};

*/

//Brute Force
/*
containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}
*/

//Hash Map
containsDuplicate = (nums) => {
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hashmap) return true
        hashmap[nums[i]] = 1
    }
    return false
}

// MEMORY  O(N)    TIME   O(N)  



console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 2, 2, 4]))
console.log(containsDuplicate([4, 4, 4, 4]))