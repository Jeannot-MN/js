const isHappyNumber = (number) => {
    let sNumber = number.toString();
    let occurence = {};
    while (sNumber !== '1' && !occurence[sNumber]) {
        const sum = sNumber.split('').reduce((total, n) => total + parseInt(n) * parseInt(n), 0);
        occurence[sNumber] = true;
        sNumber = sum.toString();
    }

    return sNumber === '1';
}

console.log(isHappyNumber(23));