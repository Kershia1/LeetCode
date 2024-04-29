/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
return arr.sort((a,b) => fn(a) - fn(b)); //ascending order sorted by fn numerical value
};