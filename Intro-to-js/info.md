# Introduction to javascript
- Defination of JS according to MDN - JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language.
- Javascript is also known as the language of the web but it is not limited to web only. Using js you can try many technologies like mobile, machine learning, blockchain, IOT.
- Its ranked first in stack overflow 2019 survey for popularity among developers.
- JS made web development better as it added interactivity and stunning effects to website
- There are so many options to choose when working with js. Like react, angular, vue, express, koa, etc etc.
- Its powered by npm.
- Its evolving languages as the ECMAScript community is making improvements in the langauge each year.

# How does JS works
JS is run by javascript engines in the browser.
- Chrome uses v8
- Bing uses chakra
- Firefox uses SpiderMonkey
It will read the code line by line and check for syntax(code) errors if it finds any it will throw an error when it runs. Else it will compile into machine understandable code and execute it.

# JS  Basic
## Variables in JS
   - JS like other programmimg langauges has the concept of variables. Variables in JS are used to store data so that we reference it later for our use.
   - Since instructions in programing are executed one line at a time. So we need to store in first so that we can reference it on another line and use it.
   - Example if we fetch a data from a server and we want to perform some mathematical operations on the data what we will do is store it in a variable so that we can reference it after fetching and use it however we like

3 ways to make variables 
   1) var - Non constant variable declartion
   ```javascript 
   var a = 23; //assignementof variable a
   a = 2; // allowed
   ```
   2) let - non constant es6 variable declaration
   ```javascript 
   let b = 23; //assignment of variable b
   b = 2; //allowed
   ```

   1) const - constant value es6 variable declaration
   ```javascript 
   const c = 23; // assignment of variable c
   c = 2; // error
   ```


## Difference between var & let
1) Hoisting - JS is executed in 2 phases. Creataion phase and execution phase. In creating phase your file is scanned and instruction which require memory allocation are allocated memory and in execution the memory is filled with value.
So therefore when you do this

```javascript
console.log(a) //undefined 
var a;
//it still works becuase of hositing because the variable a is already initialised in phase 1

//but for let it doesnt work it still allocates memory but it doesnt initialise the memory
console.log(a) //error
let a;
```

2) Redeclaration - we can redeclare variables in var with same name but not in let
eg -
```javascript
var a =23;
var a = 24; //allowed
let b = 23;
let b = 24; //error
```
3) Scope - We will learn after functions
   
4) Global properties - same we will learn after functions


## Scope 
In JS you can create another scope using the {}. Imagine scopes as bunch of boxes, like if we have box A and inside it is another box B then B has access to all the things in A but A does not have access to the contents of B as the things are inside B container or inside physical walls of B.
eg -
```javascript
let a = "ram"
{
   let b = "shubh";
   console.log(a,b); "ram","shubh"
}

console.log(a) //ram
console.log(b) // error as b is not in this scope
```

As we can see the outer scope has no access to the inner scope but the inner scope has access to the outer scope variables and stuff.

[Go to lecture Struture](../Struture.md)                                   

[Next Lecture](../Js-Basics/info.md)