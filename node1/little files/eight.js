console.log('first')
setTimeout(() => {
    console.log('second')
}, 0);
console.log('third')

// result ---->
// first
// third
// second
// -------

setInterval(() => {
    console.log('hello world')
}, 2000);
console.log('i will run first')

// i will run first
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world
// hello world

// note also that even .listen() is async