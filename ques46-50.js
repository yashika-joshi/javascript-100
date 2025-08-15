46. Create a movie ticket pricing system: 
• Children under 12: $8 
• Students (12-17): $10 
• Adults (18-64): $12 
• Seniors (65+): $9 
• Add $3 for 3D movies 
ANS:

47. Build a driving eligibility checker that considers both age (>=16) and whether they have a 
permit. 
ANS:
let driverAge = 17;
let hasPermit = true; 
if (driverAge >= 16) {
    if (hasPermit) {
        console.log(" eligible ");
    } else {
        console.log(" not eligible ");
    }
} else {
    console.log(" not eligible ");
}

48. Create a restaurant recommendation system based on budget (low/medium/high) and 
cuisine preference (Italian/Mexican/Chinese). 
ANS:

49. What will this nested condition output? 
javascript 
let weather = "sunny"; 
let temperature = 75; 
 
if (weather === "sunny") { 
    if (temperature > 70) { 
        console.log("Perfect beach day!"); 
    } else { 
        console.log("Sunny but chilly"); 
    } 
} else { 
    console.log("Not ideal weather"); 
} 
ANS:
let weather = "sunny";
let temperature = 75;
if (weather === "sunny") {
    if (temperature > 70) {
        console.log("Perfect beach day!");
    } else {
        console.log("Sunny but chilly");
    }
} else {
    console.log("Not ideal weather");
}

50. Refactor this nested if statement using logical operators: 
javascript 
if (isWeekend) { 
    if (isSunny) { 
        if (temperature > 75) { 
            console.log("Great day for outdoor activities!"); 
        } 
    } 
}
    ANS:
let isWeekend = true;
let isSunny = true;
let temperature = 80;

if (isWeekend && isSunny && temperature > 75) {
    console.log("Great day for outdoor activities!");
} else {
    console.log("not great day");
}
