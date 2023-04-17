console.log("Hello!!!");

setInterval(function timed() {
    console.log("Timed!!!");
 }, 1000); // for every 1 sec call timed()

// Promise API for async operations
// pending
// resolve or reject
Promise.resolve().then(function one() {
    console.log("p1");
});

Promise.resolve().then(function two() {
    console.log("p2");
});


console.log("Bye!!!");

