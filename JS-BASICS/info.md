# 2nd Lec
1) Data types in JS
   - In any programming language there are Primitive Data Types that are defined by the language itself. In JS there are currently 7 primitive data types.
      1) string
      2) number
      3) boolean
      4) null
      5) undefined
      6) Symbol
      7) big int
2) Everything in JS is an object (key value pairs) except for the primitive data types. Objects are muttuable but primitive data types are not. 
3) You can check the type of object with the typeof operator.
4) There are various operations that you can perform in JS on various DataTypes like.
   1) Addition
   2) Subtratction
   3) Multiplication
   4) division etc.
5) Type coercion - When you perform an operation on data type that is not permitted JS converts that data to a data type on which that operation is possible whenever possible.
eg - "2" - "2" outputs 0
   - 2 + "2" outputs "22" //string
   - 2 == "2" outputs true

# 3rd lec
1) Non primitive data types - These are data types that are not primitive i nature. They are user defined which means you will design these data types for your own use.
eg 
1) Array - Imagine That you want to store 10 data which are related for example list of name. What you can do is create 10 different variables and store it but thats no good it will increase the code unredability so there must be a better way and that is used to store variables.
syntax - let a = ["ram","shubh"...] 
Now elements in array can be refrenced using positions or order in which its placed and the position start with 0.
so a[0] is ram
a[1] is shubh

2) Javascript literal (Objects) - In js every no primitive data type is an object even arrays function etc;
Objects in Javascript are key value pairs which give info about the data type and the keys are comma seperated
syntax - let a ={
   prop1:"value1",
   prop2:23,
   prop3:{new:"object"},
   prop4:[1,2]
}
 
3) JS functions - In js To improve code redability and reusability also to improve modularity what we can do is 