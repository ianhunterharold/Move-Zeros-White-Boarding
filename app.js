// Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // given an array, move all of the zeros to the end of the array, you cannot make a copy of the array? wouldn't this be desctructive? don't we want to keep data in it's original state?
  // iterate over the array'
  // if the value is 0, then remove it and add it to the end of the array.
  for (let i= nums.length - 1; i >=0 ; i--){
      if (nums[i] === 0){
          nums.splice(i,1) // removes the value from the array at the specific index 
          nums.push(0)
          console.log(nums)// adds to end of the array
      }
  }
};
