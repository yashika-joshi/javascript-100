51. Write a for loop that counts from 1 to 10 and prints each number. 
ANS:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

52. Create a multiplication table for the number 7 (7 x 1 = 7, 7 x 2 = 14, etc.) up to 7 x 12. 
ANS:
let num = 7; 
for (let i = 1; i <= 12; i++) {
    let result = num * i; 
    console.log(num + " x " + i + " = " + result);
}

53. What will this loop output? Step through it: 
javascript 
for (let i = 0; i < 5; i++) { 
console.log(i * 2); 
} 
ANS:
0, 2, 4, 6, 8 

54. Write a loop that counts backwards from 10 to 1, then prints "Blast off!" 
ANS:
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Blast off!");

55. Create a loop that only prints even numbers from 2 to 20.
for(let i=2;i<=20;i+=2){
console.log(i);
}