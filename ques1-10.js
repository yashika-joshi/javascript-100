Q1: Create three variables using let, const, and var to store your name, age, and favorite color. 
What's the difference between these three keywords? 
/ ANS:  let name ="yashika";
const age = 20;
var color ="sky blue";
diff btw let const var => let and var are used for variables but const is used for constant whose value is fixed 
var is old and is replaced by let .
var a = 5;
var a = 10; this will run 

let b = 5;
let b = 10; not run because b was already defined.
 


Q2:Try to reassign a value to a const variable. What happens and why? 

ANS: const marks = 19;
console.log(" marks:", marks);
marks = 20; 
console.log("marks:", marks);
because in const variables cannot be reassigned once initialized.


Q3:Create a variable called temperature and assign it the value 75. Then update it to 80. Which 
variable keyword should you use and why?
ANS:
let temp=75;
temp=80;
console.log(temp);

let variabe will be used here because we have to update the value.




Q4: What will this code output and why? 
let message = "Hello"; 
let message = "Hi"; 
console.log(message);

ANS:
let message = "Hello"; 
let message= "Hi"; 
console.log(message);

errror... will come because we cannot redeclare the same variable .


Q5:Fix this code to work properly: 
const favoriteFood = "pizza"; 
favoriteFood = "burgers"; 
console.log(favoriteFood);

ANS:let  favoriteFood = "pizza"; 
favoriteFood = "burgers"; 
console.log(favoriteFood);



Q6: Create variables for the price of a coffee ($4.50) and a muffin ($3.25). Calculate the total and 
store it in a new variable. What data type is the result?
 
                                                                  
let coffee = 4.50;
let muffin = 3.25;
let total = coffee + muffin;
console.log("Total Price:", total);         
  
Q7.What's the difference between 5 and "5"? Create variables for each and use typeof to check 
their types. 

let num = 5;
let str = "5";
console.log(typeof num); 
console.log(typeof str); 

8. Create a variable called score with the value 0. Add 10 to it, then multiply by 2. What's the 
final value? 

let score = 0;
score += 10;   
score *= 2;   
console.log(score); 

9. What happens when you divide by zero in JavaScript? Try it: let result = 10 / 0;

let result = 10 / 0;
console.log(result);

10. Calculate the area of a rectangle with width 5 and height 8. Store the dimensions and result 
in appropriately named variables.

let width = 5;
let height = 8;
let area = width * height;
console.log("width:", width);
console.log("height:", height);
console.log("Area of rectangle", area);










