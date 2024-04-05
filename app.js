console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds (count) {
    for (let i = 0; i > count; i--) {
     if (i % 2 !=0) {
     console.log(i);

     }
     }
 }
//function execution
printOdds(-40);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let userName = "Jason";
let age = 14;

function checkAge(userName, age) {   
    if (!userName) {
        console.log("Please provide a valid username");
    } 
    
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, you need to wait until you are 16 years old!`;

    if (age < 16) {
        console.log(belowSixteen);
    } else if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log("Invalid age");
    }
}
    checkAge("Jason", 14);

    // Exercise 3 Section
    function getQuadrant(x, y) {
        if (x == undefined || y == undefined) {
            console.log("Invalid (x, y) location");
            return null;
        }

        if (x == 0 && y == 0) {
        //(0, 0) - origin
            console.log("Origin point");
        } else if ( x == 0) {
        // (0, something) - y-axie
           console.log("Y-axis");
        } else if (y == 0) {
            console.log("X-axis");
        } else if (x > 0 && y > 0) {
            //Q1
         return "Quadrant 1";
        } else if (x < 0 && y > 0) {
            //Q2
            console.log("Quadrant 2");
         } else if (x < 0 && y < 0) {
            //Q3
           return "Quadrant 3";
        } else if (x > 0 && y < 0) {
            //Q4
            console.log("Quadrant 4");
        }
    }  
     console.log(getQuadrant());
     console.log(getQuadrant(1, 1));
     console.log(getQuadrant(-20, -50));

    // Exercise 4 Section
    function getTriangleType(a, b, c) {
        if (a + b < c || b + c < a || a + c < b) {  //invalid triagle
            return "Error: not a triangle";
        }

        if (a == b && b == c) {
            return "Equallateral";
          } if (a == b || b == c || a == c) {
                return "Isosceles";
          } 
          return "Scalene";
        }
        console.log("valid triangle");

    console.log(getTriangleType(3, 4, 5));
    console.log(getTriangleType(5,5,5));
    console.log(getTriangleType(1,1,2));

    // Exercise 5 Section
    function dataPlan(planLimit, currDay, usageSoFar) {
        const daysRemaining = 30 - currDay;
        const dataRemaining = planLimit - usageSoFar;
        const idealAverage = (planLimit / 30).toFixed(2);
        const currAvgUsage = (usageSoFar / currDay).toFixed(2);
        const projectedUsage = currAvgUsage * 30;
        const exceededUsage = (projectedUsage - planLimit).toFixed(2);
        const underUsage = (planLimit - projectedUsage);
        const newIdealUsage = (dataRemaining / daysRemaining).toFixed(2);

        let output = "";
        output += `${currDay} days used, ${daysRemaining} days remaining\nAverage Daily use: ${idealAverage} GB/day\n`;
        

        if (exceededUsage > 0) {
           output += `You are exceeding your average dailoy use (${currAvgUsage} GB/day, continuing this high usage. you will 
           exceed your data plan by ${exceededUsage} GB.\nTo stay below your average data plan, use no more than ${newIdealUsage}
        GB/day.`;
        } else if (currAvgUsage < idealAverage) {
           output += `You are Under your average daily use (${currAvgUsage} GB/day), continue this reserved usage level, you 
           will have ${underUsage} GB./nTo take advantage of every last GB you have, start using ${newIdealUsage} GB/day`;
        } else {  //right on the ideal usage levels.
            output += `you are doing good.`
        }
        console.log(output);
    }
    dataPlan(100, 15, 56);
    dataPlan(100, 15, 5);
    dataPlan(100, 23, 39);
    dataPlan(150, 23, 2);
    dataPlan(150, 15, 29);