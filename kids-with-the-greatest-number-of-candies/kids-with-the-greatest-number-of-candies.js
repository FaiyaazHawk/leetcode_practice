/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxvalue = Math.max(...candies)
    let result = []

    for (let i=0; i< candies.length; i++) {
        if (candies[i] + extraCandies >= maxvalue) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result
};