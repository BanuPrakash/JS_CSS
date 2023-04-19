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

Task:
try filter, map and reduce from endpoints 
https://dummyjson.com/

Task:

get sum of all mobiles from product[]
----------------------------


function add(x, y) {
    return x + y;
}

// HOF
function adder(base) {
    return function(value) {
        return base + value;
    }
}

let fiveAdder = adder(5);

fiveAdder(2); // 7 
fiveAdder(4);  // 9

 memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

 getProduct(4); --> API call to server --> Server hits DB --> results converted to representation {JSON / XML} --> send JSON to client

 getProduct(4); --> get from cache

===================================================

ECMA 2015 / ES 6 JavaScript version features
Pre-processor / Transpile / Transcompiler
Polyfill:  A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support

ES 6 ==> babel / tracuer ==>  ES 5
core-js or bluebird ...

=========
ECMA 2015 features:
1) block level scope
let and const instead of var // let and const are not hoisted

var a = 20;
var b = 15;
function add(x, y) {
    var result = x + y;
    c = 100;
    if(a > b) {
        let data = a + b;
    }
    console.log(data, c);
    return result;
}
add(10,30);
console.log(data, c, a, b);
---
// IIFE
if(a > b) {
         (
                var data = a + b;
                 console.log(data, c);
        )();
    }
    console.log(data, c);

2) Arrow functions

```
function filter(elems, predicate) {
    var result = [];
    forEach(elems, function(e) {
        if(predicate(e)) {
            result.push(e);
        }
    });
    return result;
}

USing Arrow:

function filter(elems, predicate) {
    var result = [];
    forEach(elems, (e) => {
        if(predicate(e)) {
            result.push(e);
        }
    });
    return result;
}
var mobiles = filter(products, p => p.category === 'mobile');

```

3) Destructuring

var colors = ["red", "green", "blue", "orange"];
// old way colors[0], colors[1]
var [r,g] = colors;

var [r,g, ...others] = colors;

var employee  = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "company": "Adobe"
};

let {name, email} = employee;

console.log(name, email);

// console.log(employee.name, employee.email);

4) clone


var employee  = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "company": "Adobe"
};

var ref = employee;
ref.username = "Brad"; // reference --> pointer

employee.username will also be "Brad";

let empClone = {...employee};

var data = [7,3,21,11];

var dataCpy = [...data];

5) Promise is for any async functions
    make a call to promise aPI ==> status to pending
    based on operations within the function => can return fulfilled / rejected

    getUsers();

6) async and await ==> simplfies using Promise api
 converts async block to sync block of code
 Promise --> Callback hell

 getConnection().then(connetion => {
    getProjects(connection).then(project => {
        getEmployees(project).then(employees => {
            getAddress(employees).then(address => {
                /....
            })
        });
    })
 })

 --
 fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(data => console.log(data));


7) Generators
are functions which return series of data 

function* name() {}

8) class 

``
class Product {
    name; // state --> instance var
    price; // state --> instance var
    constructor(name = "", price = 0.0) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

var p1 = new Product("T", 4545.22);
p1.getName();
p1.name; // valid

var p2 = new Product(); // valid

var p3 = new Product("iPhone"); // valid
```
# for private variable

class Rectangle {
    #width;
    #breadth;
    constructor(w, b) {
        this.#width = w;
        this.#breadth = b;
    }

    static equals(r1, r2) {
        return ...
    }

    // getter property
    get width() {
        return this.#width;
    }

// setter property
    set width(w) {
        this.#width = w;
    }
}

var r1 = new Rectangle(4,5);
var wd = r1.width; // getter

r1.width = 52; //setter

Rectangle.equals(r1, r2);

====

9) ES 6 modules

lib.js
```
export default function forEach(elems, action) {
///
}

export function filter(elems, predicate) {
    //
}
// private to module
function map(elems, transformFn) {
 //
}
```

other.js
```
    import forEach, {filter} from './lib';

    forEach(..)
    filter(...);
```

Quiz ==> convert to use ES 6 features {class, arrow}, HOF
Question ==> difficultyLevel ==> filter

-------

Day 3

Recap: HOF, Closure, ECMAScript 2016 / ES 6
* let and const
* arrow
* Destructuring
* clone
* Promise API
* async await ==> to avoid nested callback issues
* Generator
* class ==> constructor, methods , getters , setters and private members [#]
* ES 6 modules {export and import}
* template string and new String literal

var name = "Peter";
var age = 24;

var data = `
    This is first line  
    This is My Data
    Name: ${name} and age: ${age}
`;

data = "This is first line \n" + "This is My data \n" + "Name : " + name + " Age :" + age;

========================================

Regular expression

var re = //
OR
var re = new RegEx("");

/abc/.test("abcde"); ==> true
/abc/.test("abxcde"); ==> false

Set of Characters
/[0123456789]/.test("JS in 1992"); // true
/[0-9]/.test("JS in 1992"); // true


\d Any Digit
\w alpha-numeric [ word]
\s Space, tab, newline
\D, \W, \S ==> not of
. any character

+ one or more occurence
* zero or more
? zero or one

/\d{1,2}-(\d{1,2} | (A_Za-z){3})-\d{4} \d{1,2}:\d{2}/.text("18-2-2022 5:30"); // true


Capture Groups

1.
const date = "Hire date is 12-10-2009";

const regex = /\d{2}-\d{2}-\d{4}/g

const result = regex.exec(date);

2. 
const regex = /\d{2}-([A-Z]{3}||[0-9]{1,2})-\d{4}/


const regex = /(\d{2})-(\d{2})-(\d{4})/g
const result = regex.exec(date);

result ==>
'12-10-2009', '12', '10', '2009', index: 13, input: 'Hire date is 12-10-2009', groups: undefined]

3. 
const date = "Hire date is 12-10-2009";
const regex = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/g
<!-- const result = regex.exec(date); -->

const {groups:{day,month, year}} = regex.exec(date); // date.match(regex)

console.log(day , month, year);


4. const date = "12-APR-2009";
const regex = /\d{2}-([A-Z]{3}||[0-9]{1,2})-\d{4}/

console.log(regex.test(date));

---

Look Behind: ?<=

const date = "Hire date is 12-10-2009";

const regex = /(?<=Hire date is).*/g

const result = regex.exec(date);

Look Ahead: ?=

const date = "Hire date is 12-10-2009";

const regex = /.*(?=12-10-2009)/g

------

emailregEx = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9.-]{2,}\.(com|edu|in)$/

/^(?=[A-Za-z0-9@.-]{6,150})[A-Za-z0-9._]{3,}@[A-Za-z0-9.-]{2,}\.(com|edu|in)$/

===============================

DOM ==> Document Object model
(XML / HTML) ==> Object - cross platform, language independent

1)
<h1 id="heading">Introduction to DOM</h1>

document.getElementById("heading").textContent

2) var paras = document.getElementsByTagName("p");
paras.length 
paras[0].textContent

3) Manipulating Image
var images =  document.getElementsByTagName("img");
images[0].src

images[0].src = "./images_dom/dog.jpg"

4)
var elems = document.getElementsByClassName("programming");
elems[0].textContent

5) querySelector() and  querySelectorAll()
use this to get by "tag", "class", "id", "sub selector"

document.querySelector("#planets"); // by id #

document.querySelector("#planets li:nth-child(2)");

document.querySelectorAll(".programming"); // by class .

document.querySelector("p"); // by tag

==============================================

DOM creation:

var elem = document.querySelector("#planets")
var newPlanet = document.createElement("li");
newPlanet.textContent = "Pluto";
// parentElem.append(childElem);
elem.append(newPlanet);

// createElement tr, createElement td

Task:

use Fetch API to get data from 
"https://jsonplaceholder.typicode.com/photos"

and build UI using DOM --> DIV or table
--------------------

Events and EventHandling

* An event is a signal that something happend

* all DOM nodes generate events

Common events:
* Mouse events: mouseover, mousedown, mouseup, mousemove
* keyboard event: keydown, keyup

* click , change ==> high level events
* Form events: submit, focus, blur

* DOMContentLoaded ==> DOM is fully built

Event Handler --> react on events --> handler function
* Register handler
  element.addEventListener(event, handlerFn);

* Remove handler
    element.removeEventListener(event, handlerFn);


===========================

<input type="text" required>
<input type="email" required>
<input type="text" minlength="6">
<input type="text" pattern="[a-z]{3,5}">
<input type="number" min="1" max="100">

Form Constraint Validation API:
properties:
validity:
validationMessage
patternMismatch
tooLong
typeMismatch
...

methods:
checkValidity()
reportValidity()
setCustomValidity(message)

```
 <form>
        <input type="t1" pattern="[0-9]{4}" value="1234" />
        <input type="t2" pattern="[0-9]{4}" value="ABCD" />
        <button type="submit">submit</button>
 </form>

//document.getElementById("t1").validity.patternMismatch ==> false
// document.getElementById("t2").validity.patternMismatch ==> true

 <input type="number" id="t1" max="10" value="2" />
//document.getElementById("t2").validity.rangeOverflow

Try: type="email"
document.getElementById("t2").validity.typeMismatch
```








