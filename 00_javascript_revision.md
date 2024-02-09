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










