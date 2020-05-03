ECMAScript 2015 or ES2015 is a significant update to JavaScript programming language. It is the first major update to the language since ES5 which was standardized in 2009. Therefore, ES2015 is often called ES6.

# Some important changes
1) Intro to let and const - Introduction to new ways of defining variables brought stability to variable declaration.

2) Template Literals - Template literals enabled you to do complex stringmanipulation easily. Prior to this we had to use string concatenation for using custom variables but now we dont need them. We use backticks(`) for this
eg - let name = 'ram';
console.log(`${name} is a bad boy`) // outputs - ram is a bad boy

3) Default parameter - If in a function we need to pass a parameter and most of the times we use a parameter more than others what we can do is make it the default parameter what this will enable is that when we call the function next time without any parameter the default parameter will be applied.
eg - function nameFun(name='ram'){
  console.log(name);
}
console.log(nameFun()) //ram
console.log(nameFun('shubh')) //shubh

4) Rest parameters - imagine if we create a function but don't know how many parameter it will take we want to take indefinite amount of parameters in the function here we can use the rest parameter represented by 3 dots (...)
so now when we define a function this way
function rf(a,b,...args){
  console.log(a,b,args);
}
and we call it this way 
rf(1,2,3,4,5,6) // 1,2,[3,4,5,6]
so here we can see that the args variable stores a array holding the other parameters

5) Destruturing - Destructuring is used to access properties of objects withoud using slicing for example if i want to transfer all elements of a array to another pre existing array I can use destructuring
eg - let a = [1,2]
let b = [3,4,...a]
console.log(b) // [3,4,1,2]
same for objects eg - 
let d = {
  key:"value"
}
let e = {...d}
console.oog(e) {key:"value"}

 