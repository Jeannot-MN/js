var a = 12;
let age = 15;

(function() {
    let a = 14;
    console.log(a);
    console.log(globalThis.a);
})();