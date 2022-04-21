/* 
    Given a string s, write function that returns the reverse of s. 
    e.g.:
        hello => olleh
        dream => maerd
 */

function reverseString(s) {
    let reversedString = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reversedString += s.at(i);
    }
    return reversedString;
}


console.log(reverseString("Hello"));

function reverseStringUsingArrays(s) {
    return s.split('').reverse().join('');
}

console.log(reverseStringUsingArrays("Hello"));