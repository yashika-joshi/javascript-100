41. Create a day-of-week converter. Given a number (1-7), return the day name ("Monday", 
"Tuesday", etc.). 
ANS:
let daynumber = 3; 
let Name;
switch (daynumber) {
    case 1: Name = "Monday";
    break;
    case 2: Name = "Tuesday"; 
    break;
    case 3: Name = "Wednesday"; 
    break;
    case 4: Name = "Thursday"; 
    break;
    case 5: Name = "Friday"; 
    break;
    case 6: Name = "Saturday"; 
    break;
    case 7: Name = "Sunday";
     break;
    default: Name = "Invalid day number";
}
console.log("Day " + Name);

42. Build a simple calculator using switch statement. Take two numbers and an operator (+, -, *, 
/) and return the result. 
ANS:
const num1 = 10;
const num2 = 5;
const operator = '*'; 
let result;
switch (operator) {
    case '+': result = num1 + num2;
     break;
    case '-': result = num1 - num2; 
    break;
    case '*': result = num1 * num2; 
    break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
        } 
        else {
            result = "cannot divide by zero";
        }
        break;
    default: result = "Invalid operator";
}
console.log("Result " + result);

43. Convert this if-else chain to a switch statement: 
javascript 
if (grade === "A") { 
console.log("Excellent!"); 
} else if (grade === "B") { 
console.log("Good job!"); 
} else if (grade === "C") { 
console.log("Okay"); 
} else { 
console.log("Needs improvement"); 
} 
ANS:
let grade = "B"; 
switch (grade) {
    case "A": console.log("Excellent");
     break;
    case "B": console.log("Good job");
     break;
    case "C": console.log("Okay"); 
    break;
    default: console.log("Needs improvement");
}

44. Create a season detector using switch. Given a month number (1-12), return the season. 
ANS:
let month = 11; 
let season;
switch (month) {
    case 12:
    case 1:
    case 2: season = "Winter";
     break;
    case 3:
    case 4:
    case 5: season = "Spring"; 
    break;
    case 6:
    case 7:
    case 8: season = "Summer"; 
    break;
    case 9:
    case 10:
    case 11: season = "Autumn"; 
    case 12:
    break;
    default: season = "Invalid month";
}
console.log("Season: " + season);

45. What happens if you forget the break statement in a switch case? Demonstrate with code. 


