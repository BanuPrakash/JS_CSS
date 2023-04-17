var a = 20;
var b = 15;
function add(x, y) {
    var result = x + y;
    console.log(data); //undefined ==> data is hoisted to function scope
    c = 100; // hoisted to global scope
    if (a > b) {
        let data; // let data; will not hoist
        data = a + b;
    }
    console.log(data, c);
    return result;
}

add(10, 30);
//console.log(data, c, a, b);