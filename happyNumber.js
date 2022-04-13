/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let occurence = {};
    let sNumber = n.toString();
    while (sNumber !== '1' && !occurence[sNumber]) {
        occurence[sNumber] = true;
        sNumber = sNumber.split('').reduce((total, digit) => parseInt(total) + parseInt(digit) * parseInt(digit), 0).toString();
    }

    return sNumber === '1';
};