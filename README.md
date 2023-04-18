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

===============

MacroTaskQueue ==> Blocking Queue ==> ArrayBlockingQueue

class TimerThread extends Thread {
    TimeThread(MacroTaskQueue queue, Method m, int duration) {
        //
    }
    void run() {
        while(true) {
            Thread.sleep(duration);
            queue.push(m);
        }
    }
}

Event loop psuedocode

class EventLoop extends Thread {

    public void run() {
        while(shouldContinue() && isStackEmpty()) {
            // pop into microTask queue and push method to stack
            // pop into macroTask queue and push method to stack
        }
    }
}

====

MacroTask Queue: timer, OS callbacks {file close, socket close, data read in stream based operation}

MicroTask: Promise, WebWorker, programatically add to microtask
window.queueMicrotask(function test() {
   console.log("Done!!!"); 
});

https://www.jsv9000.app/

Check link from "https://www.jsv9000.app/"
http://latentflip.com/loupe/

```
console.log("Hello!!!");

setTimeout(function timed() {
    console.log("Timed 1!!!");
 }, 0); // for every 1 sec call timed()

setTimeout(function timed() {
    console.log("Timed 2!!!");
 }, 0); // for every 1 sec call timed()
 
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
```

JS Memory Model

=====================================

OOP with JS:

Different ways of creating objects in JS:

1) Object

var obj = new Object();
// adding state
obj.x = 10; // period to add field
obj.y= 15;
obj["z"] = 30; // adding using [] to add field

// adding behavior
obj.doTask = function() {

}


Object is an instanceof "Function".
even function is an instanceof "Function"
function add(x,y) { return x + y; }
is same as:
var add = new Function("x", "y" , "return x + y");

add(3,4);

2) function constructor
"use strict" doesn't pass implicit "this" to function
"use strict" --> no global hoisting

```
"use strict";
function Product(name, price) {
    this.name = name;
    this.price = price;
}

var p1 = new Product("iPhone", 89000.00);
var p2 = new Product("Samsung", 79000.00);

Product("LG AC", 65000.00); // fails with "use strict" else "this" --> window
```

Adding behaviour to function constructor
2.1) object owned instance method
function Product(name, price) {
    this.name = name;
    this.price = price;

    // every instance of function constructor has a copy of instance method
    // p1 and p2 contains different copies in memory
    this.getName = function() {
        return this.name;
    }

    this.getPrice = function() {
        return this.price;
    }
}

var p1 = new Product("iPhone", 89000.00);
var p2 = new Product("Samsung", 79000.00);

p1.getName(); 
p2.getName();

2.2) class owned instance methods
function Product(name, price) {
    this.name = name;
    this.price = price;
}
// adding behaviour
Product.prototype.getName = function() {
    return this.name;
}

// same as static behaviour ==> Class owned and not object owned
// can't use "this" inside getInfo()
Product.getInfo = function() {
    console.log("This is Product!!!");
}

Product.getInfo();
// only one place [function creation context ] we have getName() and not seperate copies of getName() for eaconh method


Addy Osmani ==> Constructor Pattern


Rectangle constructor ==> width and breadth
instance methods ==> getArea()
static method ==> equals

r1.getArea();
if(Reactangle.equals(r1, r2)) {
    // 
}


Solution:

```
    function Rectangle(w, b) {
        this.width = w;
        this.breadth = b;
    }

    Rectangle.prototype.getArea = function() {
        return this.width * this.breadth;
    }

    Rectangle.equals = function(r1, r2) {
        if(r1.width === r2.width && r1.height === r2.heigth) {
            return true;
        }
        return false;
    }

var r1 = new Rectangle(3,4);
var r2 = new Rectangle(4,5);

if(Rectangle(r1, r2)) {
    ...
}

```


3) JSON ==> JavaScript Object Notation for Singleton instance
[] ==> array
var data = {}; // object, [old def: Jagged Array]
key/value pair where key is always a string and value can be: number, string, boolean, object, array, function, undefined

```
var user = {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
                }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
};

user.address.city;
user.company.name;

``

JSON with behaviour:

```

window.name = "Sample JS";

var user = {
    "name": "Peter",
    "email": "peter@adobe.com",
    getData: function() {
        return this.name + ", " + this.email
    }
}

user.getData(); // works ==> getData(user)

var fn = user.getData; // ?

console.log(fn()); // executes in "window" context ==> window.name and window.email

var fn2 = user.getData.bind(user);
```
fn2 is 
{
        return this.name + ", " + this.email
}
```
var data = user.getData(); 
```
    data is
    Peter , peter@adobe.com

```

console.log(fn2());

function task(fn) {
    setTimeout(function(fn) {
            fn();
    }, 1000);
}

task(user.getData.bind(user));

```

object.behaviour(arguments);

JS builtin methods: call and apply

```
function update(name) {
    this.name = name;
}

var user = {
    "name": "Peter",
    "email": "peter@adobe.com"
}

var product = {
    name: "iPhone",
    price: 990000.00
}
// method.invoke(context, arg); --> Java ==> Reflection API

update.call(product, "One Plus Nord");

update.call(user, "Amy");

OR

update.apply(user, ["Amy"]);

```

Task Online exam:

```
Question:
    text, options[], answer
    isCorrect method

Quiz:
    question[],
    score,
    index
    nextQuestion() ==> displyScore() if all questions attempted,
    guess(answer)

```

Day 2

JS Engine, Stack, Heap, Callback Queues {Micro and MacroTask}, Event loop, WebApi {threads, apis, ...}

JS variables "var" and implict variable without "var"; Hoisting {function and global level}

Creation Context and Execution context

Objects: Object, function constructor and JSON {}

state and behaviour. call, apply and bind methods

-----
Functional style of Programming

HOF --> High Order functions
* Functions which accept function as arguments
* Functions which return a function

treat function as first-class members 

Using HOF we can implment OCP --> Open for extension and closed for change [SOLID]

var data = [5,22, 63, 12, 3];

forEach(data, console.log);
forEach(data, alert);

HOF: filter, map, reduce, ...

filter ==> subset [ input is n output can n - x]
map ==> transform [input is n out is transformed elements of "n"]
reduce ==> aggregate [ sum(), max(), avg(), count()]


function card(p) {
    return `
        <div class="card"> 
            Product Name : ${p.name} <br />
            Price : ${p.price}
        </div>

    `
}

====

Array has builtin HOF --> map, filter, reduce, ..