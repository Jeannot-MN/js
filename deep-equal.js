//How do you compare objects (arrays also) property by property? 
// assert deep equal; only available in Node.js assertion API
//Useful for testing
const person1 = {
    name: 'Homer',
    surname: 'Simpson'
};

const person2 = {
    name: 'Homer',
    surname: 'Simpson'
};

//Normal === always returns false
console.log(person1 === person2);
assert.equal(person1, person2);

//Look at this now
assert.deepEqual(person1, person2)