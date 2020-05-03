# Introduction to javascript
- Defination of JS according to MDN - JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. It is a multi-paradigm language.
- Javascript is also known as the language of the web but it is not limited to web only. Using js you can try many technologies like mobile, machine learning, blockchain, IOT.
- Its ranked first in stack overflow 2019 survey for popularity among developers.
- JS made web development better as it added interactivity and stunning effects to website
- There ae so many options to choose when workin with js. Like react, angular, vue, express, koa, etc etc.
- Its powered by npm.
- Its evolving languages as the ECMAScript community is making improvements in the langauge each year.

# JS  Basics
1) Variables in JS
   - JS like other programmimg langauges has the concept of variables. Variables in JS are used to store data for refrencing it later for our use.
   - Example if we fetch a data from a server and we want to perform some mathematical operations on the data what we will do is store it in a variable so that we can reference it after fetching and use it however we like
2) Scope - In JS you can create another scope using the {} imagine scopes as bunch of boxes inside other like if we have a box A and inside is another box B then B has access to all the things in A but A does npot have access to the contents of B as its inside B container or inside physical walls of B. Same way we can create scopes eg
eg -
let a = "ram"
{
   let b = "shubh";
   console.log(a,b); "ram","shubh"
}

console.log(a) //ram
console.log(b) // error
As we can see the outer scope has no access to the inner scope but the inner scope has access to the outer scope variables and stuff.
