const arr = ['a', 'b', 'c'];

//This usually used with object to iterate through keys, in this case indeces
for (let el in arr) {
    console.log(el);
}

// Loop through each element of the array
for (let el of arr) {
    console.log(el);
}

//for of with index
for (let [index, el] of arr.entries()) {
    console.log(index + " ---- " + el);
}

//Well there is forEach for all this😅