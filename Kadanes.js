var maxSubArray = function(nums) {
    let tab = Array(nums.length);
    let max_value = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            tab[i] = nums[i];
            continue;
        }

        if (nums[i] + tab[i - 1] > nums[i]) {
            tab[i] = nums[i] + tab[i - 1];
            if (tab[i] > max_value) max_value = tab[i]
            continue;

        } else {
            tab[i] = nums[i]
            if (tab[i] > max_value) max_value = tab[i];
        }
    }
    return max_value;
};