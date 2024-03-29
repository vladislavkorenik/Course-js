/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort( (a, b) => { return a - b } );
    return nums[parseInt( nums.length / 2 )];
};