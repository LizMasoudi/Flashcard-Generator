var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var inquirer = require("inquirer");
var fs = require("fs");

function createCard() {
    inquirer.prompt([
        {
            name: "cardType",
            type: "list",
            message: "What type of card do you want to create?",
            choices: ["a basic card", "a cloze card", "I'm done making cards"]
        }
    ]).then(function (answer) {
        if (answer.cardType === "a basic card") {
            inquirer.prompt([
                {
                    name: "front",
                    message: "What would you like the FRONT of the card to say? "
                },
                {
                    name: "back",
                    message: "What would you like the BACK of the card to say? "
                }
            ]).then(function (answers) {
                var basicCard = new BasicCard(answers.front, answers.back);
                console.log("Card Front: " + "\n" + basicCard.front);
                console.log("--------------------");
                console.log("Card Back: " + "\n" + basicCard.back);
                createCard();
            })
        }
        else if (answer.cardType === "a cloze card"){
            inquirer.prompt([
                {
                    name: "fullText",
                    message: "What would you like the full text of the card to be? "
                },
                {
                    name: "cloze",
                    message: "Which phrase would you like to remove from the card (i.e. the cloze phrase)? "
                }
            ]).then(function (answers) {
                var clozeCard = ClozeCard(answers.fullText, answers.cloze);
                console.log("--------------------");
                console.log("Card Full Text: " + "\n" + clozeCard.fullText);
                console.log("--------------------");
                console.log("Card Cloze Phrase: " + "\n" + clozeCard.cloze);
                console.log("--------------------");
                console.log("Card Partial Text: " + "\n" + clozeCard.partial);
                console.log("--------------------");
                createCard();
            })
        }
        else if (answer.cardType === "I'm done making cards"){
            process.exit();
        }
    });
}

createCard();

// var firstPresidentCloze = new ClozeCard (
//     "George Washington was the first president of the United States",
//     "George Washington"
// );

// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.partial);
// console.log(firstPresidentCloze.fullText);