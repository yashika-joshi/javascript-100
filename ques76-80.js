76. Use a for loop to print each element in this array with its index:
let colors = ["red", "green", "blue", "yellow"]; 
ANS:
let colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

77. Create an array of numbers and use a loop to find the largest number. 
ANS:
let nums = [10, 25, 7, 50, 32];
let largest = nums[0];
for (let num of nums) {
    if (num > largest) {
        largest = num;
    }
}
console.log("Largest:", largest);

78. Write code that counts how many times the word "apple" appears in an array of fruits. 
ANS:
let fruitsArr = ["apple", "banana", "apple", "orange", "apple"];
let count = 0;
for (let fruit of fruitsArr) {
    if (fruit === "apple") count++;
}
console.log("Apple count:", count);

79. Use a for...of loop to calculate the total of all numbers in an array: 
let scores = [85, 92, 78, 96, 88]; 
ANS:
let scores = [85, 92, 78, 96, 88];
let total = 0;
for (let score of scores) {
    total += score;
}
console.log("Total:", total);

80. Create a function that takes an array of names and returns a greeting for each person.
ANS:
function greet(names) {
    let greetings = [];
    for (let name of names) {
        greetings.push(`Hello, ${name}!`);
    }
    return greetings;
}
console.log(greet(["Alice", "Bob", "Charlie"]));
