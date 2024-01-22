/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

 //nums is the array
 //fn is the function 
 //init is initial starting value 
const reduce = function(nums, fn, init) {
    let results = init; //starting value set to results

for (let i of nums) //over the array
    results = fn(results, i) //use provided fn to reduce until only 1 element remains 
    return results; //return this final single output
};