var singleNumber = function(nums) {
    let occurences = {};
    nums.forEach((num) => {
        occurences[num] = occurences[num] ? ++occurences[num] : 1;
    });

    console.log(occurences);
    return Object.keys(occurences).find(key => occurences[key] === 1);
};

singleNumber([2, 2, 3]);