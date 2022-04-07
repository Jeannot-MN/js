//The const keyword
// a will always point to the same memory location (same object in memory), but the content of that object can change
const person = {
    name: 'Homer',
    surname: 'Simpson'
};
console.log(person.name);

//It is possible
person.name = 'Bart'
console.log(person.name);


//But this imppossible because here we are trying to change what a is pointing to
person = {
    name: 'John',
    surname: 'Doe'
};
/* 
const creates immutable variable bindings: Each variable must be initialized immediately
and we can’t assign a different value later. However, the value itself may be mutable
and we may be able to change its contents. In other words: const does not make values
immutable.
*/