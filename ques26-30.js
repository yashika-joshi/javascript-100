26. Compare these pairs using both == and ===. Explain the differences: 
• 5 and "5" 
• true and 1 
• false and 0 
ANS: 5=="5" is true because "5"is converted to 5 and its equal  & 5==="5"its false because=== dont convert string to no its ot equal to five . 
true==1 is true because same it converts true to 1 and true===1 fails to do So 
false==0 is true because it converts false to 0 and same false===0 fails to do so 


27. Write conditions to check if a person's age qualifies them for: 
• Child ticket (under 12) 
• Adult ticket (12-64) 
• Senior ticket (65 and over) 
ANS:
let age = 40;
if (age < 12) {
  console.log("Child ticket");
}
 else if (age >= 12 && age <= 64) {
  console.log("Adult ticket");
}
 else if (age >= 65) {
  console.log("Senior ticket");
}

28. What will this output and why? 
javascript 
console.log("apple" > "banana"); 
console.log("Apple" > "apple"); 
ANS:
console.log("apple" > "banana");  false because in a is 97 and b is 98 so b has greater ascii value than a.
console.log("Apple" > "apple"); false because in A is 65 and a is 97 so a has greater ascii value than A.

29. Create variables for two test scores. Write code that determines which score is higher, or if 
they're equal. 
ANS:
let score1 = 55;
let score2 = 100;
if (score1 > score2) {
  console.log("Score 1 is higher");
} else if (score2 > score1) {
  console.log("Score 2 is higher");
}
 else {
  console.log("Scores are equal");
}

30. Fix this comparison to work correctly: 
javascript 
let userAge = "25"; 
if (userAge >= 18) { 
console.log("Adult"); 
} 
ANS:
let userAge = 25; 
if (userAge >= 18) { 
console.log("Adult"); 
} 
