36. Create a grade calculator that converts numerical scores to letter grades: 
• 90-100: A 
• 80-89: B 
• 70-79: C 
• 60-69: D 
• Below 60: F 
ANS:
let score = 85;
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} 
else if (score >= 80) {
    grade = "B";
}  
else if (score >= 70) {
    grade = "C";
}  
else if (score >= 60) {
    grade = "D";
} 
else {
    grade = "F";
}
console.log("Score: " + score + ", Grade: " + grade);

37. Build a simple password strength checker. Check if password length >= 8, and give 
feedback. 
let password = "mypassword";
if (password.length >= 8) {
    console.log("Strong password");
}
 else {
    console.log("Password too short");
}

38. What's wrong with this code? Fix it: 
javascript 
let score = 85; 
if (score = 100) { 
console.log("Perfect!"); 
} 
ANS:
let score = 85; 
if (score === 100) { 

console.log("Perfect!"); 
} 
else{
    console.log("not perfect");
}
39. Create a number guessing game checker. Given a secret number (42) and user guess, tell 
them if they're too high, too low, or correct. 
ANS:
const secret = 42;
const guess = 50; 
if (guess === secret) {
    console.log("Correct");
}
 else if (guess > secret) {
    console.log("Too high");
}
 else {
    console.log("Too low");
}

40. Write a leap year checker. A year is a leap year if it's divisible by 4, except for years divisible 
by 100, unless they're also divisible by 400.
ANS:
let year = 2024; 
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
}
 else {
    console.log(year + " is not a leap year.");
}
