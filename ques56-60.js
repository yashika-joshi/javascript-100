56. Convert this for loop to a while loop: 
javascript 
for (let i = 0; i < 5; i++) { 
console.log("Count: " + i); 
} 
ANS:
let i = 0;
while (i < 5) {
    console.log("Count: " + i);
    i++;
}

57. Create a number guessing game using a while loop. Keep asking for guesses until the user 
guesses the correct number (42).
ANS:
let correctNumber = 42;
let guess = 0;
while (guess !== correctNumber) {
    guess++; 
    console.log("Guess " + guess);
    if (guess !== correctNumber) {
        console.log("Wrong guess");
    }
}
console.log("Correct");


58. What's the danger with this while loop? How would you fix it? 
javascript 
let count = 1; 
while (count < 10) { 
console.log(count); 
} 
ANS:
let count = 1;
while (count < 10) {
    console.log(count);
    count++; 
}

59. Write a while loop that keeps doubling a number (starting with 1) until it exceeds 1000. Print 
each value. 
ANS:
let num = 1;
while (num <= 1000) {
    console.log(num);
    num *= 2;
}

60. Create a simple ATM simulation: keep asking for withdrawal amounts until the balance 
reaches 0 (start with $500). 

61. Use a for...of loop to iterate through this array and print each fruit: 
javascript 
let fruits = ["apple", "banana", "orange", "grape"]; 
ANS:
62. Create a do...while loop that asks for a password and keeps asking until the user enters 
"secret123".
ANS:
let password;
do {
    password = prompt("Enter password:");
} while (password !== "secret123");

console.log("✅ Access granted!");
