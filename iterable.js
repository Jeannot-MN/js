const myObject = {
    *[Symbol.iterator]() {
        yield "Hello";
        yield "World";
    }
}

for (let val of myObject) {
    console.log(val);
}