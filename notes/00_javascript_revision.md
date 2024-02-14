## JavaScript

1. Front end
2. Back end
3. Mobile
4. Desktop

## Front end java script
1. Angular
2. React
3. Vue


JQuery: It is the popular library of JS. Simplifies HTML Dom manupulation , event handling, network request and many more.

Vanilla JS: java script without any libraries.

## Backend
  Node JS

# Mobile
    React native
    native script

# JS feature:
    1. Js is an interpreted language (executed without compiling)
    2. JS is dynamically and weakly typed

    var a = 10;  //js  
    typeof a;
    a = "apple";
    typeof a


    var b;

    int a = 10;  //c prog/java
    a = "apple";

    int b;

## diff between var and let.
        //var  => function scope
        //let  => block scope

        function foo() {
            let a = 10; //local scope
            var b = 20; //function scope
            c = 30; //global variable
        }

        function foo1() {
        if (true) {
            let a = 100;
            var b = 200;
        }
        //console.log("a=", a);
        console.log("b=", b);
        }

        //console.log(b); //scope of b is function scope
        foo1();


## datatype
### Number
    let natural = 100;
    let decimal = 100.1;
    let hex = 0XA;
    let binary = 0b111;
    let octal = 0o73;
    let tenLakhs = 10e6;

    console.log(natural, decimal, hex, binary, octal, tenLakhs); // 100 100.1 0xA 0b111 0o73 10000000
    console.log(typeof natural,typeof  decimal,typeof  hex,typeof  binary, typeof octal, typeof tenLakhs); // number number number number number number

    let x = natural * 'a';
    console.log(x, typeof x); //NaN number

    let y = natural/0;
    console.log(y, typeof y); //Infinity number

## String
    let singleQuote = 'stirng';
    let doubleQoute = "string";
    let backTick = `string`;  //below esc keypad

    let name = "John";
    let age = 30;
    let str =`Hi, I am ${name} and my age is ${age}`;
    let str1 = "Hi, I am"+name+" and my age is "+age;
    console.log(str);

## Boolean
        true and false are two value.
        falsely value
            false
            0
            0n
            '', "", ``
            null
            NaN
            undefined

    let a = true;
    console.log(a, typeof a);

    function foo(){
        if(-1){
            console.log('truely value');
        }else{
            console.log('falsely value')
        }
    }

    foo();

## undefined
    let a;
    console.log(a, typeof a); //undefined undefined
    value of a and type of a is undefined

## Object
   JS objects are different compare to other language(c++, java, dot.net)
   js object are assiged by reference
        let a = 10;
        let b =  [10,20,390];
        console.log(a,b); //10 [ 10, 20, 390 ]

        function foo1(a){ 
        a = 100;
        }

        function foo2(a){ 
            a.push(10);
            a.push(20)
        }

        foo1(a); //pass by value
        foo2(b); //pass by reference, bcz b is object

        console.log(a,b); //10 [ 10, 20, 390, 10, 20 ]
------------------------------------------------------------------
    let person = {
            name: "Jack", age:35
        };

    //access to properties
    person.name
    person['name']

    ## Null is an object
        let a = null;
        console.log(typeof a); //object

---------------------------------------------------------------
    let person = {name:'jacob', age:25, city:'new york'};
    console.log(person, typeof person); //{ name: 'jacob', age: 25, city: 'new york' } object

    //person is an object
    //name, age, and city are properties of the object

    //access the propertie of an object, we use dot notation
    console.log(person.name, person.age, person.city); //jacob 25 new york

    //access the property of an object, we use bracket notation
    console.log(person['name']); //jacob


    let math = {"+": 'plus', "-":"minus", '*':"mupltiply", '/':"divide"};
    //console.log(math."+"); //not possible to call property of + using dot operator
    console.log(math["+"]);


## Bigint
        //bigint


        let x = 12345678912345;
        console.log(x); // 12345678912345

        let y =  12345678912345678912;
        console.log(y); //12345678912345680000

        let z = 123456789123456789123456789n;
        console.log(z); //123456789123456789123456789n
        console.log(typeof z); //bigint

        let p = 1n;
        let q  = p + BigInt(2);
        console.log(q, typeof q);


## Symbol
    let a = Symbol(10);
    let b = Symbol(10);
    console.log(a, typeof a, a==b);


## function

    function add(a, b){
    console.log('result: ', (a+b))
    }


    const add1 = function(a,b){
    console.log('result: ', (a+b))
    }


    let add2 = (a,b) => {
    console.log('result: ', (a+b));
    }

    add(10,20);
    add1(100,200);
    add2(200,300);




## ES6 feature
### export and import
    note: add the property type:'module' in package.json
#### example 1
      one.js
      -------
      export  let name =  'jack';

      index.js
      --------
      import {name} from './one.js';

      note: In react, we will not give the extension.

#### example 2
    In one js file, only one default value is allowed
    one.js
    ------
    export default "jack";


    index.js
    -------
    import anyName from './one.js';
    console.log(anyName); //jack
    note: to import default value, don't use curly braces.


#### example 3
    one.js
    -----
    export default "John";
    export let age = 30;
    export let nationality = "Indian";

    index.js
    --------
    import name1, {age, nationality as citizen} from "./one.js";
    console.log(anyName, age, citizen );

#### example 4
     one.js
     -----
    export default "John";
    export let age = 30;
    export let nationality = "Indian";


    index.js
    --------
    import * as person from "./one.js";

    console.log(person.default, person.age, person.nationality );



### Passing function as value in js
    function action1(){
    console.log('action1 performed');
    }

    let action2 = function(){
    console.log('action2 performed');
    }

    let action3 = ()=> {
    console.log('action3 performed');
    }

    setTimeout(action1, 1000);
    setTimeout(action2, 1000);
    setTimeout(action3, 1000);
    setTimeout(function(){
        console.log('action4 performed');
    }, 2000);

    setTimeout(()=>{
        console.log('action5 performed');
    },3000);
-------------------------------------------------------------------------------
    function greeter(a) {
        a();
    }

    function greet() {
        console.log("Good afternoon!!!");
    }

    greeter(greet); //passing function as a value

    greeter(function () {
        console.log("Good evening!!!");
    });

    greeter(() => {
        console.log("good day!!!");
    });

--------------------------------------------------------------
    //rule of arrow operator
    //function to calcualte square or number
    function square(num){
        return num*num;
    }

    let square1 = function(num){
        return num*num;
    }

    //let square2 = (num) => {return num*num};
    //let square2 = num => {return num*num};
    let square2 = num => num*num;

    console.log(square(10));
    console.log(square1(10));
    console.log(square2(10));

    //rule no 1: if there is only one parameter, you can remove the parenthesis

    // rule no 2: if there is only one statement, you can remove the curly braces

### //destructuring of an object

    let person = {name:'jack', age:20};

    function display({name,age}){
    console.log('Name: ',name);
    console.log('Age: ', age);
    }

    display(person);
    //let name = person.name;
    //let age = person.age;

    let {name,age} = person;
    console.log(name, age);

-------------------------------------------------------
    let person = { name: "Jack", age: 22 };

    //let name = person.name;
    //let age = person.age;

    //let {name,age} = person;

    //console.log(name,age);

    function foo1(name, age) {
    console.log(name, age);
    }

    function foo2(person) {
    console.log(person.name, person.age);
    }

    function foo3({ name, age }) {
    console.log(name, age);
    }

    foo1(person.name, person.age);
    foo3(person);
