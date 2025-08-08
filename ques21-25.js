21.Create a simple calculator. Store two numbers and perform all basic operations (+, -, *, /, %). 
Display each result. 
ANS:
let num1 = 12;
let num2 = 5;
console.log("Addition", num1 + num2);
console.log("Subtraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Division", num1 / num2);
console.log("Modulus", num1 % num2);

22. What's the difference between ++count and count++? Write code to demonstrate. 
ANS: ++count is preincrement first it increase the value then returns it.
count++ is postincrement first it returns value then increase it.
let count = 5;
console.log(++count); 
console.log(count);   
count=5;
console.log(count++); 
console.log(count);   

23. Calculate compound interest: principal = $1000, rate = 5%, time = 2 years. Use the 
formula: amount = principal * (1 + rate/100)^time 
ANS:
let principal=1000;
let rate=5;
let time=2;

let amount=principal * Math.pow(1 + rate/100,time) ;
let compound=amount-principal;
console.log(amount);
console.log("Compound Interest:", compound);
24. What happens with these operations? Explain the results: 
javascript 
console.log(10 + "5"); 
console.log(10 - "5"); 
console.log("10" * "2"); 
ANS:
in first the string will concatenate .
in second it will return the no 5 because in subtract it is string not no so it will give the value after subractionn sign  
in third it will do multiplication only
25. Create a tip calculator. Given a bill amount, calculate 15%, 18%, and 20% tips.
 let bill=500;
 let tip15 =500*0.15;
 let tip18 =500*0.18;
 let tip20=500*0.20;
 console.log(tip15);
 console.log(tip18);
 console.log(tip20);