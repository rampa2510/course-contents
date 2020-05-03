# Control strutures
Control strutures are statements or instructions in programming language that decide the flow of execution of a program. These statements will decide how a program runs depending on the condition we give them. The control strutures are 
1) if else (Conditional logic)
This is the most basic control struture in JS. Imagine if we want to run a certain part of our code if a certain condition is met and if a certaain part is not met then run another part of code. We ca accomplish this task using if else statements
Syntax - 
```javascript
let a = true;
let b = 1;
if(a){
  b = 2; // b will be assigned 2
}

if (b===2){
  b = 1 // b is equal to 2 therfore b = 1 now
}else{
  b = 2
}

if(b===0){
  b = 3
}else{
  b = 0 // b will be assigned 0
}

if(b===1){
  a = true;
}else if(b===0){
  a = false; // a will be assigned false
}else{
  a = true;
}
console.log(a,b)
```
2) Loops 
We can repeat instrution or code blocks until a certain condition is met. The way we do it is using loops. The 2 loops in JS is 
  1) for loop - The for loop is a looping statement which executes a certain code block until it statisfies a condition. Syntax - 
  ```javascript
  // for(variable initialization; condition; instrution to execute after each iteration)
  for(let i = 0;i<10;i++){
    console.log("a") // outputs a 10 times
  }
  ```
  2) while loop - The while loop is a looping statement which executes a code block till the condition specified becomes false. Syntax - 
  ```javascript
  // while(condition)
  while(true){ // this is infinite loop since true will never become false to break out we use break statement
    //do something
    if(condition){
      break;
    }
  }
  ```
  So if you see both are very similiar in nature you might be confused when should you use which one. If you know how many times the code block should be executed use for loop but if you don't know and rely on a certain condition that will happen when you execute the code block and for that condition you want to terminate then use while. Eaxample I know that I want to execute a code block 10 times I will use for loop. But I have to keep executing this block until a condition is met then I will use while loop.
