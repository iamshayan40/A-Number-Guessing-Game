import inquirer from "inquirer";
async function guessNumber() {
    let continueGame = true;
    while (continueGame) {
        const systemGeneratedNum = Math.floor(Math.random() * 10);
        const answers = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: "Enter any guess between 1 to 10: "
            }
        ]);
        const { userGuess } = answers;
        if (userGuess === systemGeneratedNum) {
            console.log(`${userGuess} is the correct guess.!`);
            console.log("Yayy! your guess is right!");
        }
        else {
            console.log(`Sorry, that's incorrect. Better luck next time.`);
            console.log(`The right guess was ${systemGeneratedNum}`);
        }
        const { playAgain } = await inquirer.prompt([
            {
                type: "confirm",
                name: "playAgain",
                message: "Do you want to play again?",
                default: false
            }
        ]);
        continueGame = playAgain;
    }
}
guessNumber();
// import inquirer from "inquirer";
// type ansType = {
//     userGuess : number
// }
// async function guessNumber() {
//     let continueGame = true;
//     while (continueGame) {
//         const systemGeneratedNum =  Math.floor(Math.random() * 10);
//         const answers: ansType = await inquirer.prompt([
//             {
//                 type: "number",
//                 name: "userGuess",
//                 message: "Enter any guess between 1 to 10: "
//             }
//         ]);
//         const { userGuess } = answers;
//         if (userGuess === systemGeneratedNum) {
//             console.log(`${userGuess} is the correct guess.!`);
//             console.log("Yayy! your guess is right!");
//         } else {    
//             console.log(`Sorry, that's incorrect. Better luck next time.`);
//             console.log(`The right guess was ${systemGeneratedNum}`);
//         }
//         const { playAgain } = await inquirer.prompt([
//             {
//                 type: "confirm",
//                 name: "playAgain",
//                 message: "Do you want to play again?",
//                 default: false
//             }
//         ]);
//         continueGame = playAgain;
//     }
// }
// guessNumber();
