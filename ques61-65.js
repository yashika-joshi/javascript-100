61. Use a for...of loop to iterate through this array and print each fruit: 
javascript 
let fruits = ["apple", "banana", "orange", "grape"]; 
ANS:
let fruits = ["apple", "banana", "orange", "grape"];
for (let fruit of fruits) {
    console.log(fruit);
}

62. Create a do...while loop that asks for a password and keeps asking until the user enters 
"secret123".
ANS:
let password;
do {
    password = "secret123"; 
} while (password !== "secret123");

console.log("Access granted!");

63. Write nested loops to create this pattern: 
text 
* 
** 
*** 
**** 
***** 
ANS:
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

64. Use break and continue: print numbers 1-10, but skip 5 and stop completely at 8.
ANS:
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}

65. Create a loop that finds the first number divisible by both 3 and 7 between 1 and 100.
ANS:
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        console.log("First number:", i);
        break;
    }
}
