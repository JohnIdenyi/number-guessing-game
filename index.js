const username = prompt("Please enter your username");
const min = 1;
let max = 2;
let stage = 1;
let points = 0;
const guessNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const range = Number(prompt(`Hi ${username}! Enter a number`));

// Check if guess number is correct or not
function guess(range, guessNumber) {
    if (range < min || range > max || isNaN(range)) {
        console.log(`Number must between ${min} and ${max}`);
    } else {
        if (range === guessNumber) {
            console.log("Correct");
            nextStage();
        } else {
            console.log("Game over");
            console.log(`Total points: ${points}`);
        }
    }

}

guess(range, guessNumber);

// next Stage function to be executed if guess is correct
function nextStage() {
    // Add 1 to max range
    max++;
    // Increase stage by 1
    stage++
    // Increase points by 1 and output points 
    points++
    points > 1 ? console.log(`${points} points`) : console.log(`${points} point`);
    // Generate new random number 
    let guessNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~`);

    // Prompt user to enter new number
    console.log(`Stage ${stage}! Range has been increased from ${min} - ${max}`);
    let range = Number(prompt(`${username} Enter a number`));

    // call guess function to check new guess
    guess(range, guessNumber);
}

