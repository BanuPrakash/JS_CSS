# JavaScript and CSS

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

GitHub:
https://github.com/BanuPrakash/JS_CSS

-----------

Softwares Required: Visual Studio Code, Chrome Web Browser and NodeJS Latest LTS

===============

JavaScript
Loosely typed, dynamically typed language

// implicit variable declaration
name = "Roger"; // string
name.toUpperCase(); // valid

age = 24; // number
age++;

completed = true; // boolean

name = 23; // valid

In JS we use "var" keyword to decalre a variable

var name = "George"; 
var age = 24;


JavaScript functions:

function add(x, y) {
    console.log(x + y);
}

var result = add(4,5); // result ==> undefined

function add(x, y) {
    return x + y;
}

var result = add(4,5); // result ==> 9

----

function add(x, y) {
    return 
        x + y;
}
var result = add(4,5); // result ==> undefined
because of they way AST created by engine. in "JS" semi-colon is optinal

// valid syntax
var add = function (x,y) {
    return x + y;
}

=======

function doTask(result) {
    // some task here with result
}

function add(x, y, callback) {
    var result = x + y;
    callback(result);
}

add(4, 5, doTask); // valid

==================================

JS creation Context and execution context:

file.js

var a = 20;

var b = 15;

function add(x, y) {
    var result = x + y;
    var data;
    c = 100;
    if(a > b) {
        data = a + b;
    }
    console.log(data, c);
    return result;
}

add(10,30);
console.log(data, c, a, b);







