81. Take the string "JavaScript is awesome" and: 
• Convert it to uppercase 
• Find its length 
• Check if it includes "Script" 
• Get the substring from index 4 to 10 
ANS:
let str = "JavaScript is awesome";
console.log(str.toUpperCase());
console.log(str.length);
console.log(str.includes("Script"));
console.log(str.substring(4, 10));

82. Create a function that takes a person's full name and returns their initials. 
ANS:
function getInitials(fullName) {
    return fullName
        .split(" ")              
        .filter(word => word)     
        .map(word => word[0].toUpperCase()) 
        .join(""); 
console.log(getInitials("Yashika Joshi")); 

83. What will this code output? 
let text = "Hello World"; 
console.log(text.slice(0, 5)); 
console.log(text.slice(-5)); 
console.log(text.slice(6)); 
ANS:
let text = "Hello World";
console.log(text.slice(0, 5));
console.log(text.slice(-5));
console.log(text.slice(6));

84. Write code to reverse a string without using built-in reverse methods. 
ANS:function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("JavaScript"));

85. Create a simple word counter that counts the words in a sentence (hint: use split()).
ANS:
