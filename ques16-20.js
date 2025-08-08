16.Create variables for isRaining (true) and temperature (65). Write a statement that checks if 
it's not raining AND the temperature is above 60. 

ANS:
let Raining = true;
let temperature = 65;
if (Raining==false && temperature > 60) {
  console.log("not raining");
} else {
  console.log("raining.");
}

17. What's the difference between null and undefined? Create variables to demonstrate each. 
  null means no value when we assign null means we dont have to asssign any value .
undefined  means a variable is declared but value has not been assigned.
ANS:let a = null;        
  let b;           

18. What will these comparisons return? 
javascript 
console.log(null == undefined); 
console.log(null === undefined); 
console.log(0 == false); 
console.log(0 === false); 
ANS:
19. Create a variable called userInput and assign it undefined. Then check its type using typeof. 
What do you get? 
  ANS:let userInput;
console.log(typeof userInput);

20. Which of these values are "truthy" and which are "falsy"? Test each one: 
javascript 
let values = [0, "", "hello", null, undefined, false, true, 1, -1]; 
ANS: