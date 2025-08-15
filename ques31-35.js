31. Create a login system check: user must have both a valid username (not empty) AND a valid 
password (at least 6 characters). Use logical operators. 
ANS:
let username="yashika"
let pass ="yashika1"
if(username!==""&&password.length>=6){
    console.log("login successful");
}
else{
    console.log("wrong password");
}

32. Write a condition that checks if it's weekend (Saturday OR Sunday) using the || operator. 
ANS:
let day = "Monday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It weekend");
} else {
    console.log("Its not weekend");
}

33. What will this output? Walk through the logic: 
 javascript 
 let isLoggedIn = false; 
 let hasPermission = true; 
 console.log(!isLoggedIn || hasPermission); 
console.log(isLoggedIn && !hasPermission); 
ANS:
TRUE 
FALSE
34. Create a weather app condition: it's a good day to go outside if it's sunny OR (not raining 
AND temperature > 70). 
let 
35. Use the ternary operator to create a message: if age >= 18, show "Can vote", otherwise "Too 
young to vote". 
ANS:
let age = 20;
let message = (age >= 18) ? "Can vote" : "Too young to vote";
console.log(message);


