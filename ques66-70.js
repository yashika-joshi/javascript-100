66. Create an array of your top 5 favorite movies. Access and print the first and last movies. 
ANS:
let movies = ["hellllooooooo", "hi", "hello", "hera pheri", "dhol"];
console.log(movies[0]);
console.log(movies[movies.length - 1]);

67. What will this code output? 
javascript 
let numbers = [10, 20, 30]; 
console.log(numbers[0]); 
console.log(numbers[3]); 
console.log(numbers.length); 
ANS:
let numbers = [10, 20, 30];
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers.length);


68. Create an empty array called shoppingList. Add "milk", "bread", and "eggs" to it using bracket 
notation. 
ANS:
let shoppingList = [];
shoppingList[0] = "milk";
shoppingList[1] = "bread";
shoppingList[2] = "eggs";
console.log(shoppingList);

69. Change the second item in this array from "cat" to "dog": 
let pets = ["hamster", "cat", "bird"]; 
ANS:
let pets = ["hamster", "cat", "bird"];
pets[1] = "dog";
console.log(pets);

70. Create an array of mixed data types (string, number, boolean) and print each element with its types.
ANS:
let mixed = ["hello", 42, true];
for (let item of mixed) {
    console.log(item, "-", typeof item);
}
